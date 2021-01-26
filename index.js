export * from './app.jsx'

{/*
    define date with 
    structure message:
        list of msg with structure key, name, messge
*/}

// Account status 
// status: 0 - not logged in
//         1 - logged in
// account: account Name
const accountStatus = {status: 0, account: ''}

function accountReducer(state, action){
    switch(action.type){
        case 'set_account':
            // need to return a new Obj to make context update
            return Object.assign({}, state, {status: action.payload.status, account: action.payload.account});
        default:
            return accountStatus;
    }
}

export {accountReducer, accountStatus}