import React from 'React'


class ContentTitle extends React.Component{
    render(){
        const Styles = {
            // Div contains title
            divTitleContainer:  {
                boxSizing:      'border-box',
                height:         '8%',
                display:        'block',
                paddingLeft:    '10%'
            },
            // Button before title
            buttonContainer:{
                position:   'relative',
                width:      '2%',
                height:     '100%',
                float:      'left',
                border:     'none',
                boxShadow:  'none',
                background: 'rgb(68, 68, 76)',
                fontSize:   '2vmin',
                color:      'white',
                padding:    '2% 0'
            },
            // Title text block
            spanTitleContainer: {
                height:     '100%',
                fontSize:   '5vmin',
                display:    'block',
                padding:    '1% 0'
            }
        }
        return (
            <div style={Styles.divTitleContainer}>
                <button onClick={() => this.props.clickevent()} style={Styles.buttonContainer}>
                    {this.props.isVisible === 'none' ? '+' : '-'}
                </button>
                <span style={Styles.spanTitleContainer}>
                    {this.props.titletext}
                </span>
            </div>
        )
    }
}

export { ContentTitle }