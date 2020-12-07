import React from "react"
import ReactDOM from "react-dom"
import {HashRouter, Route, hashHistory} from 'react-router'
import {Provider, connect} from "react-redux"
import {Main, SideBar} from "./Main"
import { Info, Experience, Projects, MyTool, AdditionInfo, Intro } from "./components/pagebox"
import store from "./index.js"

class MessageList extends React.Component {
    render(){
        let message = this.props.data.map((item)=>{
            return <li key={item.key}>{item.name}：{item.message}</li>
        })
        return(
            <ul>
                {message}
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return { data: state.message }       
}

const List = connect(mapStateToProps)(MessageList)

class MainWindow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: [],
            value: []
        }
        this.tdList = []
        this.props.date_res = []
        this.value_res = []
        this.TryApi = this.TryApi.bind(this)
    }

    TryApi(){
        let item = fetch('https://cors-anywhere.herokuapp.com/http://114.32.157.74/PythonFlask/api/test', {
            method:  'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response)=>{
            return response.json()
        }).then((item)=>{
            this.setState({date: item['date'], value: item['value']})
        })
    }

    render(){
        const Styles = {
            StyleContainer: {
                width:      '100%',
                height:     'auto',
                background: 'rgb(47, 49, 54)',
                margin:     '0',
                boxSizing:  'border-box'
            },
            MainPageContainer: {
                marginTop:  '100vh',
                marginLeft: 'auto',
                marginRight:'auto',
                position:   'relative',
                background: 'rgb(54, 57, 63)',
                boxSizing:  'border-box',
                width:      '50vw'
            },
            headerContainer:{
                position:   'fixed',
                top:        '0px',
                left:       '0px',
                height:     '100vh', 
                width:      '100vw', 
                display:    'table',
            },
            h1Container:    {
                display:        'table-cell',
                textAlign:      'center',
                verticalAlign:  'middle',
                fontSize:       '6vmin',
                color:          'white'
            }
        }
        const {StyleContainer} = Styles

        // Return tbody with results
        let list = []
        for(let i=0;i<this.state.date.length;i++){
            // Append result into list
            list.push(
                <tr>
                    <td>
                        {this.state.date[i]}
                    </td>
                    <td>
                        {this.state.value[i]}
                    </td>
                </tr>
            )
        }
        return (
            <HashRouter>
                <div style={StyleContainer}>
                    <div style={Styles.headerContainer}>
                        <h1 style={Styles.h1Container}>
                            Hello Everyone!
                        </h1>
                    </div>
                    <Route  path='/' component={Home}/>
                </div>
            </HashRouter>
        )
    }
}

ReactDOM.render(<MainWindow />, document.getElementById("root"))

export default {Home}