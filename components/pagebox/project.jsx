import React from 'react'
import styled from 'styled-components'
import { Test_Program, WebGame, StockChart } from "../../components/Projects"
import { ContentTitle } from "../../components/ContentTitle"

const ContentDiv = styled.div `
    height:             auto;
    vertical-align:     top;
    margin:             5px 0;
`

class Project extends React.Component   {
    constructor(props){
        super(props)
        this.state = {
            isVisible: 'none'
        }

        this.setVisibility = this.setVisibility.bind(this)
    }

    switchProject(name, isVisible){
        switch(name){
            case "Test Program":
                return <Test_Program isVisible={isVisible}/>
            case "Web Game":
                return <WebGame isVisible={isVisible}/>
            case "Python Web API":
                return <StockChart isVisible={isVisible} />
            default:
                return  <div></div>
        }
    }

    setVisibility(){
        if(this.state.isVisible === 'block'){
            this.setState({isVisible: 'none'})
        }
        else{
            this.setState({isVisible: 'block'})
        }
    }

    render(){
        return (
            <ContentDiv>
                <ContentTitle   titletext={'Project #' + this.props.id + ' ' + this.props.name} 
                                clickevent={this.setVisibility} 
                                isVisible={this.state.isVisible}/>
                {this.switchProject(this.props.name, this.state.isVisible)}
            </ContentDiv>
        )
    }
}

const MainDiv = styled.div `
    position:       relative;
    left:           ${props => props.left || 0};
    color:          ${props => props.color || 'white'};
    // background:     rgb(64, 68, 75);
    textAlign:      center;
    opacity:        ${props => props.opacity || 1};
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
    height:         auto;
    font-size:      3vmin;
    margin:         0 auto 5px auto;
    text-align:     center;
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
        z-index:    -1;
        transform:  skew(-30deg);
    }
`

class Projects extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            color: 'white',
            opacity:    1,
            left:       '0%'
        }

        // important to set this function to bind
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
        // If let it use new height to calculate 
        // content can't be displayed properly
        if (height > 837.75){
            height = 837.75
        }
        let minW = winHeight - height
        let maxW = winHeight
        if(pos >= minW && pos <= maxW){
            let diff = 1 - ((pos - minW) / (maxW - minW))
            let offset =    (1- diff) * 100
            this.setState({left:    offset + '%'})
            this.setState({opacity: diff})
        }
        else if (pos < minW){
            this.setState({opacity: 1})
            this.setState({left:    '0%'})
        }
        else if (pos > maxW){
            this.setState({opacity: 0})
            this.setState({left:    '100%'})
        }
    }

    render(){
        return (
            <MainDiv
                color={this.state.color} left={this.state.left} opacity={this.state.opacity}
                ref = {(MainElement) => {this.MainElement = MainElement}}
                id={this.props.id}>
                <TitleSpan>專業 / 經驗</TitleSpan>
                <Project id="1" name="Test Program"/>
                <Project id="2" name="Web Game"/>
                <Project id="3" name="Python Web API"/>
            </MainDiv>
        )
    }
}

export { Projects }