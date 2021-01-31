import React, {useContext} from "react"
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {IconContext} from 'react-icons'
import {BiUser, BiDownArrow, BiLogOut} from 'react-icons/bi'
import {AccountContext} from '../../app.jsx'
// import MenuIcon from '../../img/drawsvg.svg'

// const PLMainDiv = styled.div ` 
//     position: absolute;
//     width: 10%;
//     display: none;
//     flex-direction: column;
//     background: inherit;
//     border-radius: 5px;
//     top: 3rem;

//     &:hover {
//         display: flex;
//     }
// `
// const ProjectList = () => {

//     return (
//         <PLMainDiv>
//             <GuideButton>
//                 <GuideLink to='/StockSearch'>
//                     股票查詢
//                 </GuideLink>
//             </GuideButton>
//             <GuideButton>
//                 <GuideLink to='./CountDown'>
//                     計時器
//                 </GuideLink>
//             </GuideButton>
//             <GuideButton>
//                 <GuideLink to='./CheckIP'>
//                     IP 查詢
//                 </GuideLink>
//             </GuideButton>
//             <GuideButton>
//                 <GuideLink to='./Scripts'>
//                     檔案下載
//                 </GuideLink>
//             </GuideButton>
//             <GuideButton>
//                 <GuideLink to='./TodoList'>
//                     待辦事項
//                 </GuideLink>
//             </GuideButton>
//         </PLMainDiv>
//     )
// }

const SubMenuDiv = styled.div `
    position: absolute;
    top: 3.5rem;
    left: -6.5rem;
    opacity: 1;
    color: white;
    display: none;
    background: #2f3136;
    width: 11rem;
    border-radius: 10px;
    justify-content: center;
    flex-direction: column;

    &:hover {
        display: flex;
    }

    span{
        font-size: 1.8rem;
        margin: 5px;
    }

    hr {
        width: 70%;
        border-top: .5px solid white;
        margin: .1rem auto;
        
    }
`

const GuideLink = styled(Link) `
    &:focus, &:hover{
        text-decoration:    none;
    }
`

const SubButton = styled.button `
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    background: inherit;
    color: white;
    margin: 5px;
    border-radius: 10px;

    &:hover{
        background: rgb(92, 111, 177);
    }

    &:focus{
        outline: none;
        text-decoration: none;
    }
`

const SubLoginMenu = (props) => {
    const {accDispatch} = useContext(AccountContext)

    const dispatch = () => {
        accDispatch({type: 'set_account', payload: {status: 0, account: ''}})
    }
    return (
        <SubMenuDiv>
            <span>{props.account}</span>
            <hr />
            <SubButton onClick={dispatch}><BiLogOut />登出</SubButton>
        </SubMenuDiv>
    )
}

SubLoginMenu.propTypes ={
    account: PropTypes.any
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
`

const GuideButton = styled.button `
    position: relative;
    min-width:          4rem;
    width:              76px;
    align-content:      center;
    background:         inherit;
    border:             none;
    /* box-shadow:         0 0 10px 20px rgba(0, 0, 0, 0.5); */
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

const HeadBanner = () => {
    const {accState} = useContext(AccountContext)

    return (
        <MainDiv>
            <GuideButton>
                <GuideLink to='/'>
                    首頁
                </GuideLink> 
            </GuideButton>
            <GuideButton>
                <GuideLink to='/Projects'>
                    作品
                </GuideLink>
            </GuideButton>
            {accState.status == 0 ?
                <GuideButton>
                    <GuideLink to='/Login'>
                        登入
                    </GuideLink>
                </GuideButton>
            :
                <GuideButton>
                    <BiUser />
                    {/* Use IconContext.Provider to set CSS on Icon */}
                    <IconContext.Provider value={{size: '20px'}}>
                        <BiDownArrow />
                    </IconContext.Provider>
                    <SubLoginMenu status={accState.status} account={accState.account} />
                </GuideButton>}
        </MainDiv>
    )
}

export default HeadBanner