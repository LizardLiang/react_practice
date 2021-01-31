import React, {Component} from 'react'
import styled from 'styled-components'
import { Info, Experience, Projects, MyTool, AdditionInfo, Intro } from "./"

const SideWrap = styled.div ` 
    position: absolute;
    top: 0;
    height: calc(100% + 24px);
    width: 6%;
    /* overflow: auto; */
`

const NavDiv = styled.div ` 
    position: sticky;
    top: 3rem;
    height: calc(100vh - 3rem);
    width: 100%;
    background: rgb(41, 43, 47);
    color: white;
    margin-top: 100vh;
    z-index: 2;
`

const NavButton = styled.button ` 
    position: relative;
    top: 1rem;
    width: 100%;
    background: inherit;
    color: white;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    font-size: 1.3rem;
    margin: 1rem 0;
    border-radius: 5px;
    border-bottom: 1px solid grey;
`

const SideNav = () => {
    return (
        <SideWrap>
            <NavDiv>
                <NavButton>個人資料</NavButton>
                <NavButton>簡歷</NavButton>
                <NavButton>專業 / 經驗</NavButton>
                <NavButton>常用工具</NavButton>
                <NavButton>相關連結</NavButton>
            </NavDiv>
        </SideWrap>
    )
}

const DirMain = styled.div ` 
    position: absolute;
    top: 0;
    height: 100%;
    width: 100vw;
    background-color: rgba( 0, 0, 0, 0.8);
    z-index: 2;
`

const Directorys = () => {
    return (
        <DirMain></DirMain>        
    )
}

const HeaderDiv = styled.div `
    position: fixed;
    top:            0px;
    left:           0px;
    bottom: 0px;
    right: 0px;
    height:         100vh;
    width:          100vw;
    display:        table;
    background:     rgb(32, 34, 37);
    backface-visibility: hidden;
    overflow: auto;
`

const HeaderH1 = styled.h1 `
    display:        table-cell;
    text-align:     center;
    vertical-align: middle;
    font-size:      5rem;
    color:          white;

    @media screen and (max-width: 280px){
        font-size: 3.5rem;
    }
`

const MainPage = styled.div `
    position:   relative;
    margin:     100vh 0 0 0;
    // background: 'rgb(54, 57, 63)',
    background: rgb(32, 34, 37);
    box-sizing: border-box;
    width: 100vw;
    // overflowX:  'hidden',
`

const Container = styled.div ` 
    background: rgb(32, 34, 37);
    position:   relative;
    width: 100%;
    border: 1px solid white;
`

export default class Home extends Component{
    constructor(props){
        super(props)
        this.InfoRef = React.createRef()
        this.IntroRef = React.createRef()
        this.ExpRef = React.createRef()
        this.ProjRef = React.createRef()
        this.MyToolRef = React.createRef()
        this.AddRef = React.createRef()
    }

    render(){
        return(
            <Container>
                {/* <Directorys /> */}
                <HeaderDiv>
                    <HeaderH1>
                        Hi! Everyone
                    </HeaderH1>
                </HeaderDiv>
                <SideNav />
                <MainPage>
                    <Info         id="1" ref={this.InfoRef} />
                    <Intro               ref={this.IntroRef}/>
                    <Experience   id="2" ref={this.ExpRef}/>
                    <Projects     id="3" ref={this.ProjRef}/>
                    <MyTool       id="4" ref={this.MyToolRef}/>
                    <AdditionInfo id="5" ref={this.AddRef}/>
                </MainPage>
            </Container>
        )
    }
}