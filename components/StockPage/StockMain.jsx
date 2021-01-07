import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomeLink = styled(Link) `
    float:          right;
`

const DivContainer = styled.div`
    display:        flex;
    flex-direction: column;
    position:       absolute;
    top:            0;
    left:           0;
    width:          100vw;
    height:         100vh;
    background:     rgb(32, 34, 37);
    box-sizing:     border-box;
    padding-top:    5rem;
    font-size:      2.8rem;
    align-items:    center;
`

const HeaderDiv = styled.div `
    position:       relative;
    display:        flex;
    width:          90%;
    justify-content:center;

    div {
        width:      30%;
    }

    .homebutton {
        position:   absolute;
        right:      0;
        top:        0;
        float:      right;
    }
`


const InputDiv = styled.div `
    display:        flex;
    justify-content:center;
    position:       relative;
    width:          90%;
    height:         auto;
    margin:         0 auto;
    font-size:      1.5rem;

    @media screen and (max-width: 320px){
        height: 10%;
    }

    @media screen and (max-width:   280px){
        font-size: 0.5rem;
    }

    input {
        @media screen and (max-width:   280px){
            width: 70%;
        }
    }
`

const Span = styled.span `
    color:          white;
    display:        block;
    text-align:     center;

    @media screen and (max-width:   768px){
        font-size: 2rem;
    }
`

const Button = styled.button `
    background:     grey;
    color:          white;
    font-size:      1.5rem;

    &:focus {
        outline:    none;
    }

    &:hover {
        background: white;
        color:      black;
    }
    
    @media screen and (max-width:   375px){
        font-size: 1rem;
    }
`

const Svg = styled.svg `
    font-size:          1rem;
    @media screen and (min-width: 1080px){
        width:          50%;
        height:         auto;
        max-height:     440.5px;
        max-width:      521px;
        overflow:       visible;
        margin-bottom:  5%;
        margin-top:     5%;
        margin-left:    auto;
        margin-right:   auto;
        display:        ${props => props.svgDisplay || 
                                    "block"};
    }
    @media screen and (max-width: 1079px){
        width:          50vw;
        height:         50%;
        overflow:       visible;
        margin-bottom:  5%;
        margin-top:     5%;
        margin-left:    auto;
        margin-right:   auto;
        display:        ${props => props.svgDisplay || 
                                    "block"};
    }

    @media screen and (max-width:   375px){
        width: 70%;
    }
`

const Text = styled.text `
    fill:               white;
    font-size:          20%;
`

const GridLine = styled.line `
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
        list.push(<GridLine x1='0' x2='100' y1={i * 25} y2={i * 25}/>)
    }
    return list
}

// add axis y text
function add_y_grid(min, max){
    let list = []
    for(let i=1; i < 5; ++i){
        list.push(
            <Text x='-15' y={100 - i * 25}>
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
                stroke="white"
                stroke-width="1"
                points={this.props.points} />
        )
    }
}

function add_x_text(labels){
    let list = labels.map((value, index)=>{
        if(index % 7 == 0 || index == (labels.length - 1)){
            let xPos = calxPosition(index, labels.length)
            if(index !== (labels.length - 1)){
                xPos -= 15
            }
            return(
                <Text 
                    x={xPos} 
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
                        cy={parseFloat(point[1])} r='1' fill='white'/>
                )
            })
        return (
            <Svg    
                id='stockChart'
                viewBox='0 0 100 100'
                preserveAspectRatio='none'
                svgDisplay={this.props.SvgDisplay}
                style={styled.MainContainer}>
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

export default class StockMain extends Component{
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
            'http://114.32.157.74/PythonFlask/api/v1/?id='
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
                <HeaderDiv>
                    <Span>輸入股票代碼以取得股票資訊</Span>
                </HeaderDiv>
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