import React    from "react"
import ReactDOM from "react-dom"

class Main extends React.Component{
    render(){
        const Style = {
            StyleContainer:{
                background:     'rgb(47, 49, 54)',
                color:          'white',
                fontSize:       '5vmin',
                width:          '100%',
                height:         '10%',
                position:       'sticky',
                top:            '0',
                left:           '0',
                display:        'block',
                zIndex:         '1',
                boxSizing:      'border-box',
                borderBottom:   '5px solid black'
            },
            spanContainer:{
                boxSizing:  'border-box',
                width:      '100%',
                display:    'block',
                position:   'absolute',
                top:        '0',
                left:       '0',
            }
        }

        const {StyleContainer} = Style
        return (
            <div style={StyleContainer}>
                <span style={Style.spanContainer}>
                    My Resume
                </span>
            </div>
        )
    }
}

export { Main }