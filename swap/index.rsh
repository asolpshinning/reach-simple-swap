'reach 0.1';

export const main = Reach.App(() => {
    setOptions({ untrustworthyMaps: true });
    const Creator = Participant('Creator', {
        getParams: Fun([Bytes(15)], Address),
    })

    const User = API({
        // swapWithUser(user, amount)
        startSwap: Fun([Address, UInt], Bool),
        // receiveSwap()
        receiveSwap: Fun([], Bool),  
        //optIn
        optIn: Fun([], Bool),
    });

    const Views = View({
        checkInitiatedSwap: Fun([Address], UInt),
    });

    init();

    Creator.only(() => {
        const startSwapAddress = declassify(interact.getParams('I have deployed'));
    });

    Creator.publish(startSwapAddress);

    const end = UInt.max;
    //unwrap integer map handler
    const unwInt = (m) => fromSome(m, 0);

    //maps storing information for each user
    const swapToRec = new Map(UInt);  

    //[totSTeverAllocated, totBTeverAllocated, contractManager, distributionNumber]
    const [] = parallelReduce([])
        .invariant(balance() >= 0)
        .while(true)
        //.paySpec([bT])
        .define(() => {
            Views.checkInitiatedSwap.set((addr) => unwInt(swapToRec[addr]));
        })
        .api(
            User.startSwap,
            // Assumes
            ((addr, amt) => {
                assume(unwInt(swapToRec[addr]) == 0, 'Swap already initiated for this address');

            }),
            // Payments
            ((address, amt) => amt),
            // Consensus
            ((addr, amt, res) => {
                require(unwInt(swapToRec[addr]) == 0, 'Swap already initiated for this address');
                swapToRec[addr] = amt;
                res(true);
                return [];
            })
        ).api(
            User.receiveSwap,
            // Assumes
            (() => {
                assume(balance() >0, 'Zero balance');
                assume(unwInt(swapToRec[this]) > 0, 'No swap initiated for you');
                assume(balance() >= unwInt(swapToRec[this]), 'Not enough money in contract');

            }),
            // Payments
            (() => 0),
            // Consensus
            ((res) => {
                require(balance() >0, 'Zero balance');
                require(unwInt(swapToRec[this]) > 0, 'No swap initiated for you');
                require(balance() >= unwInt(swapToRec[this]), 'Not enough money in contract');
                transfer(unwInt(swapToRec[this])).to(this);
                swapToRec[this] = 0;
                res(true);
                return [];
            })
        ).api(
            User.optIn,
            // Assumes
            (() => {
            }),
            // Payments
            (() => 0),
            // Consensus
            ((res) => {
                res(true);
                return [];
            })
        )
        .timeout(absoluteTime(end), () => {
            Anybody.publish();
            return [];
        });

    commit();
    exit();
});