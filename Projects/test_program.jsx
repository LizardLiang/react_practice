import React from "react"

class Test_Program extends React.Component  {
    constructor(props){
        super(props)
        this.state = {
            isVisible: this.props.isVisible
        }
    }
    render(){
        const Styles ={
            spanContainer:{
                display:    'block',
                fontSize:   '2vmin'
            },
            divContainer:{
                background: 'rgb(64, 68, 75)',
                visibility: this.props.isVisible,
                marginLeft: '20%',
                width:      '60%',
                display:    'block'
            },
        }
        return(
            <div style={Styles.divContainer}>
                <span style={Styles.spanContainer}>
                    This test program is used for testing motor quality</span>
                <span style={Styles.spanContainer}>
                    It use MySQL as database to restore data from inductance meter and resistance meter!
                </span>
                <span style={Styles.spanContainer}>
                    Use RS232 as communication protocol!
                </span>
            </div>
        )
    }
}

export { Test_Program }