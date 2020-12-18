import React from 'react'
import styles from 'styled-components'
import "./info.css"

const MainDiv = styles.div `
    position:       relative;
    left:           ${props => props.left || 0};
    color:          white;
    font-size:      3vmin;
    height:         auto;
    overflow:       auto;
    opacity:        ${props => props.opacity || 1};
    width:          868px;
    margin:         2.5% auto;
`

const TitleDiv = styles.div `
    display:        block;
    position:       relative;
    width:          95%;
    height:         auto;
    margin:         0 auto 5px auto;
    z-index:        1;
    &:before {
        content:    '';
        position:   absolute;
        top:        0;
        left:       0;
        width:      100%;
        height:     100%;
        background: grey;
        z-index:    -1;
        transform:  skew(-30deg);
    }
`

const SpanTitle = styles.span `
    display:        block;
    text-align:     center;
    // border-bottom:  1px solid grey;
`

const ContentDiv = styles.div `
    width:          95%;
    margin:         0 auto;
`

const LeftDiv = styles.div `
    float:          left;
    width:          50%;
`

const RightDiv = styles.div `
    float:          right;
    width:          50%;
`

class Experience extends React.Component    {
    constructor(props){
        super(props)
        this.state = {
            opacity: 1,
            left:    '0%'
        }
        // this.scrollHandler = this.scrollHandler.bind(this)
    }

    componentDidMount(){
        window.addEventListener('scroll', this.scrollHandler)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.scrollHandler)
    }

    scrollHandler = () => {
        let rec = this.MainElement.getBoundingClientRect()
        let pos = rec['top']
        let height = rec['height']
        let winHeight = window.innerHeight
        let minW = winHeight - height
        let maxW = winHeight
        if(pos >= minW && pos <= maxW){
            let diff = 1 - ((pos - minW) / (maxW - minW))
            let offset = (1 - diff) * 100
            this.setState({left:    offset + '%'})
            this.setState({opacity:  diff})
        }
        else if (pos < minW){
            this.setState({left:    '0%'})
            this.setState({opacity: 1})
        }
        else if (pos > maxW){
            this.setState({left:    '100%'})
            this.setState({opacity: 0})
        }
    }

    render(){
        return(
            <MainDiv    
                left={this.state.left} opacity={this.state.opacity}
                ref={(MainElement)=>{this.MainElement = MainElement}}
                id={this.props.id}>
                <TitleDiv>
                    <SpanTitle>簡歷</SpanTitle>
                </TitleDiv>
                {/* <ul>
                    <li className="li">偉祺電機 (Famax) 3 years as Software engineer</li>
                </ul> */}
                <ContentDiv>
                    <LeftDiv>
                        工作經歷:
                        <ul>
                            <li className="li">
                                偉祺電機 2017/11 ~ 現在<br/>
                                擔任軟體工程師
                            </li>
                        </ul>
                    </LeftDiv>
                    <RightDiv>
                        學歷:
                        <ul>
                            <li className="li">
                                元智大學<br/>
                                電機工程學系
                            </li>
                        </ul>
                    </RightDiv>
                </ContentDiv>
            </MainDiv>
        )
    }
}

export { Experience }