import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from 'styled-components'

const { useState } = React

const DivContainer = styles.div`
    position:       relative;
    width:          50%;
    height:         auto;
    min-height:     95vh;
    margin-top:     100vh;
    padding:        0 25%;
    background:     rgb(47, 49, 54);
`

const Span = styles.span `
    color:          white;
    display:        block;
    text-align:     center
`

const Button = styles.button `
    background:     grey;
    color:          white;


    &:hover {
        background: white;
        color:      black;
    }
`

const Svg = styles.svg `
    width:          50%;
    height:         25%;
    overflow:       visible;
    margin-bottom:  10%;
    margin-top:     10%;
    margin-left:    auto;
    margin-right:   auto;
    display:        ${props => props.svgDisplay || 
                                "inline-block"};
`

class ChartLine extends Component{
    render(){
        return (
            <polyline
                fill="none"
                stroke="#0074d9"
                stroke-width="1"
                points={this.props.points} />
        )
    }
}

class SvgChart extends Component    {
    render(){
        return (
            <Svg    id='stockChart'
                    viewBox='0 0 100 100'
                    preserveAspectRatio='none'
                    svgDisplay={this.props.SvgDisplay}
                    style={styles.MainContainer}>
                <g style={{stroke: "grey"}}>
                    <line 
                        x1='0'
                        x2='100'
                        y1='100'
                        y2='100'/>
                </g>
                <g style={{stroke: "grey"}}>
                    <line
                        x1='0'
                        x2='0'
                        y1='0'
                        y2='100'/>
                </g>
                <ChartLine points={this.props.points} />
            </Svg>
        )
    }
}

class StockMain extends Component{
    constructor(props){
        super(props)
        this.state = {
            stockID:        '',
            minNum:         0,
            maxNum:         0,
            x_texts:        [],
            points:         '',
            reverseHeight:  0,
            svgDisplay:     'none'
        }
    }

    calyPosition(num){
        return ((num - this.state.minNum) / (this.state.maxNum - this.state.minNum)) * 100
    }

    calxPosition(num, leng){
        return (num / leng) * 100
    }

    FetchStockInfo = () => {
        let id = this.state.stockID
        if (id == '' || isNaN(id) == true){
            alert('Stock ID must be numbers')
        }
        else{
            let url = 
            'https://cors-anywhere.herokuapp.com/http://114.32.157.74/PythonFlask/api/test?id='
            fetch(url + id)
            .then((response)=>{
                return response.json()
            }).then((item)=>{
                let values = item['value']
                this.setState({x_tests: item['date']})
                let point = ''
                values = values.map((value)=>{
                    return parseFloat(value)
                })
                this.setState({maxNum: Math.max(...values), minNum: Math.min(...values)})
                for (let i=0; i < values.length; i++){
                    let calx = this.calxPosition(i, values.length)
                    point += calx
                    point += ','
                    let calNum = this.calyPosition(values[i])
                    point += (100 - calNum) // 100 - x to fit coordinate
                    point += ' '
                }
                this.setState({points: point, svgDisplay: 'block'})
            }).catch((error)=>{
                this.setState({svgDisplay: 'none'})
                console.log(error)
            })
        }
    }

    handleInputEvent = () => (event) => {
        this.setState({stockID: event.target.value})
    }

    render(){
        const Styles = {
            headerSpanContainer:{
                display:    'block',
                textAlign:  'center',
                color:      'white'
            },
            centerDiv:{
                width:  '50%',
                margin: '2% auto'
            }
        }
        return(
            <DivContainer>
                <Span>輸入股票代碼以取得股票資訊</Span>
                <div style={Styles.centerDiv}>
                    <input 
                        aria-label='input'
                        type='text'
                        name='stockID'
                        value={this.state.stockID}
                        onChange={this.handleInputEvent()}>
                    </input>
                    <Button 
                        onClick={this.FetchStockInfo}>
                            搜尋
                    </Button>
                </div>
                <SvgChart 
                    SvgDisplay={this.state.svgDisplay}
                    points={this.state.points} />
                <Link to='/'>
                    <Button>
                        回首頁
                    </Button>
                </Link>
            </DivContainer>
        )
    }
}

export { StockMain }