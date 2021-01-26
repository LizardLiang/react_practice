import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import styled from 'styled-components'
import {AccountContext} from '../../app.jsx'
import { store, addDate, defaultDate, deleteDate, setUser, clearTimer} from './index.js'

const EditDiv = styled.div`
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

const EditInput = styled.input`
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

const EditSecDiv = styled.div`
    display:        flex;
    width:          100%;
    margin:         1rem 0;

    #title {
        width:      80%;
    }
`

const EditButSecDiv = styled.div`
    display:            flex;
    justify-content:    flex-end;
    width:              100%;
    margin:             1rem 0;
`

const EditButton = styled.button`
    margin:             0 1rem;
    font-size:          2rem;
    background:         rgb(47,49,54);
    border:             1px solid rgba(255,255,255,0.3);
    border-radius:      9px;
    color:              white;

    @media screen and (max-width:   414px){
        font-size:      1rem;
        margin:         0 0.2rem;
    }
`

const OptionDiv = styled.div`
    display:            flex;
    align-items:        center;
    justify-content:    center;
    width:              15%;

    @media screen and (max-width:  768px){
        width:          25%;
    }

    @media screen and (max-width:   540px){
        width:          36%;
    }

    @media screen and (max-width:   375px){
        width:          27%;
    }
`

const OptionInput = styled.input`
    margin:             5px;
    width:              31.719px;
    height:             31.719px;

    @media screen and (max-width:   425px){
        width:          15px;
        height:         15px;
    }
`

const OptionLabel = styled.label`
    font-size:          2rem;
    margin-bottom:      0;

    @media screen and (max-width:   425px){
        font-size:      1rem;
    }
`

class EditPage extends Component {
    gatherDateInfo = () => {
        let isAnnually = document.getElementById('IsAnnually').checked
        let msg = {
            title: document.getElementById('title').value,
            year: document.getElementById('y').value,
            month: document.getElementById('m').value,
            day: document.getElementById('d').value,
            hour: document.getElementById('hr').value,
            minute: document.getElementById('min').value,
            second: document.getElementById('sec').value,
            isAnnual: isAnnually
        }

        for (let key in msg) {
            // To check if message is valid
            if (key == 'isAnnual') {
                if (isAnnually == null) {
                    alert('checkbox error')
                    return
                }
            }
            else {
                // Use isNaN to check the input is number or not
                if (key == 'year' && msg['isAnnual'] == false) {
                    if (isNaN(msg[key]) || msg[key] == "") {
                        alert('未指定年分')
                        return
                    }
                }
                else if (key == 'month') {
                    if (msg[key] > 12 || msg[key] < 1) {
                        alert('指定月份錯誤')
                        return
                    }
                }
                else if (key == 'day') {
                    // First need to know how many days in corresponding month
                    let lastDay = new Date(msg.year, msg.month, 0).toString().split(' ')[2]
                    if (msg[key] < 1 || msg[key] > lastDay) {
                        alert('指定日期錯誤')
                        return
                    }
                }
                else if (key == 'hour') {
                    if (msg[key] < 0 || msg[key] >= 24) {
                        alert('指定小時數錯誤');
                        return
                    }
                }
                else if (key == 'minute') {
                    if (msg[key] < 0 || msg[key] >= 60) {
                        alert('指定分鐘數錯誤')
                        return
                    }
                }
                else if (key == 'second') {
                    if (msg[key] < 0 || msg[key] >= 60) {
                        alert('指定秒數錯誤')
                        return
                    }
                }
                else if (key == 'title') {
                    if (msg[key] == null) {
                        alert('未輸入標題')
                        return
                    }
                }
            }
        }

        this.props.sendDate(msg)
    }
    render() {
        return (
            <EditDiv display={this.props.display} className="EditDiv">
                輸入你自己的計時器
                <EditSecDiv>
                    <EditInput id='title' className="title" placeholder='Title' />
                    <OptionDiv>
                        <OptionInput type="checkbox" id="IsAnnually" />
                        <OptionLabel>每年</OptionLabel>
                    </OptionDiv>
                </EditSecDiv>
                <EditSecDiv>
                    <EditInput id='y' placeholder='year' />
                    <EditInput id='m' placeholder='month' />
                    <EditInput id='d' placeholder='day' />
                </EditSecDiv>
                <EditSecDiv>
                    <EditInput id='hr' placeholder='hour' />
                    <EditInput id='min' placeholder='minute' />
                    <EditInput id='sec' placeholder='second' />
                </EditSecDiv>
                <EditButSecDiv>
                    <EditButton onClick={this.gatherDateInfo}>
                        Save
                    </EditButton>
                    <EditButton onClick={() => { this.props.setDis('none') }}>
                        Cancel
                    </EditButton>
                </EditButSecDiv>
            </EditDiv>
        )
    }
}

