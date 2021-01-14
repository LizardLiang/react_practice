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
    width: 50%;
    display: flex;
    justify-content: flex-end;
    height: 5rem;
    font-size: 3rem;
    border: solid 1px white;
    border-radius: 5px;
`

const KeyboardDiv = styled.div `
    width: 50%;
    display: flex;
` 

const KeyboardLeft = styled.div ` 
    width: 90%;
    display: flex;
    flex-direction: column;
`

const KeyboardRight = styled.div `
    width: 10%;
    display: flex;
    flex-direction: column;
`

const KeysSmall = styled.div ` 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    margin: 5px;
    border: solid 1px white;
    height: 4rem;
    border-radius: 5px;

    &:hover{
        background: grey;
    }
`

const KeysLandMid = styled.div ` 
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(60% + 10px);
    margin: 5px;
    border: solid 1px white;
    height: 4rem;
    border-radius: 5px;

    &:hover{
        background: grey;
    }
`

const KeyboardSection = styled.div `
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const Calculator = () => {
    return (
        <MainDiv>
            <ResultDiv>
                put result here
            </ResultDiv>
            <KeyboardDiv>
                <KeyboardLeft>
                    <KeyboardSection>
                        <KeysSmall>
                            /
                        </KeysSmall>
                        <KeysSmall>
                            *
                        </KeysSmall>
                        <KeysSmall>
                            -
                        </KeysSmall>
                    </KeyboardSection>
                    <KeyboardSection>
                        <KeysSmall>
                            9
                        </KeysSmall>
                        <KeysSmall>
                            8
                        </KeysSmall>
                        <KeysSmall>
                            7
                        </KeysSmall>
                    </KeyboardSection>
                    <KeyboardSection>
                        <KeysSmall>
                            6
                        </KeysSmall>
                        <KeysSmall>
                            5
                        </KeysSmall>
                        <KeysSmall>
                            4
                        </KeysSmall>
                    </KeyboardSection>
                    <KeyboardSection>
                        <KeysSmall>
                            3
                        </KeysSmall>
                        <KeysSmall>
                            2
                        </KeysSmall>
                        <KeysSmall>
                            1
                        </KeysSmall>
                    </KeyboardSection>
                    <KeyboardSection>
                        <KeysLandMid>
                            0
                        </KeysLandMid>
                        <KeysSmall>
                            .
                        </KeysSmall>
                    </KeyboardSection>
                </KeyboardLeft>
                <KeyboardRight>
                    right
                </KeyboardRight>
            </KeyboardDiv>
        </MainDiv>
    )
}

export default Calculator