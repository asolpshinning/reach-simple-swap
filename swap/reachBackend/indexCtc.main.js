// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc1
    });
  const map0_ctc = ctc3;
  
  
  return {
    infos: {
      checkInitiatedSwap: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v283, v290] = svs;
            return (await ((async (_v293 ) => {
                const v293 = stdlib.protect(ctc0, _v293, null);
              
              const v294 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v293), null);
              const v295 = stdlib.fromSome(v294, stdlib.checkedBigNumberify('./index.rsh:32:39:decimal', stdlib.UInt_max, '0'));
              
              return v295;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc1
        }
      },
    views: {
      3: [ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc6 = stdlib.T_Data({
    optIn0_52: ctc4,
    receiveSwap0_52: ctc4,
    startSwap0_52: ctc5
    });
  const ctc7 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v281 = 'I have deployed';
  const v282 = stdlib.protect(ctc3, await interact.getParams(v281), {
    at: './index.rsh:25:63:application',
    fs: ['at ./index.rsh:24:17:application call to [unknown function] (defined at: ./index.rsh:24:21:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v282],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:28:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:28:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v284], secs: v286, time: v285, didSend: v28, from: v283 } = txn1;
      
      ;
      const v287 = v285;
      const v290 = stdlib.checkedBigNumberify('./index.rsh:22:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v284], secs: v286, time: v285, didSend: v28, from: v283 } = txn1;
  ;
  let v287 = v285;
  let v290 = stdlib.checkedBigNumberify('./index.rsh:22:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return true;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc6],
      timeoutAt: ['time', stdlib.UInt_max],
      waitIfNotPresent: false
      }));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv({
        args: [v283, v290],
        evt_cnt: 0,
        funcNum: 3,
        lct: v287,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:96:21:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v524, time: v523, didSend: v257, from: v522 } = txn3;
          
          ;
          const cv287 = v523;
          const cv290 = v290;
          
          await (async () => {
            const v287 = cv287;
            const v290 = cv290;
            
            if (await (async () => {
              
              return true;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v524, time: v523, didSend: v257, from: v522 } = txn3;
      ;
      const v525 = stdlib.addressEq(v283, v522);
      stdlib.assert(v525, {
        at: './index.rsh:96:21:dot',
        fs: ['at ./index.rsh:95:40:application call to [unknown function] (defined at: ./index.rsh:95:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv287 = v523;
      const cv290 = v290;
      
      v287 = cv287;
      v290 = cv290;
      
      continue;
      }
    else {
      const {data: [v348], secs: v350, time: v349, didSend: v185, from: v347 } = txn2;
      switch (v348[0]) {
        case 'optIn0_52': {
          const v351 = v348[1];
          undefined /* setApiDetails */;
          ;
          const v363 = true;
          await txn2.getOutput('optIn', 'v363', ctc7, v363);
          const cv287 = v349;
          const cv290 = v290;
          
          v287 = cv287;
          v290 = cv290;
          
          continue;
          break;
          }
        case 'receiveSwap0_52': {
          const v408 = v348[1];
          undefined /* setApiDetails */;
          ;
          const v429 = stdlib.gt(v290, stdlib.checkedBigNumberify('./index.rsh:74:36:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v429, {
            at: './index.rsh:74:24:application',
            fs: ['at ./index.rsh:73:13:application call to [unknown function] (defined at: ./index.rsh:73:13:function exp)'],
            msg: 'Zero balance',
            who: 'Creator'
            });
          const v430 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v347), null);
          const v431 = stdlib.fromSome(v430, stdlib.checkedBigNumberify('./index.rsh:32:39:decimal', stdlib.UInt_max, '0'));
          const v432 = stdlib.gt(v431, stdlib.checkedBigNumberify('./index.rsh:75:51:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v432, {
            at: './index.rsh:75:24:application',
            fs: ['at ./index.rsh:73:13:application call to [unknown function] (defined at: ./index.rsh:73:13:function exp)'],
            msg: 'No swap initiated for you',
            who: 'Creator'
            });
          const v436 = stdlib.ge(v290, v431);
          stdlib.assert(v436, {
            at: './index.rsh:76:24:application',
            fs: ['at ./index.rsh:73:13:application call to [unknown function] (defined at: ./index.rsh:73:13:function exp)'],
            msg: 'Not enough money in contract',
            who: 'Creator'
            });
          const v442 = stdlib.sub(v290, v431);
          ;
          await stdlib.mapSet(map0, v347, stdlib.checkedBigNumberify('./index.rsh:78:35:decimal', stdlib.UInt_max, '0'));
          const v443 = true;
          await txn2.getOutput('receiveSwap', 'v443', ctc7, v443);
          const cv287 = v349;
          const cv290 = v442;
          
          v287 = cv287;
          v290 = cv290;
          
          continue;
          break;
          }
        case 'startSwap0_52': {
          const v465 = v348[1];
          undefined /* setApiDetails */;
          const v473 = v465[stdlib.checkedBigNumberify('./index.rsh:45:13:spread', stdlib.UInt_max, '1')];
          const v475 = stdlib.add(v290, v473);
          ;
          const v508 = v465[stdlib.checkedBigNumberify('./index.rsh:45:13:spread', stdlib.UInt_max, '0')];
          const v510 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v508), null);
          const v511 = stdlib.fromSome(v510, stdlib.checkedBigNumberify('./index.rsh:32:39:decimal', stdlib.UInt_max, '0'));
          const v512 = stdlib.eq(v511, stdlib.checkedBigNumberify('./index.rsh:56:52:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v512, {
            at: './index.rsh:56:24:application',
            fs: ['at ./index.rsh:55:13:application call to [unknown function] (defined at: ./index.rsh:55:13:function exp)'],
            msg: 'Swap already initiated for this address',
            who: 'Creator'
            });
          await stdlib.mapSet(map0, v508, v473);
          const v513 = true;
          await txn2.getOutput('startSwap', 'v513', ctc7, v513);
          const cv287 = v349;
          const cv290 = v475;
          
          v287 = cv287;
          v290 = cv290;
          
          continue;
          break;
          }
        }}
    
    }
  return;
  
  
  };
export async function _optIn3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _optIn3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _optIn3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc6 = stdlib.T_Data({
    optIn0_52: ctc4,
    receiveSwap0_52: ctc4,
    startSwap0_52: ctc5
    });
  const ctc7 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v283, v290] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc1]);
  const v336 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:85:13:application call to [unknown function] (defined at: ./index.rsh:85:13:function exp)', 'at ./index.rsh:38:30:application call to "runoptIn0_52" (defined at: ./index.rsh:82:14:function exp)', 'at ./index.rsh:38:30:application call to [unknown function] (defined at: ./index.rsh:38:30:function exp)'],
    msg: 'in',
    who: 'optIn'
    });
  const v340 = ['optIn0_52', v336];
  
  const txn1 = await (ctc.sendrecv({
    args: [v283, v290, v340],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:88:20:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v348], secs: v350, time: v349, didSend: v185, from: v347 } = txn1;
      
      switch (v348[0]) {
        case 'optIn0_52': {
          const v351 = v348[1];
          sim_r.txns.push({
            kind: 'api',
            who: "optIn"
            });
          ;
          const v363 = true;
          const v364 = await txn1.getOutput('optIn', 'v363', ctc7, v363);
          
          const v749 = v290;
          sim_r.isHalt = false;
          
          break;
          }
        case 'receiveSwap0_52': {
          const v408 = v348[1];
          
          break;
          }
        case 'startSwap0_52': {
          const v465 = v348[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v348], secs: v350, time: v349, didSend: v185, from: v347 } = txn1;
  switch (v348[0]) {
    case 'optIn0_52': {
      const v351 = v348[1];
      undefined /* setApiDetails */;
      ;
      const v363 = true;
      const v364 = await txn1.getOutput('optIn', 'v363', ctc7, v363);
      if (v185) {
        stdlib.protect(ctc0, await interact.out(v351, v364), {
          at: './index.rsh:83:13:application',
          fs: ['at ./index.rsh:83:13:application call to [unknown function] (defined at: ./index.rsh:83:13:function exp)', 'at ./index.rsh:91:20:application call to "res" (defined at: ./index.rsh:90:13:function exp)', 'at ./index.rsh:90:13:application call to [unknown function] (defined at: ./index.rsh:90:13:function exp)'],
          msg: 'out',
          who: 'optIn'
          });
        }
      else {
        }
      
      const v749 = v290;
      return;
      
      break;
      }
    case 'receiveSwap0_52': {
      const v408 = v348[1];
      return;
      break;
      }
    case 'startSwap0_52': {
      const v465 = v348[1];
      return;
      break;
      }
    }
  
  
  };
export async function _receiveSwap3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _receiveSwap3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _receiveSwap3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc6 = stdlib.T_Data({
    optIn0_52: ctc4,
    receiveSwap0_52: ctc4,
    startSwap0_52: ctc5
    });
  const ctc7 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v283, v290] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc1]);
  const v317 = ctc.selfAddress();
  const v319 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:13:function exp)', 'at ./index.rsh:38:30:application call to "runreceiveSwap0_52" (defined at: ./index.rsh:61:14:function exp)', 'at ./index.rsh:38:30:application call to [unknown function] (defined at: ./index.rsh:38:30:function exp)'],
    msg: 'in',
    who: 'receiveSwap'
    });
  const v322 = stdlib.gt(v290, stdlib.checkedBigNumberify('./index.rsh:65:35:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v322, {
    at: './index.rsh:65:23:application',
    fs: ['at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:17:function exp)', 'at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:13:function exp)', 'at ./index.rsh:38:30:application call to "runreceiveSwap0_52" (defined at: ./index.rsh:61:14:function exp)', 'at ./index.rsh:38:30:application call to [unknown function] (defined at: ./index.rsh:38:30:function exp)'],
    msg: 'Zero balance',
    who: 'receiveSwap'
    });
  const v323 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v317), null);
  const v324 = stdlib.fromSome(v323, stdlib.checkedBigNumberify('./index.rsh:32:39:decimal', stdlib.UInt_max, '0'));
  const v325 = stdlib.gt(v324, stdlib.checkedBigNumberify('./index.rsh:66:50:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v325, {
    at: './index.rsh:66:23:application',
    fs: ['at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:17:function exp)', 'at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:13:function exp)', 'at ./index.rsh:38:30:application call to "runreceiveSwap0_52" (defined at: ./index.rsh:61:14:function exp)', 'at ./index.rsh:38:30:application call to [unknown function] (defined at: ./index.rsh:38:30:function exp)'],
    msg: 'No swap initiated for you',
    who: 'receiveSwap'
    });
  const v329 = stdlib.ge(v290, v324);
  stdlib.assert(v329, {
    at: './index.rsh:67:23:application',
    fs: ['at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:17:function exp)', 'at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:13:function exp)', 'at ./index.rsh:38:30:application call to "runreceiveSwap0_52" (defined at: ./index.rsh:61:14:function exp)', 'at ./index.rsh:38:30:application call to [unknown function] (defined at: ./index.rsh:38:30:function exp)'],
    msg: 'Not enough money in contract',
    who: 'receiveSwap'
    });
  const v332 = ['receiveSwap0_52', v319];
  
  const txn1 = await (ctc.sendrecv({
    args: [v283, v290, v332],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:71:20:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v348], secs: v350, time: v349, didSend: v185, from: v347 } = txn1;
      
      switch (v348[0]) {
        case 'optIn0_52': {
          const v351 = v348[1];
          
          break;
          }
        case 'receiveSwap0_52': {
          const v408 = v348[1];
          sim_r.txns.push({
            kind: 'api',
            who: "receiveSwap"
            });
          ;
          const v430 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v347), null);
          const v431 = stdlib.fromSome(v430, stdlib.checkedBigNumberify('./index.rsh:32:39:decimal', stdlib.UInt_max, '0'));
          const v442 = stdlib.sub(v290, v431);
          sim_r.txns.push({
            kind: 'from',
            to: v347,
            tok: undefined /* Nothing */
            });
          await stdlib.simMapSet(sim_r, 0, v347, stdlib.checkedBigNumberify('./index.rsh:78:35:decimal', stdlib.UInt_max, '0'));
          const v443 = true;
          const v444 = await txn1.getOutput('receiveSwap', 'v443', ctc7, v443);
          
          const v757 = v442;
          sim_r.isHalt = false;
          
          break;
          }
        case 'startSwap0_52': {
          const v465 = v348[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v348], secs: v350, time: v349, didSend: v185, from: v347 } = txn1;
  switch (v348[0]) {
    case 'optIn0_52': {
      const v351 = v348[1];
      return;
      break;
      }
    case 'receiveSwap0_52': {
      const v408 = v348[1];
      undefined /* setApiDetails */;
      ;
      const v429 = stdlib.gt(v290, stdlib.checkedBigNumberify('./index.rsh:74:36:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v429, {
        at: './index.rsh:74:24:application',
        fs: ['at ./index.rsh:73:13:application call to [unknown function] (defined at: ./index.rsh:73:13:function exp)'],
        msg: 'Zero balance',
        who: 'receiveSwap'
        });
      const v430 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v347), null);
      const v431 = stdlib.fromSome(v430, stdlib.checkedBigNumberify('./index.rsh:32:39:decimal', stdlib.UInt_max, '0'));
      const v432 = stdlib.gt(v431, stdlib.checkedBigNumberify('./index.rsh:75:51:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v432, {
        at: './index.rsh:75:24:application',
        fs: ['at ./index.rsh:73:13:application call to [unknown function] (defined at: ./index.rsh:73:13:function exp)'],
        msg: 'No swap initiated for you',
        who: 'receiveSwap'
        });
      const v436 = stdlib.ge(v290, v431);
      stdlib.assert(v436, {
        at: './index.rsh:76:24:application',
        fs: ['at ./index.rsh:73:13:application call to [unknown function] (defined at: ./index.rsh:73:13:function exp)'],
        msg: 'Not enough money in contract',
        who: 'receiveSwap'
        });
      const v442 = stdlib.sub(v290, v431);
      ;
      await stdlib.mapSet(map0, v347, stdlib.checkedBigNumberify('./index.rsh:78:35:decimal', stdlib.UInt_max, '0'));
      const v443 = true;
      const v444 = await txn1.getOutput('receiveSwap', 'v443', ctc7, v443);
      if (v185) {
        stdlib.protect(ctc0, await interact.out(v408, v444), {
          at: './index.rsh:62:13:application',
          fs: ['at ./index.rsh:62:13:application call to [unknown function] (defined at: ./index.rsh:62:13:function exp)', 'at ./index.rsh:79:20:application call to "res" (defined at: ./index.rsh:73:13:function exp)', 'at ./index.rsh:73:13:application call to [unknown function] (defined at: ./index.rsh:73:13:function exp)'],
          msg: 'out',
          who: 'receiveSwap'
          });
        }
      else {
        }
      
      const v757 = v442;
      return;
      
      break;
      }
    case 'startSwap0_52': {
      const v465 = v348[1];
      return;
      break;
      }
    }
  
  
  };
