import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const MainDiv = styled.div ` 
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 5rem;
    justify-content: center;
    align-items: center;
    color: white;
`

const ResultDiv = styled.div ` 
    width: 30%;
    display: flex;
    flex-direction: column;
    height: 6rem;
    font-size: 3rem;
    border: solid 1px white;
    border-radius: 5px;
    padding: 0 5px;
`

const UpperRes = styled.div ` 
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    font-size: 1rem;
`

const LowerRes = styled.div ` 
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
`

const KeyboardDiv = styled.div `
    width: 30%;
    display: flex;
    justify-content: space-between;
` 

const KeyboardLeft = styled.div ` 
    width: 75%;
    display: flex;
    flex-direction: column;
`

const KeyboardRight = styled.div `
    width: 22%;
    display: flex;

    .RightElement {
        flex-direction: column;
    }
`

const KeysSmall = styled.div ` 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8rem;
    height: 5.5rem;
    border: solid 1px white;
    height: 5.5rem;
    border-radius: 5px;

    &:hover{
        background: grey;
    }
`

const KeysLandMid = styled.div ` 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 17.5rem;
    border: solid 1px white;
    height: 5.5rem;
    border-radius: 5px;

    &:hover{
        background: grey;
    }
`

const KeysPortMid = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8rem;
    height: 13rem;
    border: solid 1px white;
    border-radius: 5px;

    &:hover{
        background: grey;
    }
`

const KeyboardSection = styled.div `
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin-top: 2rem;

    div {
        font-size: 2rem;
    }
`

const Calculator = () => {
    const [Num1, setNum1] = useState(0)
    const [Num2, setNum2] = useState(0)   
    const [Sym, setSym] = useState('')
    const [upperCont, setUpper] = useState('')
    const [lowerCont, setLower] = useState('0')
    const [isNew, setNew] = useState(true)
    
    const NumClick = (num) => {
        if(Sym == ''){
            // keep number 1
            setNum1(old=>{return old * 10 + num})

            if (lowerCont == '0' || isNew){
                // if number1 == 0 just cover old value
                setLower(`${num}`);
            }
            else{
                // if number1 is not 0 append new value to old value
                setLower(old=>{return `${old + num}`})
            }
        }
        else{
            setNum2(old=>{return old * 10 + num})
            setLower(old=>{return `${old + num}`})
        }
        setNew(false)
    }

    const SymClick = (sym) => {
        setSym(sym)
        
        setUpper(`${Num1}${sym}`)
    }

    const CalAns = () => {
        if(Sym == ''){
            return
        }
        else if(Sym == '+'){
            setLower(`${Num1 + Num2}`)
        }
        else if(Sym == '-'){
            setLower(`${Num1 - Num2}`)
        }
        else if(Sym == '*'){
            setLower(`${Num1 * Num2}`)
        }
        else if(Sym == '/'){
            setLower(`${Num1 / Num2}`)
        }

        // reset status
        setNum1(0)
        setNum2(0)
        setSym('')
        setNew(true)
    }

    const ClearAll = () => {
        setNum1(0)
        setNum2(0)
        setSym('')
        setCont('0')
    }

    return (
        <MainDiv>
            <ResultDiv>
                <UpperRes>
                    {upperCont}
                </UpperRes>    
                <LowerRes>
                    {lowerCont}
                </LowerRes>
            </ResultDiv>
            <KeyboardDiv>
                <KeyboardLeft>
                    <KeyboardSection>
                        <KeysSmall onClick={()=>{SymClick('/')}}>
                            /
                        </KeysSmall>
                        <KeysSmall onClick={()=>{SymClick('*')}}>
                            *
                        </KeysSmall>
                        <KeysSmall onClick={ClearAll}>
                            CE
                        </KeysSmall>
                    </KeyboardSection>
                    <KeyboardSection>
                        <KeysSmall onClick={()=>{NumClick(7)}}>
                            7
                        </KeysSmall>
                        <KeysSmall onClick={()=>{NumClick(8)}}>
                            8
                        </KeysSmall>
                        <KeysSmall onClick={()=>{NumClick(9)}}>
                            9
                        </KeysSmall>
                    </KeyboardSection>
                    <KeyboardSection>
                        <KeysSmall onClick={()=>{NumClick(4)}}>
                            4
                        </KeysSmall>
                        <KeysSmall onClick={()=>{NumClick(5)}}>
                            5
                        </KeysSmall>
                        <KeysSmall onClick={()=>{NumClick(6)}}>
                            6
                        </KeysSmall>
                    </KeyboardSection>
                    <KeyboardSection>
                        <KeysSmall onClick={()=>{NumClick(1)}}>
                            1
                        </KeysSmall>
                        <KeysSmall onClick={()=>{NumClick(2)}}>
                            2
                        </KeysSmall>
                        <KeysSmall onClick={()=>{NumClick(3)}}>
                            3
                        </KeysSmall>
                    </KeyboardSection>
                    <KeyboardSection>
                        <KeysLandMid onClick={()=>{NumClick(0)}}>
                            0
                        </KeysLandMid>
                        <KeysSmall>
                            .
                        </KeysSmall>
                    </KeyboardSection>
                </KeyboardLeft>
                <KeyboardRight>
                    <KeyboardSection className='RightElement'>
                        <KeysSmall onClick={()=>{SymClick('-')}}>
                            -
                        </KeysSmall>
                        <KeysPortMid onClick={()=>{SymClick('+')}}>
                            +
                        </KeysPortMid>
                        <KeysPortMid onClick={CalAns}>
                            =
                        </KeysPortMid>
                    </KeyboardSection>
                </KeyboardRight>
            </KeyboardDiv>
        </MainDiv>
    )
}

export default Calculator