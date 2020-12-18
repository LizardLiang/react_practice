import React from 'react'
import styles from 'styled-components'
import { Test_Program, WebGame, StockChart } from "../../Projects"
import { ContentTitle } from "../../components/ContentTitle"

const ContentDiv = styles.div `
    height:             auto;
    vertical-align:     top;
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
                break
            case "Web Game":
                return <WebGame isVisible={isVisible}/>
            case "Python Web API":
                return <StockChart isVisible={isVisible} />
            default:
                return  <div></div>
                break
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
        const Styles = {
            divContainer: {
                height:         "auto",
                verticalAlign:  "top",
            }
        }
        return (
            <ContentDiv style={Styles.divContainer}>
                <ContentTitle   titletext={'Project #' + this.props.id + ' ' + this.props.name} 
                                clickevent={this.setVisibility} 
                                isVisible={this.state.isVisible}/>
                {this.switchProject(this.props.name, this.state.isVisible)}
            </ContentDiv>
        )
    }
}

const MainDiv = styles.div `
    position:       relative;
    left:           ${props => props.left || 0};
    color:          ${props => props.color || 'white'};
    width:          100%;
    // background:     rgb(64, 68, 75);
    textAlign:      center;
    opacity:        ${props => props.opacity || 1};
    width:          75%;
    margin:         2.5% 12.5%;
`

const TitleSpan = styles.span `
    display:        block;
    position:       relative;
    width:          95%;
    height:         auto;
    font-size:      3vmin;
    margin:         0 auto 5px auto;
    // border-bottom:  1px solid grey;
    text-align:     center;
    z-index:        1;
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
                <TitleSpan>專業 / 經驗</TitleSpan><br/>
                <Project id="1" name="Test Program"/>
                <Project id="2" name="Web Game"/>
                <Project id="3" name="Python Web API"/>
            </MainDiv>
        )
    }
}

export { Projects }