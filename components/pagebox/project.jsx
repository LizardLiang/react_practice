import React from 'react'
import { Test_Program } from "../../Projects"
import { ContentTitle } from "../../components/ContentTitle"

class Project extends React.Component   {
    constructor(props){
        super(props)
        this.state = {
            isVisible: 'hidden'
        }

        this.setVisibility = this.setVisibility.bind(this)
    }

    switchProject(name, isVisible){
        switch(name){
            case "Test Program":
                return <Test_Program isVisible={isVisible}/>
                break
            default:
                return  <div></div>
                break
        }
    }

    setVisibility(){
        if(this.state.isVisible === 'visible'){
            this.setState({isVisible: 'hidden'})
        }
        else{
            this.setState({isVisible: 'visible'})
        }
    }

    render(){
        const Styles = {
            buttonContainer:{
                position:   'relative',
                width:      '2%',
                height:     '100%',
                float:      'left',
                border:     'none',
                boxShadow:  'none',
                background: 'rgb(68, 68, 76)',
                fontSize:   '2vmin',
                color:      'white',
                padding:    '2% 0'
            },
            divTitleContainer:  {
                height:     '8%'
            },
            spanTitleContainer: {
                height:     '100%',
                fontSize:   '5vmin',
                display:    'inline-block',
                padding:    '1% 0'
            }
        }
        return (
            <div>
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
            color: 'white'
        }

        // important to set this function to bind
        this.changeColor = this.changeColor.bind(this)
    }

    changeColor(){
        if(this.state.color === 'white'){
            this.setState({color: 'blue'})
        }
        else{
            this.setState({color: 'white'})
        }
    }

    render(){
        const Styles = {
            StyleContainer:{
                color: this.state.color,
            }
        }
        return (
            <div style={Styles.StyleContainer}>
                <span>These are My Project</span>
                <Project id="1" name="Test Program"/>
            </div>
        )
    }
}

export { Projects }