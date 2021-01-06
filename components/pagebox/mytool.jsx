import React, { Component } from 'react'
import styled from 'styled-components'
import './info.css'

const MainDiv = styled.div `
    position:       relative;
    left:           ${props => props.left || 0};
    text-align:     left;
    color:          white;
    height:         auto;
    overflow:       auto;
    opacity:        ${props => props.opacity};
    width:          868px;
    margin:         2.5% auto;
    @media screen and (max-width:   1079px){
        width:          85%;
        height:         auto;
    }
`

const TitleSpan = styled.span `
    display:        block;
    position:       relative;
    width:          95%;
    text-align:     center;
    font-size:      3vmin;
    margin:         0 auto 5px auto;
    z-index:        1;

    @media screen and (min-width:   1080px){
        font-size:  30px;
    }

    &:before {
        content:    '';
        position:   absolute;
        top:        0;
        left:       0;
        width:      100%;
        height:     100%;
        background: grey;
        transform:  skew(-30deg);
        z-index:    -1;
    }
`

const ContentDiv = styled.div `
    width:          95%;
    margin:         0 auto;
`

const LeftDiv = styled.div `
    float:          left;
    width:          50%;
    font-size:      3vmin;
`

const RightDiv = styled.div `
    float:          right;
    width:          50%;
`

class MyTool extends Component{
    constructor(props){
        super(props)
        this.state = {
            opacity:    1,
            left:       '0%'
        }
        this.scrollHandler = this.scrollHandler.bind(this)
    }

    componentDidMount(){
        window.addEventListener('scroll', this.scrollHandler)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.scrollHandler)
    }

    scrollHandler(e){
        let rec = this.MainElement.getBoundingClientRect()
        let pos = rec['top']
        let height = rec['height']
        let winHeight = window.innerHeight
        let minW = winHeight - height
        let maxW = winHeight
        if(pos >= minW && pos <= maxW){
            let diff = 1 - ((pos - minW) / (maxW - minW))
            let offset = ( 1 - diff ) * 100
            this.setState({left:     offset + '%'})
            this.setState({opacity:  diff})
        }
        else if (pos < minW){
            this.setState({opacity: 1})
            this.setState({left:     '0%'})
        }
        else if (pos > maxW){
            this.setState({opacity: 0})
            this.setState({left:     '100%'})
        }
    }

    render(){
        return(
            <MainDiv
                ref={(MainElement)=>{this.MainElement = MainElement}}
                id={this.props.id}
                left={this.state.left} opacity={this.state.opacity}>
                <TitleSpan>
                    常用工具
                </TitleSpan>
                <ContentDiv>
                    <LeftDiv>
                        <span>
                            程式語言:
                        </span>
                        <ul>
                            <li className='li'>
                                C語言
                            </li>
                            <li className='li'>
                                Python
                            </li>
                            <li className='li'>
                                HTML/CSS
                            </li>
                            <li className='li'>
                                Javascript、ReactJS
                            </li>
                        </ul>
                    </LeftDiv>
                    <RightDiv>
                        <ul>
                            <li className='li'>
                                編輯器: VsCode
                            </li>
                            <li className='li'>
                                開發工具: Git, npm, webpack, flask
                            </li>
                            <li className='li'>
                                多益: 845分
                            </li>
                        </ul>
                    </RightDiv>
                </ContentDiv>
            </MainDiv>
        )
    }
}

export { MyTool }