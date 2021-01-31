import React    from 'react'
import PropTypes from 'prop-types'

class Buttons extends React.Component{
    constructor (props){
        super(props)
        this.state = {
            height: window.innerHeight,
            width:  window.innerWidth,
        }
    }

    static get propTypes(){
        return {
            item: PropTypes.string,
            name: PropTypes.string
        }
    }

    componentDidMount(){
        this.updateSize();
        window.addEventListener("resize", this.updateSize.bind(this))
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.updateSize.bind(this))
    }

    updateSize(){
        this.setState({height: window.innerHeight, width: window.innerWidth})
        if (this.state.height < this.state.width){
            this.setState({width: '10vh', height: '10vh'})
        }
        else{
            this.setState({width: '10vw', height: '10vw'})
        }
    }

    render(){
        const styled = {
            containerStyle: {
                display:        'block',
                width:          '100%',
                background:     'rgb(32, 34, 37)',
                boxShadow:      'none',
                color:          'white',
                fontSize:       '2vmin' ,
                border:         0,
                borderBottom:   '1px solid grey',
                borderRadius:   '0px',
                textAlign:      'center',
                padding:        '25% 0',
                height:         '25%',
                boxSizing:      'border-box'
            }
        };
        const {containerStyle} = styled
        return (<a style={containerStyle} href={"#" + this.props.item}>{this.props.name}</a>)
    }
}

export {Buttons}