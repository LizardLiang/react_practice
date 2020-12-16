import React from 'react'
import "./info.css"

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
        const Styles = {
            StyleContainer:{
                position:       'relative',
                left:           this.state.left,
                color:          'white',
                fontSize:       '3vmin',
                background:     'rgb(64, 68, 75)',
                height:         'auto',
                overflow:       'auto',
                opacity:        this.state.opacity,
                width:          '75%',
                margin:         '2.5% 12.5%'
            },
            overallTitle:{
                display:        'block',
                textAlign:      'center',
                borderBottom:   '1px solid grey'
            },
            leftElement:{
                float:  'left',
                width:  '50%'

            },
            rightElement:{
                float:  'right',
                width:  '50%'
            }
        }
        return(
            <div    ref={(MainElement)=>{this.MainElement = MainElement}}
                    style={Styles.StyleContainer} id={this.props.id}>
                <span style={Styles.overallTitle}>簡歷</span>
                {/* <ul>
                    <li className="li">偉祺電機 (Famax) 3 years as Software engineer</li>
                </ul> */}
                <div style={Styles.leftElement}>
                    工作經歷:
                    <ul>
                        <li className="li">
                            偉祺電機 2017/11 ~ 現在<br/>
                            擔任軟體工程師
                        </li>
                    </ul>
                </div>
                <div style={Styles.rightElement}>
                    學歷:
                    <ul>
                        <li className="li">
                            元智大學<br/>
                            電機工程學系
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export { Experience }