import React, {Component} from 'react'
import "./info.css"

class SchoolInfo extends Component{
    render(){
        const Styles = {
            BlockContainer:{
                position:       'relative',
                background:     'rgb(64, 68, 75)',
                marginTop:      '10%'
            },
            liContainer:{
                paddingLeft:    '10%'
            }
        }
        return(
            <div style={Styles.BlockContainer}>
                <span>Graduate School:</span>
                <ul>
                    <li className="li">Yuan Zi university</li>
                    <li className="li">Major in Electrical Engineering</li>
                </ul>
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
                    ✉️ shotup0101@gmail.com
                </span><br/>
            </div>
        )
    }
}

export { Info }