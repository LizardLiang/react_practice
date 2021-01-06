import React, {Component} from 'react'
import styled from 'styled-components'
import { Info, Experience, Projects, MyTool, AdditionInfo, Intro } from "./"
import { SideBar } from '../sidebar'

const HeaderDiv = styled.div `
    position:       fixed;
    top:            0px;
    left:           0px;
    height:         100vh;
    width:          100vw;
    display:        table;
    background:     rgb(32, 34, 37);
    -webkit-backface-visibility: hidden;
`

const HeaderH1 = styled.h1 `
    display:        table-cell;
    text-align:     center;
    vertical-align: middle;
    font-size:      5rem;
    color:          white
`

export default class Home extends Component{
    render(){
        const Styles = {
            MainPageContainer: {
                marginTop:  '100vh',
                position:   'relative',
                margin:     '100vh 0 0 0',
                // background: 'rgb(54, 57, 63)',
                background: 'rgb(32, 34, 37)',
                boxSizing:  'border-box',
                width:      '100vw',
                overflowX:  'hidden',
            },
            Container:  {
                // background: 'rgb(47, 49, 54)',
                background: 'rgb(32, 34, 37)',
                position:   'relative'
            }
        }
        return(
            <div class='container_fluid' style={Styles.Container}>
                <HeaderDiv>
                    <HeaderH1>
                        Hi! Everyone
                    </HeaderH1>
                </HeaderDiv>
                <div style={Styles.MainPageContainer}>
                    <Info           id="1" />
                    <Intro                 />
                    <Experience     id="2" />
                    <Projects       id="3" />
                    <MyTool         id="4" />
                    <AdditionInfo   id="5" />
                </div>
                {/* <SideBar /> */}
            </div>
        )
    }
}