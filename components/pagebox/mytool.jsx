import React, { Component } from 'react'
import './info.css'

class MyTool extends Component{

    render(){
        const Styles = {
            divContainer:{
                textAlign:      'left',
                color:          'white',
                background:     'rgb(64, 68, 75)',
                height:         'auto',
                overflow:       'auto'
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
            <div style={Styles.divContainer} id={this.props.id}>
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
                            開發工具: Git, npm, webpack, flask, wfastcgi
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export { MyTool }