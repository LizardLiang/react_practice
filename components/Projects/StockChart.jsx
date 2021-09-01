import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import './project.css'

const MainDiv = styled.div  `
    display:        ${props => props.isVisible || 'none'};
`

const MainSpan = styled.span `
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

    static get propTypes(){
        return {
            maxNum: PropTypes.number,
            minNum: PropTypes.number,
            isVisible: PropTypes.string
        }
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
        }).catch(()=>{
            this.setState({svgDisplay: 'none'})
            alert('Stock id not exist')
        })
    }

    render(){
        return(
            <MainDiv
                className={this.props.isVisible == 'block'? 'projectAnim' : ''}
                isVisible={this.props.isVisible}>
                <MainSpan>
                    此專案用於測試我自己架設的Python web API是否正常運作<br/>
                    在輸入框輸入股票代號後，會回傳相關最近一個月的資料<br/>
                    <Link to='/StockSearch'>
                            Click here to go to Search page
                    </Link>
                </MainSpan>
                <br/>
            </MainDiv>
        )
    }
}

export { StockChart }