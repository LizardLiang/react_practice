import React, { Component } from 'react'

class AdditionInfo extends Component{
    constructor(props){
        super(props)
        this.state = {
            opacity:    1
        }
        this.scrollHandler = this.scrollHandler.bind(this)
    }

    componentDidMount(){
        window.addEventListener('scroll', this.scrollHandler)
    }

    scrollHandler(e){
        let pos = window.pageYOffset
        if(pos > 930 && pos < 1010){
            let diff = (pos - 930) / (1010 - 930)
            this.setState({opacity: diff})
        }
    }

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