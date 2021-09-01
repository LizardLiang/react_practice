import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MainDiv = styled.div `
    color:          white;
    fontSize:       3vmin;
    width:          868px;
    margin:         2.5% auto;
    position:       relative;
    left:           ${props => props.left || 0};
    opacity:        ${props => props.opacity};
    overflow:       hidden;
    @media screen and (max-width:   1079px){
        width:          85%;
        height:         auto;
    }
`
const TitleSpan = styled.span `
    display:        block;
    position:       relative;
    width:          95%;
    margin:         0 auto 5px auto;
    text-align:     center;
    font-size:      3vmin;
    z-index:        1;

    @media screen and (min-width:   1080px){
        font-size:  30px;
    }

    &:before {
        content:    '';
        position:   absolute;
        width:      100%;
        height:     100%;
        top:        0;
        left:       0;
        background: grey;
        transform:  skew(-30deg);
        z-index:    -1;
    }
`

const ContentDiv = styled.div `
    font-size:      2vmin;
`

class AdditionInfo extends Component{
    constructor(props){
        super(props)
        this.state = {
            opacity:    1,
            left:       '0%'
        }
        this.scrollHandler = this.scrollHandler.bind(this)
    }

    static get propTypes(){
        return {
            id: PropTypes.number
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.scrollHandler)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.scrollHandler)
    }

    scrollHandler(){
        let rec = this.MainElement.getBoundingClientRect()
        let pos = rec['top']
        let height = rec['height']
        let winHeight = window.innerHeight
        let minW = winHeight - height
        let maxW = winHeight
        if(pos <= maxW && pos >= minW){
            let diff = 1 - (pos - minW) / (maxW - minW)
            let offset = (1 - diff) * 100
            this.setState({opacity: diff})
            this.setState({left: offset + '%'})
        }
        else if(pos > maxW){
            this.setState({opacity: 0})
            this.setState({left: '100%'})
        }
        else if (pos < minW){
            this.setState({opacity: 1})
            this.setState({left: '0%'})
        }
    }

    render(){
        return(
            <MainDiv
                opacity={this.state.opacity}
                left={this.state.left}
                ref={(MainElement)=>{this.MainElement = MainElement}}
                id={this.props.id}>
                <TitleSpan>相關連結</TitleSpan>
                <ContentDiv>
                    <ul>
                        <li>
                            <a  
                                href="https://github.com/lizrad?tab=repositories"
                                target='_blank' rel="noreferrer">
                                Github repositories
                            </a>
                        </li>
                        <li>
                            <a  
                                href="https://github.com/lizrad/react_practice"
                                target='_blank' rel="noreferrer">
                                本頁原碼
                            </a>
                        </li>
                    </ul>
                </ContentDiv>
            </MainDiv>
        )
    }
}

export { AdditionInfo }