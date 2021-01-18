import React, {useState, useEffect} from 'react'
import {Provider, useSelector, useDispatch} from 'react-redux'
import styled, {keyframes} from 'styled-components'
import {store} from './'

const EditMainDiv = styled.div ` 
    width: 70%;
    max-width: 1344px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid 1px white;
    border-radius: 5px;
    background:rgb(47, 49, 54);

    div {
        padding: 5px;
        border-radius: 5px;
    }

    input {
        color: black;

        @media screen and (max-width: 600px){
            font-size: 1rem;
        }
    }
`

const EditHeadDiv = styled.div ` 
    display: flex;
    font-size: 2rem;
`

const EditTitleDiv = styled.div ` 
    width: 100%;
    display: flex;
    background-color: rgb(64, 68, 75);
    font-size: 1.5rem;
`

const EditTitleInput = styled.input ` 
    width: 50%;
    border-radius: 5px;
    margin-left: 5px;
`

const EditDateDiv = styled.div ` 
    width: 100%;
    display: flex;
    justify-content: flex-start;
    background-color: rgb(64, 68, 75);
    font-size: 1.5rem;
    
    .confirmB {
        margin-left: auto;
    }
`

const EditDateInput = styled.input `
    border-radius: 5px;
    margin-left: 5px;
`

const EditButton = styled.button ` 
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 5px;

    color: white;
    background-color: rgb(64, 68, 75);
    border: solid grey 1px;
    border-radius: 5px;

    @media screen and (max-width: 600px){
        font-size: 1rem;
    }
`

const EditBlock = (props) => {
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    return (
        <EditMainDiv>
            <EditHeadDiv>新增代辦事項</EditHeadDiv>
            <EditTitleDiv>
                標題:
                <EditTitleInput 
                    id="Title" placeholder={`輸入標題`} 
                    onChange={ e => setTitle(e.target.value)} />
            </EditTitleDiv>
            <EditDateDiv>
                日期:
                <EditDateInput 
                    type="Date" id="Date"
                    onChange={e => setDate(e.target.value)} />
                {/* <EditDateInput placeholder={`輸入月`}/>
                <EditDateInput placeholder={`輸入日`}/> */}
                <EditButton className="confirmB" onClick={() => {props.addMsg(title, date)}}>
                    確認
                </EditButton>
                <EditButton>取消</EditButton>
            </EditDateDiv>
        </EditMainDiv>
    )
}

const ContMain = styled.div `
    display: flex;
    width: 100%;
    font-size: 1.5rem;
    padding: 5px 5px 5px 5%;
    background-color: rgb(64, 68, 75);
    border-radius: 5px;

    .div {
        padding: 0;
    }

    .Date {
        margin-left: auto;
    }
`

const ContNameDiv = styled.div `
    display: flex;
    .SO {
        margin-right: 12px;
    }
`

const ContDateDiv = styled.div `
    display: flex;
    align-items: flex-end;

    @media screen and (max-width: 600px){
        font-size: 1rem;
    }

    .SO {
        margin-right: 12px;
    }
`

const ContSetting = styled.div ` 
    display: inline-block;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    white-space: nowrap;
`

const FadeIn = keyframes `
    0%{
        opacity: 0;
        width: 0px;
    }

    100% {
        opacity: 1;
        width: 160px;
    }
`

const ContButton = styled.button ` 
    background: none;
    color: white;
    display: flex;
    align-items: flex-end;

    @media screen and (max-width: 600px){
        font-size: 1rem;
    }

    & :focus{
        outline: none;
        div {
            display: flex;
            visibility: visible;
            opacity: 1;
            width: 160px;
            animation: ${FadeIn} 1s;
        }
    }
` 

const ContSettings = styled.div ` 
    position: absolute;
    flex-direction: column;
    width: 0px;
    z-index: 1;
    background: rgb(24, 25, 28);
    border-radius: 5px;
    display: none;
    visibility: hidden;
    opacity: 0;
    /* transition: opacity 500ms; */

    &:hover {
        display: flex;
        opacity: 1;
        visibility: visible;
        width: 160px;
    }
`

const ContRadioBlk = styled.div `
    display: flex;
    align-items: center;
    padding: 5px;
    margin: 5px;
    justify-content: space-evenly;
    border-radius: 5px;

    &:hover{
        background: rgb(92, 111, 177);
    }

    button {
        height: 100%;
    }
`

