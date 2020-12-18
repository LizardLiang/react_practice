import React, {Component} from 'react'
import styles from 'styled-components'
import "./info.css"

const MainIntroDiv = styles.div `
    position:           relative;
    margin:             2.5% auto;
    color:              white;
    @media screen and (min-width:   1080px){
        fontSize:       1.8rem;
        width:          868px;
        height:         176px;
    }

    @media screen and (max-width:   1024px){
        width:          85%;
        height:         350px;
    }
`

const SpanTitle = styles.span `
    @media screen and (min-width:   1080px){
        position:           relative;
        display:            inline-block;
        // border-bottom:   1px solid grey;
        z-index:            1;
        color:              black;
        height:             100%;
        left:               50px;
        font-size:          1.5rem;
    }

    @media screen and (max-width: 1024px){
        position:           relative;
        left:               0;
        top:                0;
        font-size:          0.5rem;
        color:              black;
        text-align:         right;
        width:              100%;
    }
`

const DivTitle  = styles.div `
    @media screen and (min-width: 1080px){
        float:              left;
        width:              15%;
        height:             100%;
        position:           relative;
        z-index:            1;
        &:before  {
            content:        '';
            position:       absolute;
            top:            0;
            left:           0;
            background:     pink;
            z-index:        -1;
            height:         100%;
            width:          100%;
            transform:      skew(-30deg);
        }
    }

    @media screen and (max-width: 1024px){
        width:              20%;
        height:             20px;
        position:           relative;
        z-index:            1;
        &:before  {
            content:        '';
            position:       absolute;
            top:            0;
            left:           0;
            background:     pink;
            z-index:        -1;
            height:         100%;
            width:          100%;
            transform:      skew(-30deg);
        }
    }
`

const ShapeDiv = styles.div `
    @media screen and (min-width: 1080px){
        height:             176px;
        width:              90px;
        float:              left;
        shape-outside:      polygon(0 0, 100% 0, 0 100%)
    }

    @media screen and (max-width: 1024px){
        display:            none;
    }
`

const DivContent  = styles.div `
    @media screen and (min-width: 1080px){
        float:              left;
        width:              85%;
        height:             176px;
    }

    @media screen and (max-width: 1024px){
        width:              100%;
    }
`

const SpanContent = styles.span `
    width:                  100%;
    fontSize:               0.5rem;
`

class Intro extends Component {
    constructor(props){
        super(props)

        this.state = {
            opacity:    1,
            left:       '0%'
        }
    }
    componentDidMount(){
        window.addEventListener('scroll', this.scrollHandler)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.scrollHandler)
    }

    scrollHandler = ()=>{
        let rec = this.MainElement.getBoundingClientRect()
        let pos = rec['top']
        let height = rec['height']
        let winHeight = window.innerHeight
        let minW = winHeight - height
        let maxW = winHeight
        if(pos >= minW && pos <= maxW){
            let diff = 1 - ((pos - minW) / (maxW - minW))
            let offset = (1 - diff) * 100
            this.setState({left:    offset + '%'})
            this.setState({opacity:  diff})
        }
        else if (pos < minW){
            this.setState({left:    '0%'})
            this.setState({opacity: 1})
        }
        else if (pos > maxW){
            this.setState({left:    '100%'})
            this.setState({opacity: 0})
        }
    }
    render(){
        const Styles = {
            StyleContainer:{
                left:           this.state.left,
                opacity:        this.state.opacity,
            }
        }
        return(
            <MainIntroDiv    
                ref={(MainElement)=>{this.MainElement = MainElement}}
                style={Styles.StyleContainer}>
                <DivTitle>
                    <SpanTitle>自我介紹</SpanTitle>
                </DivTitle>
                <DivContent>
                    <ShapeDiv></ShapeDiv>
                    <SpanContent>
                        在軟體公司任職期間，開發一款馬達測試軟體以及協助編輯Odoo ERP系統和單晶片韌體的編寫<br/><br/>
                        空閒時間有進行過 web 相關案件，是使用 HTML/CSS 搭配Javascript完成，之後又將其重新使用ReactJS 改寫，並將成果放置在下方 project部分<br/><br/>
                        目前短期目標是成為一名前端工程師，並正在自學React的部分<br/><br/>
                        長期目標為成為全端工程師，目前僅學到使用Python + Flask作為web API，與我的前端網頁串接
                    </SpanContent>
                </DivContent>
            </MainIntroDiv>
        )
    }
}

