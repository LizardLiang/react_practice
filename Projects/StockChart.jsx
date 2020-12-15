import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './project.css'

class ChartLine extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <polyline   fill="none"
                        stroke="#0074d9"
                        stroke-width="1"
                        points={this.props.points}/>
        )
    }
}

class StockChart extends Component{
    constructor(props){
        super(props)
        this.state = {
            points:         '',
            reverseHeight:  0,
            x_texts: [],
            svgDisplay:     'none',
            maxNum:         0,
            minNum:         0
        }
        this.props.maxNum = 0
        this.props.minNum = 0

        // use arrow function to replace binding
        // this.FetchStockInfo = this.FetchStockInfo.bind(this)
    }

    calyPosition(num){
        return ((num - this.state.minNum) / (this.state.maxNum - this.state.minNum)) * 100
    }

    calxPosition(num, leng){
        return (num / leng) * 100
    }

    FetchStockInfo = () => {
        let id = this.inputElement.value
        let url = 'https://cors-anywhere.herokuapp.com/http://114.32.157.74/PythonFlask/api/test?id='
        fetch(url + id)
        .then((response)=>{
            return response.json()
        }).then((item)=>{
            let values = item['value']
            this.setState({x_texts: item['date']})
            console.log(this.state.x_texts)
            let point = ''
            values = values.map((value)=> {return parseFloat(value)})
            this.setState({maxNum: Math.max(...values), minNum: Math.min(...values)})
            for (let i=0; i < values.length; i++){
                let calx = this.calxPosition(i, values.length)
                point += calx
                point += ','
                let calNum = this.calyPosition(values[i])
                point += (100 - calNum)
                point += ' '
            }
            this.setState({points: point, svgDisplay: 'inline'})
        }).catch((error)=>{
            this.setState({svgDisplay: 'none'})
            alert('Stock id not exist')
        })
    }


    render(){
        const Styles = {
            divContainer:{
                display: this.props.isVisible
            },
            svgContainer:{
                width:  '50%',
                height: '25%',
                overflow:   'visible',
                marginBottom:   '10%',
                marginTop:      '10%',
                display:        this.state.svgDisplay
            },
            gridContainer:{
                stroke: 'grey'
            },
            textContainer:{
                fontSize:   '0.5vmin',
                fill:      'white'
            },
            spanContainer:{
                fontSize:   '2vmin',
                color:      'white',
                display:    'block',
                width:      '60%',
                margin:     'auto',
                textAlign:  'left'
            },
            linkContainer:{
                fontSize:   '2vmin'
            }
        }

        // label on x axis
        const x_label = 
            this.state.x_texts.map((date, index)=>{
                if (index % 7 == 0 || index == (this.state.x_texts.length - 1)){
                    return(
                        <text   x={this.calxPosition(index, this.state.x_texts.length) - 10} y='110'
                                style={Styles.textContainer}>
                            {date}
                        </text>
                    )
                }
            })
        return(
            <div    className={this.props.isVisible == 'block'? 'projectAnim' : ''}
                    style={Styles.divContainer}>
                <span style={Styles.spanContainer}>
                    此專案用於測試我自己架設的Python web API是否正常運作
                    在輸入框輸入 股票代號後 會回傳相關最近一個月的資料
                </span>
                <br/>
                {/* <input  name='IdInput' 
                        ref={(inputElement) => {this.inputElement = inputElement}}>
                </input>
                <button onClick={this.FetchStockInfo}>Fetch!!</button>
                <br/>
                <svg    id='stockChart' style={Styles.svgContainer}
                        ref={ (svgElement) => { this.svgElement = svgElement } }
                        viewBox='0 0 100 100'
                        preserveAspectRatio='none'>
                    <ChartLine  points={this.state.points} />
                    <g id='x-grid' style={Styles.gridContainer}>
                        <line x1='0' x2='100' y1='100' y2='100'></line>
                    </g>
                    <g id='y-grid' style={Styles.gridContainer}>
                        <line x1='0' x2='0' y1='0' y2='100'></line>
                    </g>
                    <g>
                        {x_label}
                    </g>
                    <g>
                        <text style={Styles.textContainer} x='-15' y='100'>
                            {this.state.minNum}
                        </text>
                        <text style={Styles.textContainer} x='-15' y='0'>
                            {this.state.maxNum}
                        </text>
                    </g>
                </svg> */}
                <Link
                    to='/StockSearch'
                    style={Styles.linkContainer}>
                        Click here to go to Search page
                </Link>
            </div>
        )
    }
}

export { StockChart }