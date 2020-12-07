import React    from "react"
import ReactDOM from "react-dom"
import {Buttons}    from "../components/buttons"

class SideBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isVisible: 'hidden'
        }
        // this.handleScrollEvent = this.handleScrollEvent.bind(this)
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScrollEvent)
    }

    handleScrollEvent = () => {
        if(window.pageYOffset >= 937){
            this.setState({isVisible: 'visible'})
        }
        else{
            this.setState({isVisible: 'hidden'})
        }
    }

    render(){
        const Styles = {
            StyleContainer: {
                position:   'fixed',
                top:        '25vh',
                height:     '300px',
                background: 'rgb(32, 34, 37)',
                width:      '5vw',
                float:      'left',
                boxSizing:  'border-box',
                maxWidth:   '130px',
                minWidth:   '83.94px',
                zIndex:     '2',
                visibility: this.state.isVisible
            },
            offsetContainer:    {
                position:   'relative',
                top:        '0%',
                height:     '300px'
            }
        }
        const {StyleContainer} = Styles
        return (
            <div ref={(MainElement) => {this.MainElement = MainElement}} style={StyleContainer}>
                <div style={Styles.offsetContainer}>
                    <Buttons name="Info"  item="1"/>
                    <Buttons name="Experience" item="2" />
                    <Buttons name="Project" item="3" />
                    <Buttons name="Tools" item="4" />
                    <Buttons name="Github" item="5" />
                </div>
            </div>
        )
    }
}

export { SideBar }