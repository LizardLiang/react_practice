import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// An overall div contain all content
const MainDivCT = styled.div `
    box-sizing:         border-box;
    width:              95%;
    height:             40px;
    display:            block;
    text-align:         left;
    margin:             0 auto;
    @media screen and (max-width:   1079px){
        height:         30px;
    }
`

// Button for title
const ProjectButtonCT = styled.button `
    position:               relative;
    display:                inline-flex;
    width:                  auto;
    height:                 100%;
    float:                  left;
    border:                 none;
    box-shadow:             none;
    background:             rgb(32, 34, 37);
    font-size:              3vmin;
    color:                  white;
    //line-height:            50px;              // To set span text vertical center
    align-items:            center;
    padding:                0;
    vertical-align:         top;

    &:hover {
        cursor:             pointer;
    }

    &:focus {
        outline:            none;
    }
`

// Span contain title
const TitleSpanCT = styled.span `
    display:                inline-flex;
    height:                 100%;
    font-size:              3vmin;
    // line-height:            50px;
    align-items:            center;
    margin-left:            5px;
`

class ContentTitle extends React.Component{
    static get propTypes(){
        return {
            clickevent: PropTypes.func,
            isVisible: PropTypes.string,
            titletext: PropTypes.string
        }
    }

    render(){
        return (
            <MainDivCT>
                <ProjectButtonCT 
                    onClick={() => this.props.clickevent()}>
                    {this.props.isVisible === 'none' ? '+' : '-'}
                </ProjectButtonCT>
                <TitleSpanCT>
                    {this.props.titletext}
                </TitleSpanCT>
            </MainDivCT>
        )
    }
}

export { ContentTitle }