import React, {Suspense, lazy} from "react"
import ReactDOM from "react-dom"
import {HashRouter, Route} from 'react-router-dom'
import './index.css'
const Home = lazy(() => 
        import(/* webpackChunkName:"Home" */ './components/pagebox/home.jsx'))
const HeadBanner = lazy(() => 
        import(/* webpackChunkName:"HeadBanner" */'./components/sidebar/SideBar.jsx'))
const MapCountDown = lazy(() => 
        import(/* webpackChunkName:"CountDown" */'./components/CountDown/CountDown.jsx'))
const StockMain = lazy(()=>
        import(/* webpackChunkName:"Stock" */'./components/StockPage/StockMain.jsx'))
const ShowIp = lazy(()=>
        import(/* webpackChunkName:"ShowIp" */"./components/ShowIp/ShowIp.jsx"))
const ScriptDl = lazy(()=>
        import(/* webpackChunkName:"ScriptDL" */"./components/ScriptDownload/ScriptDownload.jsx"))
const TodoList = lazy(()=>
        import(/* webpackChunkName: "TodoList" */"./components/TodoList/TodoList.jsx"))
const Calculator = lazy(()=>
        import(/* webpackChunkName: "Calculator" */"./components/Calculator/calculator.jsx"))
const Register = lazy(()=>
        import(/* webpackChunkName: "Register" */"./components/RegisterAndLogin/register.jsx"))
const Login = lazy(()=>
        import(/* webpackChunkName: "Login" */"./components/RegisterAndLogin/login.jsx"))
const Projects = lazy(()=>
        import(/* webpackChunkName: "Projects" */"./components/Projects/projects.jsx"))

class MainWindow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: [],
            value: []
        }
    }

    render(){
        const Styles = {
            StyleContainer: {
                width:      '100%',
                height:     'auto',
                margin:     '0',
                boxSizing:  'border-box'
            }
        }
        const {StyleContainer} = Styles
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
                        <Route exact path='/Scripts' component={ ScriptDl } />
                        <Route exact path='/TodoList' render={() => {return <TodoList/>}}/>
                        <Route exact path='/Calculator' render={()=>{return <Calculator/>}} />
                        <Route exact path='/Regist' render={()=>{return <Register/>}}/>
                        <Route exact path='/Login' render={()=>{return <Login/>}}/>
                        <Route exact path='/Projects' render={()=>{return <Projects />}} />
                    </Suspense>
                </div>
            </HashRouter>
        )
    }
}

ReactDOM.render(<MainWindow />, document.getElementById("root"))