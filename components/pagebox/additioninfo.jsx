import React, { Component } from 'react'

class AdditionInfo extends Component{
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
        if(pos <= 930 && pos >= 785){
            let diff = 1 - (pos - 785) / (930 - 785)
            let offset = (1 - diff) * 100
            this.setState({opacity: diff})
            this.setState({left: offset + '%'})
        }
        else if(pos > 930){
            this.setState({opacity: 0})
            this.setState({left: '100%'})
        }
        else if (pos < 785){
            this.setState({opacity: 1})
            this.setState({left: '0%'})
        }
    }

    render(){
        const Styles = {
            divContainer:{
                background:     'rgb(64, 68, 75)',
                color:          'white',
                fontSize:       '3vmin',
                margin:         '2.5% 0',
                position:       'relative',
                left:           this.state.left,
                opacity:        this.state.opacity,
                overflow:       'hidden'
            },
            titleContainer:{
                display:        'block',
                textAlign:      'center',
                fontSize:       '3vmin',
                borderBottom:   '1px solid grey'
            }
        }
        return(
            <div    ref={(MainElement)=>{this.MainElement = MainElement}}
                    style={Styles.divContainer} id={this.props.id}>
                <span style={Styles.titleContainer}>相關連結</span>
                <div>
                    <ul>
                        <li>
                            <a  href="https://github.com/lizrad?tab=repositories"
                                target='_blank'>
                                Github repositories
                            </a>
                        </li>
                        <li>
                            <a  href="https://github.com/lizrad/react_practice"
                                target='_blank'>
                                本頁原碼
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export { AdditionInfo }