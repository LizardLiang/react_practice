export * from './CountDown.jsx'

import {createStore} from 'redux' // import store component

const defaultDate = {
    title:  'New Year!!',
    year:   2021,
    month:  1,
    day:    1,
    hour:   0,
    minute: 0,
    second: 0,
    isAnnual: true
}

// create data
const Datas = {
    dates: [
    ],
    curUser: ''
}

// define actions
const addDate = article => ({type: 'addDate', payload: article})
const deleteDate = article => ({type: 'deleteDate', payload: article})
const setUser = article => ({type: 'setUser', payload: article})
const clearTimer = article => ({type: 'clearTimer', payload: article})

// define actual method for actions
const rootReducer = (state = Datas, action) => {
    switch(action.type){
        case 'addDate':
            return {...state, dates: [...state.dates, action.payload]}
        case 'deleteDate':
            return {...state, dates: state.dates.filter((item => item.title !== action.payload))}
        case 'setUser':
            return (Object.assign({}, state, {curUser: action.payload}))
        case 'clearTimer':
            return (Object.assign({}, state, {curUser: '', dates: [defaultDate]}))
        default:
            return state
    }
}

// establish store
const store = createStore(rootReducer)

export {store, addDate, deleteDate, defaultDate, setUser, clearTimer}

// export default Stores