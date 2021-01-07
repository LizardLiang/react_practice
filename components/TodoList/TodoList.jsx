import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'

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
`

const ContButton = styled.button ` 
    background: none;
    color: white;

    & :focus{
        outline: none;
        div {
            display: flex;
        }
    }

    &:hover {

    }
` 

const ContSettings = styled.div ` 
    position: absolute;
    flex-direction: column;
    width: 160px;
    z-index: 1;
    background: rgb(24, 25, 28);
    border-radius: 5px;
    display: none;

    &:hover {
        display: flex;
    }
`

const ContRadioBlk = styled.div `
    display: flex;
    align-items: center;
    padding: 5px;
    margin: 5px;
    justify-content: space-evenly;


    &:hover{
        background: rgb(92, 111, 177);
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
                <span>{props.date}</span>
            </ContDateDiv>
            <ContSetting>
                <ContButton 
                    onClick={()=>{display == 'none' ? setDis('flex') : setDis('none')}}>
                    more
                    <ContSettings display={display}>
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
`

let datas = {
    lists: [
        {content: 'This is Active', date: '2021/01/01', status: 0},
        {content: 'This is Finished', date: '2021/01/01', status: 1},
        {content: 'This is Inactive', date: '2021/01/01', status: 2}
    ]
}

function TodoList() {
    const [actives, setActive] = useState([])
    const [finishes, setFinished] = useState([])
    const [inactives, setInactive] = useState([])

    let arrs = [actives, finishes, inactives];
    let arr_funcs = [setActive, setFinished, setInactive];

    useEffect(()=>{
        let ls = datas.lists
        ls.map((value)=>{
            // send data to corresponding section
            if(value.status == 0){
                setActive(old=>[...old, value])
            }
            else if(value.status == 1){
                setFinished(old=>[...old, value])
            }
            else if(value.status == 2){
                setInactive(old=>[...old, value])
            }
        })
    }, [])

    let changeStatus = (name, old, newSts) => {
        // get specify target
        let target = arrs[old].filter(item=>item.content===name)[0]

        // remove target from old list
        let func = arr_funcs[old]
        func(arrs[old].filter(item=>item.content!==name))

        // append target to new list with new status
        target.status = newSts
        let newfunc = arr_funcs[newSts]
        newfunc(prev => [...prev, target])
    }

    return(
        <MainDiv>
            <CateBlock>
                <CateTitle>Active</CateTitle>
                {/* Get active list */}
                {actives.map(((value, index)=>{
                    return <TodoContent name={value.content} date={value.date} so={index + 1} status={value.status} setSts={changeStatus} />
                }))}
            </CateBlock>
            <CateBlock>
                <CateTitle>Finished</CateTitle>
                {/* Get finshed list */}
                {finishes.map(((value, index)=>{
                    return <TodoContent name={value.content} date={value.date} so={index + 1} status={value.status} setSts={changeStatus} />
                }))}
            </CateBlock>
            <CateBlock>
                <CateTitle>Inactive</CateTitle>
                {/* Get inactive list */}
                {inactives.map(((value, index)=>{
                    return <TodoContent name={value.content} date={value.date} so={index + 1} status={value.status} setSts={changeStatus} />
                }))}
            </CateBlock>
        </MainDiv>
    )
}

export default TodoList