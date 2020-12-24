import React, { Component } from 'react'
import {Provider, connect} from 'react-redux'
import styles from 'styled-components'
import {store, addDate, defaultDate, deleteDate} from './index.js'
import { Link } from 'react-router-dom'
import { Main } from '../Main'

const EditDiv = styles.div `
    width:          70%;
    height:         auto;
    display:        ${props => props.display || 'flex'};
    flex-direction: column;
    align-items:    center;

    @media screen and (max-width:   767px){
        font-size:      1.5rem;
    }

    &:hover {
        box-shadow: 0 0 20px rgba(0,0,0,0.5)
    }
`

const EditInput = styles.input `
    font-size:      2rem;
    width:          100%;
    background:     rgb(47, 49, 54);
    border:         1px solid rgba(255,255,255,0.5);
    border-radius:  9px;
    margin:         0 1rem;
    color:          white;
    
    &:hover {
        box-shadow: inset 0 0 10px white;
    }

    @media screen and (max-width:   767px) and (min-width:  375px){
        font-size:  1rem;
    }

    @media screen and (max-width:   374px){
        font-size:  0.7rem;
    }
`

const EditSecDiv = styles.div `
    display:        flex;
    width:          100%;
    margin:         1rem 0;
`

const EditButSecDiv = styles.div `
    display:            flex;
    justify-content:    flex-end;
    width:              100%;
    margin:             1rem 0;
`

const EditButton = styles.button `
    margin:             0 1rem;
    font-size:          2rem;
    background:         rgb(47,49,54);
    border:             1px solid rgba(255,255,255,0.3);
    border-radius:      9px;
    color:              white;

    @media screen and (max-width:   375px){
        font-size:      1rem;
        margin:         0 0.2rem;
    }
`

class EditPage extends Component {
    gatherDateInfo = () => {
        let msg = {
            title: document.getElementById('title').value,
            year: document.getElementById('y').value,
            month: document.getElementById('m').value,
            day: document.getElementById('d').value,
            hour: document.getElementById('hr').value,
            minute: document.getElementById('min').value,
            second: document.getElementById('sec').value
        }

        this.props.sendDate(msg)
    }
    render(){
        return (
            <EditDiv display={this.props.display}>
                Add your own timer
                <EditSecDiv>
                    <EditInput id='title' placeholder='Title'/>
                </EditSecDiv>
                <EditSecDiv>
                    <EditInput id='y' placeholder='year'/>
                    <EditInput id='m' placeholder='month'/>
                    <EditInput id='d' placeholder='day'/>
                </EditSecDiv>
                <EditSecDiv>
                    <EditInput id='hr' placeholder='hour'/>
                    <EditInput id='min' placeholder='minute'/>
                    <EditInput id='sec' placeholder='second'/>
                </EditSecDiv>
                <EditButSecDiv>
                    <EditButton onClick={this.gatherDateInfo}>
                        Save
                    </EditButton>
                    <EditButton onClick={() => {this.props.setDis('none')}}>
                        Cancel
                    </EditButton>
                </EditButSecDiv>
            </EditDiv> 
        )
    }
}

const TimeDiv = styles.div `
    display:        flex;
    font-size:      2rem;
    text-align:     center;

    div {
        margin:         0 2rem;
    }

    p {
        font-weight:    bold;
        font-size:      5rem;
    }

    @media screen and (max-width: 800px) and (min-width:    426px){
        div {
            font-size:  2rem;
            margin:     0 2rem;
        }
        p {
            font-size:  3rem;
        }
    }

    @media screen and (max-width:   425px){
        div{
            font-size:  1rem;
            margin:     0 0.9rem;
        }

        p {
            font-size:  2rem;
        }
    }
`

const TimerBlockDiv = styles.div `
    display:            flex;
    align-items:        center;
    justify-content:    center;
    flex-direction:     column;
    margin-bottom:      2rem;
    border-radius:      20px;
    width:              90%;

    &:hover {
        box-shadow:     0 0 20px black;
    }
`

const SettingButton = styles.button `
    display:            flex;
    justify-content:    center;
    align-items:        center;
    background:         grey;
    opacity:            0.3;
    
    &:hover {
        opacity:        0.7;
    }
`

const HeaderDiv = styles.div `
    display:        flex;
    width:          100%;
    justify-content:space-between;
    align-items:    center;
`

const HeaderButton = styles.button `
    font-size:      3rem;
    background:     none;
    color:          white;
    opacity:        0.3;

    @media screen and (max-width:   425px){
        font-size:  2rem;
    }
    
    &:hover, &:active {
        opacity:    0.9;
    }
`

class TimerBlock extends Component {
    constructor(props){
        super(props)
    }

    ToDays = () => {
        let days = Math.floor(((this.props.targetDate - this.props.passTime) / (3600000 * 24)))
        return days < 10 ? '0' + days : days
    }

    ToHour = () => {
        let hours = Math.floor(
            ((this.props.targetDate - this.props.passTime) % (3600000 * 24)) / (3600000)
        )
        return hours < 10 ? '0' + hours : hours
    }

    ToMin = () => {
        let mins = Math.floor(
            ((this.props.targetDate - this.props.passTime) % (3600000)) / 60000
        )
        return mins < 10 ? '0' + mins : mins
    }

    ToSec = () => {
        let secs = Math.floor(
            ((this.props.targetDate - this.props.passTime) % (60000)) / 1000
        )
        return secs < 10 ? '0' + secs : secs
    }