export async function _startSwap3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _startSwap3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _startSwap3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    optIn0_52: ctc5,
    receiveSwap0_52: ctc5,
    startSwap0_52: ctc4
    });
  const ctc7 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v283, v290] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc1]);
  const v302 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:48:13:application call to [unknown function] (defined at: ./index.rsh:48:13:function exp)', 'at ./index.rsh:38:30:application call to "runstartSwap0_52" (defined at: ./index.rsh:45:13:function exp)', 'at ./index.rsh:38:30:application call to [unknown function] (defined at: ./index.rsh:38:30:function exp)'],
    msg: 'in',
    who: 'startSwap'
    });
  const v303 = v302[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v304 = v302[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v308 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v303), null);
  const v309 = stdlib.fromSome(v308, stdlib.checkedBigNumberify('./index.rsh:32:39:decimal', stdlib.UInt_max, '0'));
  const v310 = stdlib.eq(v309, stdlib.checkedBigNumberify('./index.rsh:49:51:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v310, {
    at: './index.rsh:49:23:application',
    fs: ['at ./index.rsh:48:13:application call to [unknown function] (defined at: ./index.rsh:48:26:function exp)', 'at ./index.rsh:48:13:application call to [unknown function] (defined at: ./index.rsh:48:13:function exp)', 'at ./index.rsh:38:30:application call to "runstartSwap0_52" (defined at: ./index.rsh:45:13:function exp)', 'at ./index.rsh:38:30:application call to [unknown function] (defined at: ./index.rsh:38:30:function exp)'],
    msg: 'Swap already initiated for this address',
    who: 'startSwap'
    });
  const v315 = ['startSwap0_52', v302];
  
  const txn1 = await (ctc.sendrecv({
    args: [v283, v290, v315],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [v304, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v348], secs: v350, time: v349, didSend: v185, from: v347 } = txn1;
      
      switch (v348[0]) {
        case 'optIn0_52': {
          const v351 = v348[1];
          
          break;
          }
        case 'receiveSwap0_52': {
          const v408 = v348[1];
          
          break;
          }
        case 'startSwap0_52': {
          const v465 = v348[1];
          sim_r.txns.push({
            kind: 'api',
            who: "startSwap"
            });
          const v473 = v465[stdlib.checkedBigNumberify('./index.rsh:45:13:spread', stdlib.UInt_max, '1')];
          const v475 = stdlib.add(v290, v473);
          sim_r.txns.push({
            amt: v473,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v508 = v465[stdlib.checkedBigNumberify('./index.rsh:45:13:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v508), null);
          await stdlib.simMapSet(sim_r, 0, v508, v473);
          const v513 = true;
          const v514 = await txn1.getOutput('startSwap', 'v513', ctc7, v513);
          
          const v765 = v475;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v348], secs: v350, time: v349, didSend: v185, from: v347 } = txn1;
  switch (v348[0]) {
    case 'optIn0_52': {
      const v351 = v348[1];
      return;
      break;
      }
    case 'receiveSwap0_52': {
      const v408 = v348[1];
      return;
      break;
      }
    case 'startSwap0_52': {
      const v465 = v348[1];
      undefined /* setApiDetails */;
      const v473 = v465[stdlib.checkedBigNumberify('./index.rsh:45:13:spread', stdlib.UInt_max, '1')];
      const v475 = stdlib.add(v290, v473);
      ;
      const v508 = v465[stdlib.checkedBigNumberify('./index.rsh:45:13:spread', stdlib.UInt_max, '0')];
      const v510 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v508), null);
      const v511 = stdlib.fromSome(v510, stdlib.checkedBigNumberify('./index.rsh:32:39:decimal', stdlib.UInt_max, '0'));
      const v512 = stdlib.eq(v511, stdlib.checkedBigNumberify('./index.rsh:56:52:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v512, {
        at: './index.rsh:56:24:application',
        fs: ['at ./index.rsh:55:13:application call to [unknown function] (defined at: ./index.rsh:55:13:function exp)'],
        msg: 'Swap already initiated for this address',
        who: 'startSwap'
        });
      await stdlib.mapSet(map0, v508, v473);
      const v513 = true;
      const v514 = await txn1.getOutput('startSwap', 'v513', ctc7, v513);
      if (v185) {
        stdlib.protect(ctc0, await interact.out(v465, v514), {
          at: './index.rsh:46:13:application',
          fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:13:function exp)', 'at ./index.rsh:58:20:application call to "res" (defined at: ./index.rsh:55:13:function exp)', 'at ./index.rsh:55:13:application call to [unknown function] (defined at: ./index.rsh:55:13:function exp)'],
          msg: 'out',
          who: 'startSwap'
          });
        }
      else {
        }
      
      const v765 = v475;
      return;
      
      break;
      }
    }
  
  
  };
export async function optIn(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for optIn expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for optIn expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _optIn3(ctcTop, interact);}
  };
export async function receiveSwap(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for receiveSwap expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for receiveSwap expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _receiveSwap3(ctcTop, interact);}
  };
