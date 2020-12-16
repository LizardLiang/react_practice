import React from 'react'
import { Test_Program, WebGame, StockChart } from "../../Projects"
import { ContentTitle } from "../../components/ContentTitle"

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
            <div style={Styles.divContainer}>
                <ContentTitle   titletext={'Project #' + this.props.id + ' ' + this.props.name} 
                                clickevent={this.setVisibility} 
                                isVisible={this.state.isVisible}/>
                {this.switchProject(this.props.name, this.state.isVisible)}
            </div>
        )
    }
}

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
        const Styles = {
            StyleContainer:{
                position:   'relative',
                left:       this.state.left,
                color:      this.state.color,
                width:      "100%",
                background: 'rgb(64, 68, 75)',
                textAlign:  'center',
                opacity:    this.state.opacity,
                width:      '75%',
                margin:     '2.5% 12.5%',
            },
            spanContainer:{
                display:        'block',
                width:          '100%',
                fontSize:       '3vmin',
                borderBottom:   '1px solid grey'
            }
        }
        return (
            <div    ref = {(MainElement) => {this.MainElement = MainElement}}
                    style={Styles.StyleContainer} id={this.props.id}>
                <span style={Styles.spanContainer}>專業 / 經驗</span><br/>
                <Project id="1" name="Test Program"/>
                <Project id="2" name="Web Game"/>
                <Project id="3" name="Python Web API"/>
            </div>
        )
    }
}

export { Projects }