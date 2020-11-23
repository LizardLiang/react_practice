import {createStore} from "redux" // import createStore component from redux

{/*
    define date with 
    structure message:
        list of msg with structure key, name, messge
*/}
const data =    {
    message:
    [ 
        {key:"1",name:'神Q',message:'嗨！大家好啊！'},
        {key:"2",name:'小馬',message:'早安啊！昨天有沒有好好發文？'},
        {key:"3",name:'王子',message:'ㄛ！別說了，那真的超級累！'},
        {key:"4",name:'神Q',message:'哈哈哈！加油啦！再一下就結束了！'},
        {key:"5",name:'王子',message:'結束後我一定要爆睡一頓！'},
    ]
}

// Set action to call by react program
const addMessage = article => ({type:'addMessage', payload:article})

const rootReducer = (state = data, action) => {
    switch(action.type){
        case "addMessage":
            action.payload.key = String(state.message.length  + 1)
            console.log(action.payload)
            return {...state, message: [...state.message, action.payload]}
        default:
            return state
    }
}

// Setup a store to store reducer
const store = createStore(rootReducer)

export  {store, addMessage}