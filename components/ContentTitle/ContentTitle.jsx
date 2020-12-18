import React from 'React'
import styles from 'styled-components'

const MainDiv = styles.div `
    boxSizing:          border-box;
    height:             6%;
    display:            block;
    textAlign:          left;
`

// Button for title
const ProjectButton = styles.button `
    position:           relative;
    width:              2%;
    height:             100%;
    float:              left;
    border:             none;
    box-shadow:         none;
    background:         rgb(32, 34, 37);
    font-size:          2vmin;
    color:              white;
    line-height:        50px;              // To set span text vertical center
`

// Span contain title
const TitleSpan = styles.span `
    height:             100%;
    fontSize:           3vmin;
    display:            block;
    lineHeight:         50px;
    verticalAlign:      middle;
`

class ContentTitle extends React.Component{
    render(){
        const Styles = {
            // Div contains title
            divTitleContainer:  {
                boxSizing:      'border-box',
                height:         '6%',
                display:        'block',
                textAlign:      'left'
            },
            // Title text block
            spanTitleContainer: {
                height:         '100%',
                fontSize:       '3vmin',
                display:        'block',
                lineHeight:     '50px',
                verticalAlign:  'middle'
            }
        }
        return (
            <MainDiv>
                <ProjectButton 
                    onClick={() => this.props.clickevent()}>
                    {this.props.isVisible === 'none' ? '+' : '-'}
                </ProjectButton>
                <TitleSpan style={Styles.spanTitleContainer}>
                    {this.props.titletext}
                </TitleSpan>
            </MainDiv>
        )
    }
}

export { ContentTitle }