const MainInfoDiv = styles.div `
    position:       relative;
    color:          white;
    margin:         2.5% auto;
    @media screen and (min-width:   1080px){
        height:     230.25px;
        width:      837.75px;
        fontSize:   3vmin;
        // background: rgb(64, 68, 75);
    }
    @media screen and (max-width:   1024px){
        width:      85%;
        height:     200px;
    }
`
const Imgdiv = styles.div `
    @media screen and (min-width:   1080px){
        position:       relative;
        display:        inline-block;
        width:          171.23px;
        height:         100%;
    }
    @media screen and (max-width:   1024px){
        position:       relative;
        width:          92.97px;
        height:         125px;
        display:        inline-block;
    }
`

const Img = styles.img `
    position:   absolute;
    height:     100%;
    float:      left;
    top:        0;
    left:       0;
` 

const SpanInfo = styles.span `
    @media screen and (min-width:   1080px){
        margin-left:    5%;
        font-size:      2rem;
        color:          white;
    }

    @media screen and (max-width:   1024px){
        display:        inline-block;
        font-size:      1rem;
        color:          white;
    }
`
const MainSpanDive = styles.div `
    @media screen and (min-width:   1080px){
        position:       absolute;
        display:        inline-block;
        width:          calc(100% - 181.23px)
    }
    @media screen and (max-width:   1024px){
        position:       absolute;
        margin:         0 5px;
        display:        inline-block;
        width:          calc(100% - 102.97px);
        height:         100%;
    }
`

class Info extends React.Component  {
    constructor(props){
        super(props)
        this.state = {
            opacity: 1,
            left:       '0%'
        }
        // this.scrollHandler = this.scrollHandler.bind(this)
    }

    componentDidMount(){
        window.addEventListener('scroll', this.scrollHandler)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.scrollHandler)
    }

    scrollHandler = (e) => {
        let rec = this.MainElement.getBoundingClientRect()
        let pos = rec['top']
        let height = rec['height']
        let winHeight = window.innerHeight
        let minW = winHeight - height
        let maxW = winHeight
        if(pos > minW && pos < maxW){
            let diff = 1 - ((pos - minW)/(maxW - minW))
            let offset = (1 - diff) * 100
            this.setState({left:    offset + '%'})
            this.setState({opacity: diff})
        }
        else if (pos >= maxW){
            this.setState({left:    '100%'})
            this.setState({opacity: 0})
        }
        else if (pos < minW){
            this.setState({left:    '0%'})
            this.setState({opacity: 1})
        }
    }
    render() {
        const Styles = {
            StyleContainer:{
                left:       this.state.left,
                opacity:    this.state.opacity,
            }
        }
        return(
            <MainInfoDiv    ref={(MainElement)=>{this.MainElement = MainElement}}
                    style={Styles.StyleContainer} id={this.props.id}>
                <Imgdiv>
                    <Img src="../img/SelfPic.jpg"></Img>
                </Imgdiv>
                <MainSpanDive>
                    <SpanInfo>梁芳銘</SpanInfo><br/>
                    <SpanInfo>Fang-Ming, Liang</SpanInfo><br/>
                    <SpanInfo role="img" aria-label="phone">
                        📱 0920173978
                    </SpanInfo><br/>
                    <SpanInfo role="img" aria-label="mail">
                        ✉️ 
                        <a href="mailto: shotup0101@gmail.com">
                                shotup0101@gmail.com
                        </a>
                    </SpanInfo>
                </MainSpanDive>
            </MainInfoDiv>
        )
    }
}

export { Info, Intro }