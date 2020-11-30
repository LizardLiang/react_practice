import React from 'react'
import "./info.css"

class Experience extends React.Component    {
    constructor(props){
        super(props)
    }

    render(){
        const Styles = {
            StyleContainer:{
                color:      'white',
                fontSize:   '4vmin',
                background:  'rgb(64, 68, 75)'
            }
        }
        return(
            <div style={Styles.StyleContainer}>
                <span>My Experience</span>
                <ul>
                    <li className="li">偉祺電機 (Famax) 3 years as Software engineer</li>
                </ul>
            </div>
        )
    }
}

export { Experience }