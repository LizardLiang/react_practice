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
        let height = rec['height']
        let winHeight = window.innerHeight
        let minW = winHeight - height
        let maxW = winHeight
        console.log(winHeight, pos, minW, maxW)
        if(pos <= maxW && pos >= minW){
            let diff = 1 - (pos - minW) / (maxW - minW)
            let offset = (1 - diff) * 100
            this.setState({opacity: diff})
            this.setState({left: offset + '%'})
        }
        else if(pos > maxW){
            this.setState({opacity: 0})
            this.setState({left: '100%'})
        }
        else if (pos < minW){
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
                width:          '75%',
                margin:         '2.5% 12.5%',
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