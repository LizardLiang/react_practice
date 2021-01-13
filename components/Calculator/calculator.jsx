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
    width: 30%;
    margin: 5px;
`

const KeysLandMid = styled.div ` 
    width: 60%;
    margin: 5px;
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