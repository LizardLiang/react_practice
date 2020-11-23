import React from "react"
import ReactDOM from "react-dom"
import {Main, SideBar} from "./Main"
import {PageBox, Info, Experience, Projects } from "./components/pagebox"

class Default extends React.Component {
    constructor(){
        super();
    }

    render(){
        const Styles = {
            StyleContainer: {
                width:      '100vw',
                minHeight:  '920px',
                background: 'rgb(47, 49, 54)',
                margin:     '0',
                boxSizing:  'border-box'
            },
            MainPageContainer: {
                // overflow:   'scroll',
                position:   'relative',
                background: 'rgb(68, 68, 76)',
                left:       '15vw',
                width:      '70vw'
            }
        }
        const {StyleContainer} = Styles
        return (
            <div style={StyleContainer}>
                <SideBar />
                <Main />
                {/* <PageBox /> */}
                <div style={Styles.MainPageContainer}>
                    <Info id="1" />
                    <Experience id="2" />
                    <Projects id="3" />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Default />, document.getElementById("root"))