const TimeDiv = styled.div`
    display:        flex;
    font-size:      2rem;
    text-align:     center;

    div {
        margin:         0 2rem;

        @media screen and (max-width:   540px){
            margin:     0 1rem;
        }
    }

    p {
        font-weight:    bold;
        font-size:      5rem;
    }

    @media screen and (max-width: 800px){
        div {
            font-size:  2rem;
            margin:     0 2rem;
        }
        p {
            font-size:  3rem;
        }
    }

    @media screen and (max-width:   540px){
        div {
            font-size:  1rem;
            margin:     0 1rem;
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

    @media screen and (max-width:   280px){
        div {
            margin:         0px 0.3rem;
        }
    }
`

const TimerBlockDiv = styled.div`
    display:            flex;
    align-items:        center;
    justify-content:    center;
    flex-direction:     column;
    margin-bottom:      2rem;
    border-radius:      20px;
    width:              70%;

    &:hover {
        box-shadow:     0 0 20px black;
    }
`

const HeaderDiv = styled.div`
    display:            flex;
    width:              100%;
    justify-content:    space-between;
    align-items:        center;

    .lastButton {
        justify-content:    flex-end;
    }

    .blockTitle {
        justify-content:    center;
        text-align:         center;

        @media screen and (max-width:   280px){
            font-size:      2rem;
        }
    }
`

const HeaderButton = styled.button`
    font-size:          3rem;
    background:         none;
    color:              #B6B8C1;
    text-align:         right;

    @media screen and (max-width:   425px){
        font-size:  2rem;
    }
    
    &:hover, &:active {
        color:      white;
    }

    &:focus {
        outline:    none;
        div {
            display:    flex;
        }
    }
`
// Cuz using justify-content with space-between need to have same width to 
// center middle element
const TimerTitleSep = styled.div`
    width:  25%;
    display:    flex;
`

let SecOfDay = (3600000 * 24)
let SecOfHour = 3600000
let SecOfMin = 60000
class TimerBlock extends Component {
    constructor(props) {
        super(props)
    }

    ToDays = () => {
        // count days left
        let days = Math.floor(((this.props.targetDate - this.props.passTime) / SecOfDay))
        return days < 10 ? '0' + days : days
    }

    ToHour = () => {
        // Count hours left
        let hours = Math.floor(
            ((this.props.targetDate - this.props.passTime) % SecOfDay) / SecOfHour
        )
        return hours < 10 ? '0' + hours : hours
    }

    ToMin = () => {
        // Count minutes left
        let mins = Math.floor(
            ((this.props.targetDate - this.props.passTime) % SecOfHour) / SecOfMin
        )
        return mins < 10 ? '0' + mins : mins
    }

    ToSec = () => {
        // Count seconds left
        let secs = Math.floor(
            ((this.props.targetDate - this.props.passTime) % SecOfMin) / 1000
        )
        return secs < 10 ? '0' + secs : secs
    }

