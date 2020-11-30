import React, {Component} from 'react'
import "./info.css"

class SchoolInfo extends Component{
    render(){
        const Styles = {
            BlockContainer:{
                position:   'relative',
                background:  'rgb(64, 68, 75)'
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
                minHeight:  '25%',
                fontSize:   '4vmin',
                background:  'rgb(64, 68, 75)'
            }
        }
        return(
            <div style={Styles.StyleContainer}>
                <span>Hi! Welcome to My website</span><br/>
                <span>My name is Fang-Ming, Liang</span><br/><br/>
                <SchoolInfo />
            </div>
        )
    }
}

export { Info }