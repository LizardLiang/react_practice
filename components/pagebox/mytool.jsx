import React, { Component } from 'react'
import './info.css'

class MyTool extends Component{
    constructor(props){
        super(props)
        this.state = {
            opacity:    1,
            left:       '0%'
        }
        this.scrollHandler = this.scrollHandler.bind(this)
    }

    componentDidMount(){
        window.addEventListener('scroll', this.scrollHandler)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.scrollHandler)
    }

    scrollHandler(e){
        let rec = this.MainElement.getBoundingClientRect()
        let pos = rec['top']
        let height = rec['height']
        let winHeight = window.innerHeight
        let minW = winHeight - height
        let maxW = winHeight
        if(pos >= minW && pos <= maxW){
            let diff = 1 - ((pos - minW) / (maxW - minW))
            let offset = ( 1 - diff ) * 100
            this.setState({left:     offset + '%'})
            this.setState({opacity:  diff})
        }
        else if (pos < minW){
            this.setState({opacity: 1})
            this.setState({left:     '0%'})
        }
        else if (pos > maxW){
            this.setState({opacity: 0})
            this.setState({left:     '100%'})
        }
    }

    render(){
        const Styles = {
            divContainer:{
                position:       'relative',
                left:           this.state.left,
                textAlign:      'left',
                color:          'white',
                background:     'rgb(64, 68, 75)',
                height:         'auto',
                overflow:       'auto',
                opacity:        this.state.opacity,
                width:          '75%',
                margin:         '2.5% 12.5%'
            },
            titleContainer:{
                display:        'block',
                textAlign:      'center',
                fontSize:       '3vmin',
                borderBottom:   '1px solid grey'
            },
            leftDivContainer:{
                float:          'left',
                width:          '50%',
                fontSize:       '3vmin'
            },
            rightDivContainer:{
                float:          'right',
                width:          '50%'
            }
        }
        return(
            <div    ref={(MainElement)=>{this.MainElement = MainElement}}
                    style={Styles.divContainer} id={this.props.id}>
                <span style={Styles.titleContainer}>
                    常用工具
                </span>
                <div style={Styles.leftDivContainer}>
                    <span>
                        程式語言:
                    </span>
                    <ul>
                        <li className='li'>
                            C語言
                        </li>
                        <li className='li'>
                            Python
                        </li>
                        <li className='li'>
                            HTML/CSS
                        </li>
                        <li className='li'>
                            Javascript、ReactJS
                        </li>
                    </ul>
                </div>
                <div style={Styles.rightDivContainer}>
                    <ul>
                        <li className='li'>
                            編輯器: VsCode
                        </li>
                        <li className='li'>
                            開發工具: Git, npm, webpack, flask
                        </li>
                        <li className='li'>
                            多益: 845分
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export { MyTool }