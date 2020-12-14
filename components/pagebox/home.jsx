import React, {Component} from 'react'
import { Info, Experience, Projects, MyTool, AdditionInfo, Intro } from "./"
import { SideBar } from '../sidebar'

class Home extends Component{
    render(){
        const Styles = {
            MainPageContainer: {
                marginTop:  '100vh',
                marginLeft: 'auto',
                marginRight:'auto',
                position:   'relative',
                background: 'rgb(54, 57, 63)',
                boxSizing:  'border-box',
                width:      '50vw',
            },
            Container:  {
                background: 'rgb(47, 49, 54)',
                position:   'relative'
            }
        }
        return(
            <div class='container_fluid' style={Styles.Container}>
                <div style={Styles.MainPageContainer}>
                    <Info           id="1" />
                    <Intro                 />
                    <Experience     id="2" />
                    <Projects       id="3" />
                    <MyTool         id="4" />
                    <AdditionInfo   id="5" />
                </div>
                <SideBar />
            </div>
        )
    }
}

export { Home }