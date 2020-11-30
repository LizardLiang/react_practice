import React from "react"
import ReactDOM from "react-dom"
import {Main, SideBar} from "./Main"
import {PageBox, Info, Experience, Projects } from "./components/pagebox"

class Default extends React.Component {
    constructor(){
        super();
        // this.testFetch = this.testFetch.bind(this)
    }

    // testFetch(){
    //     fetch("https://api.ipify.org?format=json")
    //     .then(response => response.json())
    //     .then(response => console.log(response));
    // }

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
                position:   'relative',
                background: 'rgb(54, 57, 63)',
                left:       '15vw',
                boxSizing:  'border-box',
                width:      '70vw',
                minHeight:  '90vh',
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