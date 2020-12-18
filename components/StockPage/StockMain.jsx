import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from 'styled-components'

const HomeLink = styles(Link) `
    float:          right;
`

const DivContainer = styles.div`
    position:       absolute;
    top:            0;
    left:           0;
    width:          100vw;
    height:         100vh;
    background:     rgb(32, 34, 37);
`

const InputDiv = styles.div `
    position:       relative;
    width:          868px;
    height:         auto;
    margin:         0 auto;
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
    @media screen and (min-width: 1080px){
        width:          50%;
        height:         auto;
        overflow:       visible;
        margin-bottom:  10%;
        margin-top:     10%;
        margin-left:    auto;
        margin-right:   auto;
        display:        ${props => props.svgDisplay || 
                                    "block"};
    }
    @media screen and (max-width: 600px){
        width:          50vw;
        height:         25vh;
        overflow:       visible;
        margin-bottom:  10%;
        margin-top:     10%;
        margin-left:    auto;
        margin-right:   auto;
        display:        ${props => props.svgDisplay || 
                                    "block"};
    }
`

const Text = styles.text `
    fill:               white;
    font-size:          20%;
`

const GridLine = styles.line `
    stroke:             grey;
    stroke-opacity:     .5;
`

// calculate axis x text position
function calxPosition(num, leng){
    return (num / leng) * 100
};


// add lines to grid
function add_y_line(){
    let list=[]
    for (let i=0; i < 4; ++i){
        <GridLine x1='0' x2='100' y1={i * 25} y2={i * 25}/>
    }
}

// add axis y text
function add_y_grid(min, max){
    let list = []
    for(let i=1; i < 5; ++i){
        list.push(
            <Text x='-5' y={100 - i * 25}>
                {(max - min) / 4 * i + min}
            </Text>
        )
    }
    return (
        list
    )
}

// dealing with line and data
class ChartLine extends Component{
    render(){
        return (
            <polyline
                fill="none"
                stroke="green"
                stroke-width="1"
                points={this.props.points} />
        )
    }
}

function add_x_text(labels){
    let list = labels.map((value, index)=>{
        if(index % 7 == 0 || index == (labels.length - 1)){
            return(
                <Text 
                    x={calxPosition(index, labels.length) - 10} 
                    y='105'>
                    {value}
                </Text>
            )
        }
    })
    return list
}

// dealing with svg
class SvgChart extends Component    {
    render(){
        let pointList = this.props.points.split(' ')
        pointList = pointList.slice(0, -1)
        const datacircle = 
            pointList.map((value, index)=>{
                const point = value.split(',')
                return(
                    <circle cx={calxPosition(index, pointList.length)}
                        cy={parseFloat(point[1])} r='1' fill='green'/>
                )
            })
        return (
            <Svg    
                id='stockChart'
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
                {add_y_line()}
                {add_y_grid(this.props.min, this.props.max)}
                {add_x_text(this.props.xlabel)}
                {datacircle}
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

    FetchStockInfo = () => {
        let id = this.state.stockID
        if (id == '' || isNaN(id) == true){
            alert('Stock ID must be numbers')
        }
        else{
            let url = 
            'http://114.32.157.74/PythonFlask/api/test?id='
            fetch(url + id)
            .then((response)=>{
                return response.json()
            }).then((item)=>{
                let values = item['value']
                this.setState({x_texts: item['date']})
                let point = ''
                values = values.map((value)=>{
                    return parseFloat(value)
                })
                this.setState({maxNum: Math.max(...values), minNum: Math.min(...values)})
                for (let i=0; i < values.length; i++){
                    let calx = calxPosition(i, values.length)
                    point += calx
                    point += ','
                    let calNum = this.calyPosition(values[i])
                    point += (100 - calNum) // 100 - x to fit coordinate
                    point += ' '
                }
                this.setState({points: point, svgDisplay: 'block'})
            }).catch((error)=>{
                this.setState({svgDisplay: 'none'})
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
                <HomeLink to='/'>
                    <Button>
                        回首頁
                    </Button>
                </HomeLink>
                <InputDiv>
                    <input 
                        aria-label='input'
                        type='text'
                        name='stockID'
                        value={this.state.stockID}
                        onChange={this.handleInputEvent()}>
                    </input>
                    <Button 
                        onClick={this.FetchStockInfo}
                        arial-label='searchButton'>
                            搜尋
                    </Button>
                </InputDiv>
                <SvgChart 
                    max={this.state.maxNum}
                    min={this.state.minNum}
                    SvgDisplay={this.state.svgDisplay}
                    points={this.state.points}
                    xlabel={this.state.x_texts}/>
                
            </DivContainer>
        )
    }
}

export { StockMain }