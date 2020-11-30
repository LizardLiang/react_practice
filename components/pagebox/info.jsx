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
    render() {
        const Styles = {
            StyleContainer:{
                color:      'white',
                height:     '25%',
                fontSize:   '3vmin',
                background: 'rgb(64, 68, 75)'
            },
            ImgContainer:{
                position:   'absolute',
                top:        '0',
                left:       '0',
            },
            spanContainer:{
                marginLeft: '20%'
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