    render() {
        return (
            <TimerBlockDiv>
                <HeaderDiv>
                    <TimerTitleSep />
                    <TimerTitleSep className="blockTitle">
                        {this.props.title}
                    </TimerTitleSep>
                    <TimerTitleSep className='lastButton'>
                        {/* <HeaderButton>
                            ...
                            <HeaderDropDown>
                                123
                            </HeaderDropDown>
                        </HeaderButton> */}
                        <HeaderButton onClick={() => { this.props.delTimer(this.props.title) }}>
                            x
                        </HeaderButton>
                    </TimerTitleSep>
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

const MainDiv = styled.div`
    * {
        box-sizing:     border-box;
    }
    padding-top:        5rem;
    width:              100vw;
    min-height:         calc(100vh - 24px);
    height:             auto;
    color:              white;
    display:            flex;
    justify-content:    center;
    align-items:        center;
    flex-direction:     column;
    font-size:          3rem;
    font-family:        "Poppins", sans-serif;
    @media screen and (max-width:   800px){
        font-size:      2.5rem;
    }
`


const PlusButton = styled.button`
    font-size:          5rem;
    border-radius:      50%;
    width:              5.5rem;
    height:             5.5rem;
    margin:             2rem;
    display:            flex;
    justify-content:    center;
    align-items:        center;
    background:         white;
    -webkit-appearance: none;
    appearance:         none;

    @media screen and (max-width:   768px){
        width:      40px;
        height:     40px;
        font-size:  1.5rem;
    }

    &:hover {
        box-shadow: 0 0 20px rgba(255,255,255, 0.5)
    }

    &:focus {
        outline:    none;
    }
`


class CountDown extends Component {
    static contextType = AccountContext

    constructor(props) {
        super(props)
        this.state = {
            passTime: 0,
            editDis: 'none'
        }

        this.newYear = new Date("1 Jan 2021")
        this.timerID = 0
    }

    FetchOld = async (name) => {
        // Fetch old data in database
        fetch('http://114.32.157.74/PythonFlask/api/v1/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                method: 'get-timer',
                name: name
            })
        }).then((res) => {
            return res.json()
        }).then((items) => {
            items['timers'].map((item) => {
                this.SendDateToStore(item, false)
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    countdown = () => {
        // set Countdown time
        let nowDate = new Date();
        this.setState({ passTime: nowDate })
    }

    SetEditDisplay = (dis) => {
        // Edit view open
        this.setState({ editDis: dis })
    }

    SendDateToStore = (obj, isNew = true) => {
        // If a timer is added add it to store
        if (isNew && this.props.name != '') {
            fetch('http://114.32.157.74/PythonFlask/api/v1/', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    method: 'insert-timer',
                    title: obj.title,
                    year: parseInt(obj.year),
                    month: parseInt(obj.month),
                    day: parseInt(obj.day),
                    hour: parseInt(obj.hour),
                    minute: parseInt(obj.minute),
                    second: parseInt(obj.second),
                    isAnnual:   obj.isAnnual,
                    important: false,
                    name: this.props.name
                })
            })
        }

        this.props.addDate(obj)
        this.setState({ editDis: 'none' })
    }

    deleteTimerAPI = (title) => {
        // When delete the timer also delete it in database
        fetch('http://114.32.157.74/PythonFlask/api/v1/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                method: 'del-timer',
                title: title,
                name: this.props.name
            })
        }).catch((e) => {
            console.log(e)
        })
    }

    deleteTimer = (title) => {
        // If a timer is no longer in use
        this.deleteTimerAPI(title)
        this.props.deleteDate(title)
    }

    componentDidMount() {
        const {accState} = this.context
        // Fetch timers if no any give it a default
        // Start the timer to count
        this.timerID = setInterval(this.countdown, 1000)
        if (accState.account != ''){
            if (this.props.data.length <= 0 || this.props.name != accState.account) {
                this.FetchOld(accState.account).then(() => {
                    if (this.props.data.length <= 0) {
                        this.props.addDate(defaultDate)
                    }
                })
                this.props.setUser(accState.account)
            }
        }
        else{
            this.props.clearTimer()
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {
        let Timers = this.props.data.map((value) => {
            let cur_year = new Date().getFullYear()
            // ignore default date when user add there own
            let date = new Date(
                value.year,
                value.month - 1,
                value.day,
                value.hour,
                value.minute,
                value.second)

            // If the timer is annual set it to the next year
            if (date < (new Date()) && value.isAnnual == true) {
                date = new Date(
                    cur_year + 1,
                    value.month - 1,
                    value.day,
                    value.hour,
                    value.minute,
                    value.second
                )
            }

            return (
                <TimerBlock
                    title={value.title}
                    targetDate={date}
                    passTime={this.state.passTime}
                    delTimer={this.deleteTimer} />
            )
        })
        return (
            <MainDiv>
                {Timers}
                <EditPage
                    display={this.state.editDis}
                    setDis={this.SetEditDisplay}
                    sendDate={this.SendDateToStore} />
                <PlusButton onClick={() => {this.setState({editDis: 'flex'})}}>
                    +
                </PlusButton>
            </MainDiv>
        )
    }
}

const mapStateToProps = state => {
    return { data: state.dates, name: state.curUser }
}

const mapDispatchToProps = dispatch => {
    return {
        addDate: article => dispatch(addDate(article)),
        deleteDate: article => dispatch(deleteDate(article)),
        setUser: article => dispatch(setUser(article)),
        clearTimer: article => dispatch(clearTimer(article))
    }
}

const ConnCountDown = connect(mapStateToProps, mapDispatchToProps)(CountDown)

export default class MapCountDown extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnCountDown />
            </Provider>
        )
    }
}