import React from 'react'

class Info extends React.Component  {
    render() {
        const Styles = {
            StyleContainer:{
                color:      'white',
                minHeight:  '25%',
            }
        }
        const {StyleContainer} = Styles
        return(
            <div style={Styles.StyleContainer}>
                <span>This is my Info</span>
            </div>
        )
    }
}

export { Info }