import React, { Component } from 'react'

class AdditionInfo extends Component{

    render(){
        const Styles = {
            divContainer:{
                background:     'rgb(64, 68, 75)',
                color:          'white',
            },
            titleContainer:{
                display:        'block',
                textAlign:      'center',
                fontSize:       '3vmin',
                borderBottom:   '1px solid grey'
            }
        }
        return(
            <div style={Styles.divContainer} id={this.props.id}>
                <span style={Styles.titleContainer}>相關連結</span>
                <div>
                    <ul>
                        <li className='li'>
                            <a  href="https://github.com/lizrad?tab=repositories"
                                target='_blank'>
                                Github repositories
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export { AdditionInfo }