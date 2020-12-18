import React from 'React'
import styles from 'styled-components'

// An overall div contain all content
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
    font-size:          3vmin;
    display:            block;
    line-height:        50px;
    vertical-align:     middle;
`

class ContentTitle extends React.Component{
    render(){
        return (
            <MainDiv>
                <ProjectButton 
                    onClick={() => this.props.clickevent()}>
                    {this.props.isVisible === 'none' ? '+' : '-'}
                </ProjectButton>
                <TitleSpan>
                    {this.props.titletext}
                </TitleSpan>
            </MainDiv>
        )
    }
}

export { ContentTitle }