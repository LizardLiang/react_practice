import React, {Component} from 'react'
import "./info.css"

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
        if(pos >= 660 && pos <= 915){
            let diff = 1 - ((pos - 660) / (915 - 660))
            let offset = (1 - diff) * 100
            this.setState({left:    offset + '%'})
            this.setState({opacity:  diff})
        }
        else if (pos < 660){
            this.setState({left:    '0%'})
            this.setState({opacity: 1})
        }
        else if (pos > 915){
            this.setState({left:    '100%'})
            this.setState({opacity: 0})
        }
    }
    render(){
        const Styles = {
            StyleContainer:{
                position:   'relative',
                left:       this.state.left,
                color:      'white',
                height:     'auto',
                fontSize:   '3vmin',
                background: 'rgb(64, 68, 75)',
                opacity:    this.state.opacity,
                margin:     '2.5% 0'
            },
            spanTitleContainer:{
                display:    'block',
                textAlign:  'center',
                borderBottom:   '1px solid grey',
                fontSize:   '3vmin'
            },
            spanContentContainer:{
                fontSize:   '2vmin'
            }
        }
        return(
            <div    ref={(MainElement)=>{this.MainElement = MainElement}}
                    style={Styles.StyleContainer}>
                <span style={Styles.spanTitleContainer}>自我介紹</span>
                <span style={Styles.spanContentContainer}>
                    在軟體公司任職期間，開發一款馬達測試軟體以及協助編輯Odoo ERP系統和單晶片韌體的編寫
                    <br/>
                    <br/>
                    空閒時間有接過一次 web 相關案件，是使用 HTML/CSS 搭配 Javascript完成<br/>
                    之後我又將其重新使用ReactJS 改寫，並將成果放置在下方 project部分
                    <br/>
                    <br/>
                    目前短期目標是成為一名前端工程師，並正在自學React的部分<br/>
                    長期目標為成為全端工程師，目前僅學到使用Python + Flask作為web API，與我的前端網頁串接<br/>
                </span>
            </div>
        )
    }
}

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
        if(pos > 685 && pos < 915){
            let diff = 1 - ((pos - 685)/(915 - 685))
            let offset = (1 - diff) * 100
            this.setState({left:    offset + '%'})
            this.setState({opacity: diff})
        }
        else if (pos >= 915){
            this.setState({left:    '100%'})
            this.setState({opacity: 0})
        }
        else if (pos < 685){
            this.setState({left:    '0%'})
            this.setState({opacity: 1})
        }
    }
    render() {
        const Styles = {
            StyleContainer:{
                position:   'relative',
                left:       this.state.left,
                color:      'white',
                height:     '25%',
                fontSize:   '3vmin',
                background: 'rgb(64, 68, 75)',
                opacity:    this.state.opacity,
                margin:     '2.5% 0'
            },
            ImgContainer:{
                float:      'left',
                top:        '0',
                left:       '0',
                height:     '100%',
            },
            spanContainer:{
                marginLeft: '5%'
            }
        }
        return(
            <div    ref={(MainElement)=>{this.MainElement = MainElement}}
                    style={Styles.StyleContainer} id={this.props.id}>
                <img style={Styles.ImgContainer} src="../img/SelfPic.jpg"></img>
                <span style={Styles.spanContainer}>梁芳銘</span><br/>
                <span style={Styles.spanContainer}>Fang-Ming, Liang</span><br/>
                <span style={Styles.spanContainer} role="img" aria-label="phone">
                    📱 0920173978
                </span><br/>
                <span style={Styles.spanContainer} role="img" aria-label="mail">
                    ✉️ 
                    <a href="mailto: shotup0101@gmail.com">
                            shotup0101@gmail.com
                    </a>
                </span>
            </div>
        )
    }
}

export { Info, Intro }