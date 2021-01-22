import React, { Component }    from "react"
import {Link} from 'react-router-dom'
import styled from 'styled-components'
// import MenuIcon from '../../img/drawsvg.svg'

const PLMainDiv = styled.div ` 
    position: absolute;
    width: 10%;
    display: none;
    flex-direction: column;
    background: inherit;
    border-radius: 5px;
    top: 3rem;

    &:hover {
        display: flex;
    }
`
const ProjectList = () => {

    return (
        <PLMainDiv>
            <GuideButton>
                <GuideLink to='/StockSearch'>
                    股票查詢
                </GuideLink>
            </GuideButton>
            <GuideButton>
                <GuideLink to='./CountDown'>
                    計時器
                </GuideLink>
            </GuideButton>
            <GuideButton>
                <GuideLink to='./CheckIP'>
                    IP 查詢
                </GuideLink>
            </GuideButton>
            <GuideButton>
                <GuideLink to='./Scripts'>
                    檔案下載
                </GuideLink>
            </GuideButton>
            <GuideButton>
                <GuideLink to='./TodoList'>
                    待辦事項
                </GuideLink>
            </GuideButton>
        </PLMainDiv>
    )
}

const MainDiv = styled.div `
    position:           fixed;
    display:            flex;
    top:                0;
    left:               0;
    height:             3rem;
    width:              100%;
    z-index:            3;
    color:              white;
    justify-content:    flex-end;
    background:     rgb(47, 49, 54);
    /* box-shadow:         0 0 10px 20px rgba(0, 0, 0, 0.5); */
`

const GuideButton = styled.button `
    min-width:          4rem;
    width:              auto;
    align-content:      center;
    background:         inherit;
    border:             none;
    color:              white;
    font-size:          2rem;
    opacity:            0.3;
    margin:             0 0.5rem;

    @media screen and (max-width:   768px){
        font-size:      1.41rem;
        margin: 0 1rem;
    }

    @media screen and (max-width:   540px){
        min-width:      3rem;
        margin: 0 1rem;
        font-size:      1rem;
    }

    @media screen and (max-width:   425px){
        font-size:      1rem;
        margin:         0;
    }

    @media screen and (max-width:   375px){
        min-width:      4rem;
    }

    @media screen and (max-width:   320px){
        font-size:      0.81rem;
        min-width: 2rem;
    }

    &:hover {
        opacity:        1;
    }

    &:focus {
        opacity: 1;
        outline: none;
        div {
            display: flex;
        }
    }

    a :hover{
        text-decoration: none;
    }
`

const GuideLink = styled(Link) `
    &:focus, &:hover{
        text-decoration:    none;
    }
`

export default class HeadBanner extends Component {
    render(){
        return (
            <MainDiv>
                <GuideButton>
                    <GuideLink to='/'>
                        首頁
                    </GuideLink> 
                </GuideButton>
                <GuideButton>
                    <GuideLink to='/Projects'>
                        Projects
                    </GuideLink>
                </GuideButton>
                <GuideButton>
                    <GuideLink to='/Login'>
                        登入/註冊
                    </GuideLink>
                </GuideButton>
                {/* <img src={MenuIcon} alt='設定' /> */}
                {/*<GuideButton>
                    4
                </GuideButton> */}
            </MainDiv>
        )
    }
}