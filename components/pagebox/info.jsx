import React, {Component} from 'react'
import "./info.css"

class Intro extends Component {
    render(){
        const Styles = {
            StyleContainer:{
                color:      'white',
                height:     'auto',
                fontSize:   '3vmin',
                background: 'rgb(64, 68, 75)'
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
            <div style={Styles.StyleContainer}>
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
            opacity: 1
        }
        this.scrollHandler = this.scrollHandler.bind(this)
    }

    componentDidMount(){
        window.addEventListener('scroll', this.scrollHandler)
    }

    scrollHandler(e){
        let pos = window.pageYOffset
        if(pos > 20 && pos < 245){
            let diff = (pos - 20)/(245 - 20)
            this.setState({opacity: diff})
        }
    }
    render() {
        const Styles = {
            StyleContainer:{
                color:      'white',
                height:     '25%',
                fontSize:   '3vmin',
                background: 'rgb(64, 68, 75)',
                opacity:    this.state.opacity
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
            <div style={Styles.StyleContainer} id={this.props.id}>
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