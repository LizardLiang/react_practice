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
    width: 570px;
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
    height: 24px;
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
    width: 570px;
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
    const [Num1, setNum1] = useState('0')
    const [Num2, setNum2] = useState('0')   
    const [Sym, setSym] = useState('')
    const [upperCont, setUpper] = useState('')
    const [lowerCont, setLower] = useState('0')
    const [isNew, setNew] = useState(true)
    
    const NumClick = (num) => {
        if(Sym == ''){
            // keep number 1
            if ((lowerCont == '0' || isNew) && num != '.'){
                // if number1 == 0 just cover old value
                setNum1(`${num}`);
                setLower(`${num}`);
            }
            else{
                // if number1 is not 0 append new value to old value
                setNum1(old=>{return `${old}` + `${num}`})
                setLower(old=>{return `${old + num}`})
            }
        }
        else{
            let newNum2 = ''
            if(Num2 == '0' && num != '.'){
                newNum2 = `${num}`
            }
            else{
                newNum2 = `${Num2}` + `${num}`
            }
            setNum2(newNum2)
            setLower(newNum2)
        }
        setNew(false)
    }

    const SymClick = (sym) => {
        // if a operator is clicked move to upper display section
        if(Sym != '' && Num1 != 0 && Num2 != 0){
            // if last result need to be calculated
            let ans = DoMath()
            setNum1(parseFloat(ans))
            setNum2(0)
            setUpper(`${ans} ${sym}`)
        }
        else{
            setUpper(`${Num1} ${sym}`)
        }
        setSym(sym)
    }

    const DoMath = () => {
        if(Sym == ''){
            return
        }
        else if(Sym == '+'){
            setLower(`${parseFloat(Num1) + parseFloat(Num2)}`)
            return parseFloat(Num1) + parseFloat(Num2)
        }
        else if(Sym == '-'){
            setLower(`${parseFloat(Num1) - parseFloat(Num2)}`)
            return parseFloat(Num1) - parseFloat(Num2)
        }
        else if(Sym == '*'){
            setLower(`${parseFloat(Num1) * parseFloat(Num2)}`)
            return parseFloat(Num1) * parseFloat(Num2)
        }
        else if(Sym == '/'){
            setLower(`${parseFloat(Num1) / parseFloat(Num2)}`)
            return parseFloat(Num1) / parseFloat(Num2)
        }
    }

    const CalAns = () => {
        // if '=' is clicked calculate the answer display it in lower section
        DoMath()
        // reset status
        setUpper('')
        setNum1(0)
        setNum2(0)
        setSym('')
        setNew(true)
    }

    const ClearAll = () => {
        setUpper('')
        setLower('0')
        setNum1(0)
        setNum2(0)
        setSym('')
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
                        <KeysSmall onClick={()=>{NumClick('.')}}>
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