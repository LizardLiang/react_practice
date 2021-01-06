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
    }

    &:hover {

    }
` 

const ContSettings = styled.div ` 
    position: absolute;
    display: ${props=> props.display || 'none'};
    flex-direction: column;
    width: auto;
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
                </ContButton>
                <ContSettings display={display}>
                    <input type="radio"/>進行中
                    <input type="radio"/>已完成
                    <input type="radio"/>暫停中
                </ContSettings>
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

    useEffect(()=>{
        let ls = datas.lists
        ls.map((value, index)=>{
            value['so']  = index + 1
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

    return(
        <MainDiv>
            <CateBlock>
                <CateTitle>Active</CateTitle>
                {actives.map((value=>{
                    return <TodoContent name={value.content} date={value.date} so={value.so} />
                }))}
            </CateBlock>
            <CateBlock>
                <CateTitle>Finished</CateTitle>
                {finishes.map((value=>{
                    return <TodoContent name={value.content} date={value.date} so={value.so} />
                }))}
            </CateBlock>
            <CateBlock>
                <CateTitle>Inactive</CateTitle>
                {inactives.map((value=>{
                    return <TodoContent name={value.content} date={value.date} so={value.so} />
                }))}
            </CateBlock>
        </MainDiv>
    )
}

export default TodoList