export * from './TodoList.jsx'

import {createStore} from "redux"

// Seperate these to three different part
const Messages = {
    ActiveMsg: [{Name: 'Active', Date: '2020-01-01', status: 0}],
    FinishedMsg: [{Name: 'Finished', Date: '2020-01-01', status: 1}],
    InactiveMsg: [{Name: 'Inactive', Date: '2020-01-01', status: 2}]
}

const addMessage = article => ({type: 'addMsg', payload: article})
const delMessgae = article => ({type: 'delMsg', payload: article})

const rootReducer = (state = Messages, action) => {
    switch(action.type){
        case 'addMsg': 
            return {...state, ActiveMsg: [...state.ActiveMsg, action.payload]}
        default:
            return state
    }
}

const store = createStore(rootReducer)

window.store = store;
window.addMessage = addMessage;

export {store, addMessage, delMessgae}