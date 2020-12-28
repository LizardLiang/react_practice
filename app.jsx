import React, {Suspense, lazy} from "react"
import ReactDOM from "react-dom"
import {HashRouter, Route, hashHistory} from 'react-router-dom'
import {connect} from "react-redux"
const Home = lazy(() => 
                    import(/*webpackChunkName:"Home"*/ './components/pagebox/home.jsx'))
const HeadBanner = lazy(() => 
                    import(/*webpackChunkName:"HeadBanner"*/'./components/sidebar/SideBar.jsx'))
const MapCountDown = lazy(() => 
                    import(/*webpackChunkName:"CountDown"*/'./CountDown/CountDown.jsx'))
const StockMain = lazy(()=>
                    import(/*webpackChunkName:"Stock"*/'./components/StockPage/StockMain.jsx'))
import './index.css'
const ShowIp = lazy(()=>import(/*webpackChunkName:"ShowIp"*/"./ShowIp/ShowIp.jsx"))

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
                background: 'rgb(32, 34, 37)',
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
                    {/* <div style={Styles.headerContainer}>
                        <h1 style={Styles.h1Container}>
                            Hello Everyone!
                        </h1>
                    </div> */}
                    {/* Use route to switch pages */}
                    <Suspense fallback={<div>Loading</div>}>
                        <HeadBanner/>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/StockSearch' component={ StockMain }/>
                        <Route exact path='/CountDown' component={ MapCountDown }/>
                        <Route exact path='/CheckIP' render={() => {return <ShowIp/>}}/>
                    </Suspense>
                </div>
            </HashRouter>
        )
    }
}

ReactDOM.render(<MainWindow />, document.getElementById("root"))

export { MainWindow }