import React, {Component} from "react"
import PropTypes from 'prop-types'
import styled from 'styled-components'
import './project.css'

const MainDiv = styled.div `
    display:        ${props => props.isVisible || 'none'};
`

const MainSpan = styled.div `
    margin:         auto;
    width:          80%;
`

const MainIframe = styled.iframe `
    display:        block;
    position:       relative;
    height:         70%;
    width:          80%;
    margin:         auto;
    overflow:       hidden;
    text-align:     left;
`

class WebGame extends Component{
    static get propTypes(){
        return {
            isVisible: PropTypes.string
        }
    }
    render(){
        return (
            <MainDiv    
                isVisible={this.props.isVisible}
                className={this.props.isVisible == 'block'? 'projectAnim' : ''}>
                <MainSpan>
                    此遊戲是基於 ReactJS 所製作的小遊戲，且為RWD網頁<br/>
                    遊戲機制為在時限之內將點擊出所有汙染源<br/>
                    共有八種汙染源，隨機產生五種汙染源作為目標，並限時一分鐘內找出這五種汙染源<br/>
                    人物身上的能量條亦會隨著汙染源被找出改變其狀態<br/>
                    當遊戲結束時根據是否找出所有汙染源，還是計時器結束，顯示訊息框。<br/>
                    <a 
                        href="https://github.com/lizrad/AirPollutionWithReactJS"
                        target="_blank" rel="noreferrer">
                        原碼連結
                    </a>
                </MainSpan>
                <MainIframe 
                    src="http://MyIP" 
                    scrolling='no'/>
            </MainDiv>
        )
    }
}

export {WebGame}


/* 使用 styled-components 做 CSS-in-JS */
