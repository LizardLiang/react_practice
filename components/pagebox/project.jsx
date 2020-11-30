import React from 'react'
import { Test_Program, WebGame } from "../../Projects"
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
                width:          "100%",
                verticalAlign:  "top"
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
            opacity:    1
        }

        // important to set this function to bind
        this.scrollHandler = this.scrollHandler.bind(this)
    }
    componentDidMount(){
        window.addEventListener('scroll', this.scrollHandler)
    }

    scrollHandler(e){
        let pos = window.pageYOffset
        if(pos > 495 && pos < 655){
            let diff = (pos - 495) / (655 - 495)
            this.setState({opacity: diff})
        }
    }

    render(){
        const Styles = {
            StyleContainer:{
                color:      this.state.color,
                width:      "100%",
                background: 'rgb(64, 68, 75)',
                textAlign:  'center',
                opacity:    this.state.opacity
            },
            spanContainer:{
                display:        'block',
                width:          '100%',
                fontSize:       '3vmin',
                borderBottom:   '1px solid grey'
            }
        }
        return (
            <div style={Styles.StyleContainer} id={this.props.id}>
                <span style={Styles.spanContainer}>專業 / 經驗</span><br/>
                <Project id="1" name="Test Program"/>
                <Project id="2" name="Web Game"/>
            </div>
        )
    }
}

export { Projects }