    render(){
        return (
            <TimerBlockDiv>
                <HeaderDiv>
                    <div/>
                    <div>
                        {this.props.title}
                    </div>
                    <div>
                        <HeaderButton>...</HeaderButton>
                        <HeaderButton onClick={() => {this.props.delTimer(this.props.title)}}>
                            x
                        </HeaderButton>
                    </div>
                </HeaderDiv>
                <TimeDiv>
                    <div>
                        <p>{this.ToDays()}</p>
                        days
                    </div>
                    <div>
                        <p>{this.ToHour()}</p>
                        hours
                    </div>
                    <div>
                        <p>{this.ToMin()}</p>
                        minutes
                    </div>
                    <div>
                        <p>{this.ToSec()}</p>
                        seconds
                    </div>
                </TimeDiv>
            </TimerBlockDiv>
        )
    }
}

const MainDiv = styles.div `
    * {
        box-sizing:     border-box;
    }
    padding-top:        4rem;
    min-width:          320px;
    width:              100vw;
    min-height:         100vh;
    height:             auto;
    color:              white;
    display:            flex;
    justify-content:    center;
    align-items:        center;
    flex-direction:     column;
    font-size:          3rem;
    font-family:        "Poppins", sans-serif;
    @media screen and (max-width:   800px){
        padding-top:    0;
        font-size:      2.5rem;
    }
`


const PlusButton = styles.button `
    font-size:          5rem;
    border-radius:      50%;
    width:              5.5rem;
    height:             5.5rem;
    margin:             2rem;
    display:            flex;
    justify-content:    center;
    align-items:        center;

    @media screen and (max-width:   768px){
        width:      2.5rem;
        height:     2.5rem;
        font-size:  2rem;
    }

    &:hover {
        box-shadow: 0 0 20px rgba(255,255,255, 0.5)
    }
`


class CountDown extends Component {
    constructor(props){
        super(props)
        this.state = {
            passTime:   0,
            editDis:    'none'
        }

        this.newYear = new Date("1 Jan 2021")
        this.timerID = 0
    }

    FetchOld = async () => {
        fetch('http://114.32.157.74/PythonFlask/api/v1/', {
            method: 'POST',
            headers:    {
                'content-type': 'application/json'
            },
            body:   JSON.stringify({
                method: 'get-timer'
            })
        }).then((res)=>{
            return res.json()
        }).then((items)=>{
            items['timers'].map((item)=>{
                this.SendDateToStore(item, false)
            })
        }).catch((err)=>{
            console.log(err)
        })
    }

    countdown = () => {
        let nowDate = new Date();
        this.setState({passTime:    nowDate})
    }

    SetEditDisplay = (dis) => {
        this.setState({editDis: dis})
    }

    SendDateToStore = (obj, isNew = true) => {
        if(isNew){
            fetch('http://114.32.157.74/PythonFlask/api/v1/', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body:   JSON.stringify({
                    method: 'insert-timer',
                    title:  obj.title,
                    year:   parseInt(obj.year),
                    month:  parseInt(obj.month),
                    day:    parseInt(obj.day),
                    hour:   parseInt(obj.hour),
                    minute: parseInt(obj.minute),
                    second: parseInt(obj.second),
                })
            })   
        }
        
        this.props.addDate(obj)
        this.setState({editDis: 'none'})
    }

    deleteTimerAPI = (title) => {
        fetch('http://114.32.157.74/PythonFlask/api/v1/',{
            method: 'POST',
            headers:    {
                'content-type': 'application/json'
            },
            body:   JSON.stringify({
                method:   'del-timer',
                title:  title
            })
        }).catch((e)=>{
            console.log(e)
        })
    }

    deleteTimer = (title) => {
        this.deleteTimerAPI(title)
        this.props.deleteDate(title)
    }

    componentDidMount(){
        this.timerID = setInterval(this.countdown, 1000)
        if(this.props.data.length <= 0){
            this.FetchOld().then(()=>{
                if(this.props.data.length <= 0){
                    console.log(defaultDate)
                    this.props.addDate(defaultDate)
                }
            })
        }
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    render(){
        let Timers = this.props.data.map((value, index) => {
            // ignore default date when user add there own
            let date = new Date(
                value.year, 
                value.month - 1, 
                value.day, 
                value.hour, 
                value.minute, 
                value.second)
            
            return (
                <TimerBlock
                    title={value.title}
                    targetDate={date}
                    passTime={this.state.passTime}
                    delTimer={this.deleteTimer}/>
            )
        })
        return (
            <MainDiv>
                {Timers}
                <EditPage 
                    display={this.state.editDis}
                    setDis={this.SetEditDisplay}
                    sendDate={this.SendDateToStore}/>
                <PlusButton onClick={() => {this.setState({editDis: 'flex'})}}>
                    +
                </PlusButton>
            </MainDiv>
        )
    }
}

const mapStateToProps = state => {
    return {data: state.dates}
}

const mapDispatchToProps = dispatch => {
    return {
        addDate: article => dispatch(addDate(article)),
        deleteDate: article => dispatch(deleteDate(article))
    }
}

const ConnCountDown = connect(mapStateToProps, mapDispatchToProps)(CountDown)

class MapCountDown extends Component {
    render(){
        return (
            <Provider store={store}>
                <ConnCountDown/>
            </Provider>
        )
    }
}

export { MapCountDown }