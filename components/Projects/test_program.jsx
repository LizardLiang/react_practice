import React from "react"
import styled from 'styled-components'
import './project.css'

const MainSpan = styled.span `
    display:        block;
    font-size:      2vmin;
`

const MainDiv = styled.div `
    margin-left:        20%;
    width:              60%;
    display:            ${props => props.isVisible || 'none'};
    text-align:         left;
`

const MainImg = styled.img `
    width:              100%;
    height:             auto;
`

class Test_Program extends React.Component  {
    constructor(props){
        super(props)
        this.state = {
            isVisible: this.props.isVisible
        }
    }
    render(){
        return(
            <MainDiv    
                isVisible={this.props.isVisible}
                className={this.props.isVisible == 'block'? 'projectAnim' : ''}>
                <MainSpan>
                    This test program is used for testing motor quality
                </MainSpan>
                <MainSpan>
                    It use MySQL as database to restore data from inductance meter and resistance meter!
                </MainSpan>
                <MainSpan>
                    Use RS232 as communication protocol!
                </MainSpan>
                <MainImg src="../img/test_program.png"></MainImg>
            </MainDiv>
        )
    }
}

export { Test_Program }