const TodoContent = (props) => {
    const [display, setDis] = useState('none')

    return (
        <ContMain>
            <ContNameDiv>
                <span className="SO">{props.so}</span>
                <span>{props.name}</span>
            </ContNameDiv>
            <ContDateDiv className="Date">
                <span className="SO">期限:</span>
                <span>{props.Date}</span>
            </ContDateDiv>
            <ContSetting>
                <ContButton 
                    onClick={()=>{display == 'none' ? setDis('flex') : setDis('none')}}>
                    more
                    <ContSettings>
                        <ContRadioBlk
                            onClick={()=>{props.setSts(props.name, props.status, 0)}}>
                            <input
                                type="radio" 
                                name={`status${props.so}`} 
                                checked={props.status == 0 ? true : false}/>
                                進行中
                        </ContRadioBlk>
                        <ContRadioBlk
                            onClick={()=>{props.setSts(props.name, props.status, 1)}}>
                            <input
                                type="radio" 
                                name={`status${props.so}`}
                                checked={props.status == 1 ? true : false}/>已完成
                        </ContRadioBlk>
                        <ContRadioBlk
                            onClick={()=>{props.setSts(props.name, props.status, 2)}}>
                            <input
                                type="radio" 
                                name={`status${props.so}`}
                                checked={props.status == 2 ? true : false}/>暫停中
                        </ContRadioBlk>
                    </ContSettings>
                </ContButton>
            </ContSetting>
        </ContMain>
    )
}

const MainDiv = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5rem;
    color: white;
    min-height: 100vh;
`

const CateBlock = styled.div `
    display: flex;
    flex-direction: column;
    width: 70%;
    max-width: 1344px;
    height: auto;
    min-height: 10%;
    border: white solid 1px;
    border-radius: 5px;
    margin: 5px;
    background:rgb(47, 49, 54);
`

const CateTitle = styled.div `
    width: 100%;
    height: auto;
    font-size: 2rem;
    padding-left: 5px;
`

const NoItemSpan = styled.span`
    display: flex;
    width: 100%;
    font-size: 1.5rem;
    padding: 5px 5px 5px 5%;
    background-color: rgb(64, 68, 75);
    border-radius: 5px;
`

function TodoList() {
    // Three different task status
    const [actives, setActive] = useState([])
    const [finishes, setFinished] = useState([])
    const [inactives, setInactive] = useState([])

    // Use selector to get store data
    const ActiveMsgs = useSelector(state => state.ActiveMsg)
    const FinishMsgs = useSelector(state => state.FinishedMsg)
    const InactiMsgs = useSelector(state => state.InactiveMsg)

    // Set dispatch to modify store data
    const MsgDispatch = useDispatch()

    let arrs = [actives, finishes, inactives];
    let arr_funcs = [setActive, setFinished, setInactive];

    useEffect(()=>{
        setActive(ActiveMsgs)
        setFinished(FinishMsgs)
        setInactive(InactiMsgs)
    }, [])


    let changeStatus = (name, old, newSts) => {
        // get specify target
        let target = arrs[old].filter(item=>item.Name===name)[0]

        // remove target from old list
        let func = arr_funcs[old]
        func(arrs[old].filter(item=>item.Name!==name))

        // append target to new list with new status
        target.status = newSts
        let newfunc = arr_funcs[newSts]
        newfunc(prev => [...prev, target])
    }

    const addMsg = (title, date) => {
        setActive(old => [...old, {Name: title, Date: date, status: 0}])
        MsgDispatch({type: 'addMsg', payload: {Name: title, Date: date, status: 0}})
    }

    return(
        <MainDiv>
            <CateBlock>
                <CateTitle>Active</CateTitle>
                {/* Get active list */}
                {actives.length > 0 ? actives.map(((value, index)=>{
                    return <TodoContent name={value.Name} Date={value.Date} so={index + 1} status={value.status} setSts={changeStatus} />})) : 
                    <NoItemSpan>沒有項目</NoItemSpan>
                }
            </CateBlock>
            <CateBlock>
                <CateTitle>Finished</CateTitle>
                {/* Get finshed list */}
                {finishes.length > 0 ? 
                    finishes.map(((value, index)=>{
                    return <TodoContent name={value.Name} Date={value.Date} so={index + 1} status={value.status} setSts={changeStatus} />})) : 
                    <NoItemSpan>沒有項目</NoItemSpan>
                }
            </CateBlock>
            <CateBlock>
                <CateTitle>Inactive</CateTitle>
                {/* Get inactive list */}
                {inactives.length > 0 ? 
                    inactives.map(((value, index)=>{
                    return <TodoContent name={value.Name} Date={value.Date} so={index + 1} status={value.status} setSts={changeStatus} />})) : 
                    <NoItemSpan>沒有項目</NoItemSpan>
                }
            </CateBlock>
            <EditBlock addMsg={addMsg} />
        </MainDiv>
    )
}

const FinalList = () => {
    return(
        <Provider store={store}>
            <TodoList />
        </Provider>
    )
} 

export default FinalList