import React from 'react'

class Experience extends React.Component    {
    constructor(props){
        super(props)
    }

    render(){
        const Styles = {
            StyleContainer:{
                color: 'white',
            }
        }
        return(
            <div style={Styles.StyleContainer}>
                <span>My Experience</span>
            </div>
        )
    }
}

export { Experience }