import React, { Component }    from "react"
import ReactDOM from "react-dom"
import {Link} from 'react-router-dom'
import styles from 'styled-components'
import {Buttons}    from "../buttons"

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

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScrollEvent)
    }

    handleScrollEvent = () => {
        if(window.pageYOffset >= 2393){
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

const MainDiv = styles.div `
    position:           fixed;
    display:            flex;
    top:                0;
    left:               0;
    height:             3rem;
    width:              100%;
    z-index:            3;
    color:              white;
    justify-content:    flex-end;
    background:         rgb(32, 34, 37);
    box-shadow:         0 0 10px 20px rgba(0, 0, 0, 0.5);

    
`

const GuideButton = styles.button `
    min-width:          5rem;
    width:              auto;
    align-content:      center;
    background:         rgb(32, 34, 37);
    border:             none;
    color:              white;
    font-size:          2rem;
    opacity:            0.3;
    margin:             0 2rem;

    @media screen and (max-width:   768px) and (min-width:  426px){
        font-size:      1.5rem;
    }

    @media screen and (max-width:   425px){
        font-size:      1rem;
        margin:         0;
    }

    &:hover {
        opacity:        1;
    }
`

const GuideLink = styles(Link) `
    text-decoration:    none;
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
                        外掛下載
                    </GuideLink>
                </GuideButton>
                {/*<GuideButton>
                    4
                </GuideButton> */}
            </MainDiv>
        )
    }
}