export async function startSwap(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for startSwap expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for startSwap expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _startSwap3(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`optIn()byte`, `receiveSwap()byte`, `startSwap(address,uint64)byte`],
    pure: [`checkInitiatedSwap(address)uint64`],
    sigs: [`checkInitiatedSwap(address)uint64`, `optIn()byte`, `receiveSwap()byte`, `startSwap(address,uint64)byte`]
    },
  appApproval: `BiALAAEDAiAJxPGhkgWR54bPDSj5hIqRBf///////////wEmAwEAAQEAIjUAMRhBAqAqZEkiWzUBgQhbNQIxGSMSQQAKMQAoIQWvZkICbDYaABdJQQB5IjUEIzUGSSEGDEAAOUkhBwxAABIhBxJEKjX/KTT/UCEIr1BCAKkhBhJENAEkEkQiNhoBiAJiSTX/I1s0/yJVTRY1B0ICLUkhCQxAABIhCRJEKjX/KDT/UCEIr1BCAHCB2JXk5QISRDYaATYaAlA1/4ABAjT/UEIAVjYaAhc1BDYaAzYaARdJJQxAAVFJJAxAADwkEkQkNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEp2XEtLAyBiEKD0Q0/zEAEkQ0/zIGNAMhBFtCAUBIJDQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQRbNf5JNQU1/YAE/FtmxzT9ULAyBiEKDEQ0/SJVSSMMQAC2SSUMQABUJRJENP1XASg1/DT8IQRbNfs0+4gBfTT8VwAgNfoiNPqIAWFJNfkjWzT5IlVNIhJENPooKTT7FlBmgAkAAAAAAAACAQGwKTUHNP8yBjT+NPsIQgCmSDT+Ig1EIjEAiAEkSTX7I1s0+yJVTUk1/CINRDT+NPwPRLEisgE0/LIII7IQMQCyB7MxACiACQEAAAAAAAAAAGaACQAAAAAAAAG7AbApNQc0/zIGNP40/AlCAEpIgAkAAAAAAAABawGwKTUHNP8yBjT+QgAxIhJEgaCNBogAwCI0ARJENARJIhJMNAISEURJNQU1/4AE+4Zv7jT/ULAxADIGIkIAADX/Nf5JNf00/xZQKEsBVwAoZ0gkNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCUxNRJEIjE2EkQjMTcSRCI1ASI1AkL/r0kxGGFAAAVIIQWviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 1,
  stateSize: 40,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v284",
                "type": "address"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v284",
                "type": "address"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T9",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_optIn0_52",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_receiveSwap0_52",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T8",
                    "name": "_startSwap0_52",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T9",
                "name": "v348",
                "type": "tuple"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v363",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v443",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v513",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T9",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_optIn0_52",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_receiveSwap0_52",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T8",
                    "name": "_startSwap0_52",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T9",
                "name": "v348",
                "type": "tuple"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v766",
        "type": "address"
      }
    ],
    "name": "checkInitiatedSwap",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "optIn",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "receiveSwap",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "startSwap",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200152a3803806200152a83398101604081905262000026916200023b565b6000805543600355604080513381528251602080830191909152830151516001600160a01b03168183015290517f0d6fab7154ce0a94b131216395b92f2e84190b0a295f5e2d18b75b3f1a456c479181900360600190a16200008b34156008620000bd565b6200009562000158565b805133905260208082018051439052516000910152620000b581620000e7565b505062000336565b81620000e35760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604080518082018252600080825260208083018281528551516001600160a01b0316808552868301518301518252600390935543600155845180830193909352518285015283518083038501815260609092019093528051919262000153926002929091019062000195565b505050565b604080516060810182526000918101918252908190815260200162000190604051806040016040528060008152602001600081525090565b905290565b828054620001a390620002f9565b90600052602060002090601f016020900481019282620001c7576000855562000212565b82601f10620001e257805160ff191683800117855562000212565b8280016001018555821562000212579182015b8281111562000212578251825591602001919060010190620001f5565b506200022092915062000224565b5090565b5b8082111562000220576000815560010162000225565b60008183036040808212156200025057600080fd5b80518082016001600160401b0380821183831017156200028057634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200029a57600080fd5b835194506020850191508482108183111715620002c757634e487b7160e01b600052604160045260246000fd5b509091526020840151906001600160a01b0382168214620002e757600080fd5b90825260208101919091529392505050565b600181811c908216806200030e57607f821691505b602082108114156200033057634e487b7160e01b600052602260045260246000fd5b50919050565b6111e480620003466000396000f3fe60806040526004361061008f5760003560e01c806373b4522c1161005657806373b4522c1461011c578063832307571461012f578063ab53f2c614610144578063b477188614610167578063b84ff71d1461018757005b80631e93b0f1146100985780633bc5b7bf146100bc57806342d0c3c9146100e9578063574bb2d2146100fc5780635b48684e1461011457005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b3480156100c857600080fd5b506100dc6100d7366004610d92565b61019a565b6040516100b39190610dc5565b6100966100f7366004610dfc565b6101c6565b6101046101ff565b60405190151581526020016100b3565b610104610244565b61009661012a366004610e14565b610282565b34801561013b57600080fd5b506001546100a9565b34801561015057600080fd5b506101596102b7565b6040516100b3929190610e26565b34801561017357600080fd5b506100a9610182366004610d92565b610354565b610104610195366004610e83565b610452565b60408051606081018252600080825260208201819052918101919091526101c0826104b8565b92915050565b60408051606081018252600080825260208201819052918101919091526101fb6101f536849003840184610f58565b8261058a565b5050565b6000610209610c11565b60208181015151600190526040805160608101825260008082529281018390529081019190915261023a828261058a565b6020015192915050565b600061024e610c11565b602081810151516000908190526040805160608101825282815292830182905282015261027b828261058a565b5192915050565b60408051606081018252600080825260208201819052918101919091526101fb6102b136849003840184611023565b826109fb565b6000606060005460028080546102cc90611059565b80601f01602080910402602001604051908101604052809291908181526020018280546102f890611059565b80156103455780601f1061031a57610100808354040283529160200191610345565b820191906000526020600020905b81548152906001019060200180831161032857829003601f168201915b50505050509050915091509091565b6000600360005414156104415760006002805461037090611059565b80601f016020809104026020016040519081016040528092919081815260200182805461039c90611059565b80156103e95780601f106103be576101008083540402835291602001916103e9565b820191906000526020600020905b8154815290600101906020018083116103cc57829003601f168201915b5050505050806020019051810190610401919061108e565b9050600161040e846104b8565b51600181111561042057610420610daf565b1461042c57600061043a565b610435836104b8565b604001515b9392505050565b61044d60006007610b7c565b919050565b600061045c610c11565b6020818101805151600290528051516060908101516001600160a01b0388169052905151810151820185905260408051918201815260008083529282018390528101919091526104ac828261058a565b60400151949350505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561050457610504610daf565b141561057b576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561054557610545610daf565b600181111561055657610556610daf565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b61059a6003600054146010610b7c565b81516105b59015806105ae57508251600154145b6011610b7c565b6000808055600280546105c790611059565b80601f01602080910402602001604051908101604052809291908181526020018280546105f390611059565b80156106405780601f1061061557610100808354040283529160200191610640565b820191906000526020600020905b81548152906001019060200180831161062357829003601f168201915b5050505050806020019051810190610658919061108e565b9050610662610c30565b61067160001943106012610b7c565b7f1527f22fa2e8417e9586aeb4a5409e6ab0853f8b24f63bb7e0a21608e02a200633856040516106a29291906110c8565b60405180910390a160006020850151515160028111156106c4576106c4610daf565b141561074a576106d634156009610b7c565b604051600181527f25d012a08a5440fd4e8b586d26126df5c4e28bf6f9b861ef39004768fc9e74f79060200160405180910390a160018352610716610c68565b825181516001600160a01b039091169052602080820180514390528185015190519091015261074481610ba1565b506109f5565b600160208501515151600281111561076457610764610daf565b14156108b2576107763415600a610b7c565b6107886000836020015111600b610b7c565b6001610793336104b8565b5160018111156107a5576107a5610daf565b146107b15760006107bf565b6107ba336104b8565b604001515b8082526107cf901515600c610b7c565b6107e5816000015183602001511015600d610b7c565b8051604051339180156108fc02916000818181858888f19350505050158015610812573d6000803e3d6000fd5b50336000908152600460209081526040808320805460ff19166001908117825590810193909355519182527f11f5f3c680222220e092c6d88134c67836040ac3ef6218bbcb8ded20ff51667d910160405180910390a160016020840152610877610c68565b825181516001600160a01b0390911690526020808201514390528251908401516108a1919061115f565b602080830151015261074481610ba1565b60026020850151515160028111156108cc576108cc610daf565b14156109f557602080850151516060015182820181905201516108f2903414600e610b7c565b61094260006001602084015151610908906104b8565b51600181111561091a5761091a610daf565b1461092657600061093a565b602083015151610935906104b8565b604001515b14600f610b7c565b60208181018051516001600160a01b039081166000908152600484526040808220805460ff191660019081179091559351808601519051909316825290819020830191909155519081527fee9eefbfd52d217a764d78ea107e29f093243069ec2dc11e27682fa29c8f3117910160405180910390a1600160408401526109c6610c68565b825181516001600160a01b03909116905260208082015143905282810151810151908401516108a19190611176565b50505050565b610a0b6003600054146015610b7c565b8151610a26901580610a1f57508251600154145b6016610b7c565b600080805560028054610a3890611059565b80601f0160208091040260200160405190810160405280929190818152602001828054610a6490611059565b8015610ab15780601f10610a8657610100808354040283529160200191610ab1565b820191906000526020600020905b815481529060010190602001808311610a9457829003601f168201915b5050505050806020019051810190610ac9919061108e565b9050610adb6000194310156017610b7c565b60408051338152845160208083019190915285015115158183015290517f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c69181900360600190a1610b2e34156013610b7c565b8051610b46906001600160a01b031633146014610b7c565b610b4e610c68565b815181516001600160a01b03909116905260208082018051439052818401519051909101526109f581610ba1565b816101fb5760405163100960cb60e01b81526004810182905260240160405180910390fd5b60408051808201909152600080825260208201528151516001600160a01b0316815260208083015181015181830152600360005543600155604051610be89183910161118e565b60405160208183030381529060405260029080519060200190610c0c929190610c9f565b505050565b604051806040016040528060008152602001610c2b610d23565b905290565b604051806040016040528060008152602001610c2b604051806040016040528060006001600160a01b03168152602001600081525090565b6040805160608101825260009181019182529081908152602001610c2b604051806040016040528060008152602001600081525090565b828054610cab90611059565b90600052602060002090601f016020900481019282610ccd5760008555610d13565b82601f10610ce657805160ff1916838001178555610d13565b82800160010185558215610d13579182015b82811115610d13578251825591602001919060010190610cf8565b50610d1f929150610d65565b5090565b6040518060200160405280610c2b6040805160808101825260008082526020808301829052828401829052835180850190945281845283015290606082015290565b5b80821115610d1f5760008155600101610d66565b6001600160a01b0381168114610d8f57600080fd5b50565b600060208284031215610da457600080fd5b813561043a81610d7a565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110610ddc57610ddc610daf565b808352506020830151151560208301526040830151604083015292915050565b600060c08284031215610e0e57600080fd5b50919050565b600060408284031215610e0e57600080fd5b82815260006020604081840152835180604085015260005b81811015610e5a57858101830151858201606001528201610e3e565b81811115610e6c576000606083870101525b50601f01601f191692909201606001949350505050565b60008060408385031215610e9657600080fd5b8235610ea181610d7a565b946020939093013593505050565b6040805190810167ffffffffffffffff81118282101715610ee057634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715610ee057634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff81118282101715610ee057634e487b7160e01b600052604160045260246000fd5b8035801515811461044d57600080fd5b600081830360c0811215610f6b57600080fd5b610f73610eaf565b8335815260a0601f1983011215610f8957600080fd5b610f91610ee6565b610f99610f17565b602086013560038110610fab57600080fd5b8152610fb960408701610f48565b6020820152610fca60608701610f48565b60408201526040607f1985011215610fe157600080fd5b610fe9610eaf565b93506080860135610ff981610d7a565b8085525060a086013560208501528360608201528082525080602083015250809250505092915050565b60006040828403121561103557600080fd5b61103d610eaf565b8235815261104d60208401610f48565b60208201529392505050565b600181811c9082168061106d57607f821691505b60208210811415610e0e57634e487b7160e01b600052602260045260246000fd5b6000604082840312156110a057600080fd5b6110a8610eaf565b82516110b381610d7a565b81526020928301519281019290925250919050565b6001600160a01b0383168152815160208083019190915282015151805160e083019190600381106110fb576110fb610daf565b806040850152506020810151151560608401526040810151151560808401526060810151905061114160a084018280516001600160a01b03168252602090810151910152565b509392505050565b634e487b7160e01b600052601160045260246000fd5b60008282101561117157611171611149565b500390565b6000821982111561118957611189611149565b500190565b81516001600160a01b0316815260208083015190820152604081016101c056fea26469706673582212209a0bf7dd1a906bbc4e07ae778755626a1ad59a744c4614712d873cc5e18f095764736f6c634300080c0033`,
  BytecodeLen: 5418,
  Which: `oD`,
  version: 7,
  views: {
    checkInitiatedSwap: `checkInitiatedSwap`
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:100:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:38:30:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Creator": Creator,
  "optIn": optIn,
  "receiveSwap": receiveSwap,
  "startSwap": startSwap
  };
export const _APIs = {
  optIn: optIn,
  receiveSwap: receiveSwap,
  startSwap: startSwap
  };
