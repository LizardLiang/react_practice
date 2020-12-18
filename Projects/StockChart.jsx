import React, { Component } from 'react'
import styles from 'styled-components'
import { Link } from 'react-router-dom'
import './project.css'

const MainDiv = styles.div  `
    display:        ${props => props.isVisible || 'none'};
`

const MainSpan = styles.span `
    font-size:       2vmin;
    color:          white;
    display:        block;
    width:          60%;
    margin:         auto;
    text-align:     left;
`

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
            <MainDiv
                className={this.props.isVisible == 'block'? 'projectAnim' : ''}
                isVisible={this.props.isVisible}>
                <MainSpan>
                    此專案用於測試我自己架設的Python web API是否正常運作<br/>
                    在輸入框輸入股票代號後，會回傳相關最近一個月的資料
                    <Link
                        to='/StockSearch'
                        style={Styles.linkContainer}>
                            Click here to go to Search page
                    </Link>
                </MainSpan>
                <br/>
                
            </MainDiv>
        )
    }
}

export { StockChart }