import React from 'React'


class ContentTitle extends React.Component{
    render(){
        const Styles = {
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
            // Div contains title
            divTitleContainer:  {
                height:     '8%'
            },
            // Title text block
            spanTitleContainer: {
                height:     '100%',
                fontSize:   '5vmin',
                display:    'inline-block',
                padding:    '1% 0'
            }
        }
        return (
            <div style={Styles.divTitleContainer}>
                <button onClick={() => this.props.clickevent()} style={Styles.buttonContainer}>
                    {this.props.isVisible === 'hidden' ? '+' : '-'}
                </button>
                <span style={Styles.spanTitleContainer}>
                    {this.props.titletext}
                </span>
            </div>
        )
    }
}

export { ContentTitle }