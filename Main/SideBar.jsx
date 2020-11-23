import React    from "react"
import ReactDOM from "react-dom"
import {Buttons}    from "../components/buttons"

class SideBar extends React.Component{
    render(){
        const Styles = {
            StyleContainer: {
                position:   'sticky',
                top:        '25vh',
                height:     '450px',
                background: 'rgb(32, 34, 37)',
                width:      '5vw',
                float:      'left',
                boxSizing:  'border-box',
                maxWidth:   '130px'
            },
            offsetContainer:    {
                position:   'relative',
                top:        '0%',
                height:     '300px'
            }
        }
        const {StyleContainer} = Styles
        return (
            <div style={StyleContainer}>
                <div style={Styles.offsetContainer}>
                    <Buttons name=""  item="5"/>
                    <Buttons name="Info"  item="1"/>
                    <Buttons name="Experience" item="2" />
                    <Buttons name="Project" item="3" />
                    <Buttons name="Contact" item="4" />
                </div>
            </div>
        )
    }
}

export { SideBar }