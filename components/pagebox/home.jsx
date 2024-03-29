import React, {Component} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Info, Experience, Projects, MyTool, AdditionInfo, Intro } from "./"

const SideWrap = styled.div ` 
    position: absolute;
    top: 0;
    height: calc(100% + 24px);
    width: 10%;
    /* overflow: auto; */
`

const NavDiv = styled.div ` 
    position: sticky;
    top: 3rem;
    height: calc(100vh - 3rem);
    width: 100%;
    background: rgb(41, 43, 47);
    color: white;
    margin-top: calc(100vh + 1px);
    z-index: 2;
`

const NavButton = styled.button ` 
    position: relative;
    /* top: 1rem; */
    width: 100%;
    background: inherit;
    color: white;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    font-size: 1.3rem;
    padding: 1rem 0px 1rem 20px;
    border-radius: 5px;
    border-bottom: 1px solid grey;

    &:focus {
        outline: none;
    }

    &:hover {
        background: rgb(54, 57, 63);
    }
`

const SideNav = (props) => {
    return (
        <SideWrap>
            <NavDiv>
                <NavButton onClick={()=>{props.click(0)}}>個人資料</NavButton>
                <NavButton onClick={()=>{props.click(1)}}>自我介紹</NavButton>
                <NavButton onClick={()=>{props.click(2)}}>簡歷</NavButton>
                <NavButton onClick={()=>{props.click(3)}}>專業 / 經驗</NavButton>
                <NavButton onClick={()=>{props.click(4)}}>常用工具</NavButton>
                <NavButton onClick={()=>{props.click(5)}}>相關連結</NavButton>
            </NavDiv>
        </SideWrap>
    )
}

SideNav.propTypes = {
    click: PropTypes.func
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
    background:     #121212;
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
    border-top: 1px solid grey;
    // overflowX:  'hidden',
`

const Container = styled.div ` 
    background: rgb(32, 34, 37);
    position:   relative;
    width: 100%;
    border: 1px solid white;
    display: flex;
    flex-direction: column;
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

    SetRef = (ref, index) => {
        if(index == 0){
            this.InfoRef = ref
        }
        else if(index == 1){
            this.IntroRef = ref
        }
        else if(index == 2){
            this.ExpRef = ref
        }
        else if(index == 3){
            this.ProjRef = ref
        }
        else if(index == 4){
            this.MyToolRef = ref
        }
        else if(index == 5){
            this.AddRef = ref
        }
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
                <SideNav click={this.JumpToRef}/>
                <MainPage>
                    <Info         id="1" setRef={this.SetRef} />
                    <Intro               setRef={this.SetRef}/>
                    <Experience   id="2" setRef={this.SetRef}/>
                    <Projects     id="3" setRef={this.SetRef}/>
                    <MyTool       id="4" setRef={this.SetRef}/>
                    <AdditionInfo id="5" setRef={this.SetRef}/>
                </MainPage>
            </Container>
        )
    }

    JumpToRef = (index) => {
        if(index == 0){
            const y = this.InfoRef.getBoundingClientRect().top - 96 + window.pageYOffset
            window.scrollTo({top: y, behavior: "smooth"})
        }
        else if(index == 1){
            const y = this.IntroRef.getBoundingClientRect().top - 96 + window.pageYOffset
            window.scrollTo({top: y, behavior: "smooth"})
        }
        else if(index == 2){
            const y = this.ExpRef.getBoundingClientRect().top - 96 + window.pageYOffset
            window.scrollTo({top: y, behavior: "smooth"})
        }
        else if(index == 3){
            const y = this.ProjRef.getBoundingClientRect().top - 96 + window.pageYOffset
            window.scrollTo({top: y, behavior: "smooth"})
        }
        else if(index == 4){
            const y = this.MyToolRef.getBoundingClientRect().top - 96 + window.pageYOffset
            window.scrollTo({top: y, behavior: "smooth"})
        }
        else if(index == 5){
            const y = this.AddRef.getBoundingClientRect().top - 96 + window.pageYOffset
            window.scrollTo({top: y, behavior: "smooth"})
        }
    }
}