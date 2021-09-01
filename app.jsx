import React, { Suspense, lazy, useReducer, createContext } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { HashRouter, Route, Link, Redirect } from "react-router-dom";
import { accountReducer, accountStatus } from "./";
import "./index.css";
const Home = lazy(() =>
    import(/* webpackChunkName:"Home" */ "./components/pagebox/home.jsx")
);
const HeadBanner = lazy(() =>
    import(
        /* webpackChunkName:"HeadBanner" */ "./components/sidebar/SideBar.jsx"
    )
);
const MapCountDown = lazy(() =>
    import(
        /* webpackChunkName:"CountDown" */ "./components/CountDown/CountDown.jsx"
    )
);
const StockMain = lazy(() =>
    import(
        /* webpackChunkName:"Stock" */ "./components/StockPage/StockMain.jsx"
    )
);
const ShowIp = lazy(() =>
    import(/* webpackChunkName:"ShowIp" */ "./components/ShowIp/ShowIp.jsx")
);
const ScriptDl = lazy(() =>
    import(
        /* webpackChunkName:"ScriptDL" */ "./components/ScriptDownload/ScriptDownload.jsx"
    )
);
const TodoList = lazy(() =>
    import(
        /* webpackChunkName: "TodoList" */ "./components/TodoList/TodoList.jsx"
    )
);
const Calculator = lazy(() =>
    import(
        /* webpackChunkName: "Calculator" */ "./components/Calculator/calculator.jsx"
    )
);
const Register = lazy(() =>
    import(
        /* webpackChunkName: "Register" */ "./components/RegisterAndLogin/register.jsx"
    )
);
const Login = lazy(() =>
    import(
        /* webpackChunkName: "Login" */ "./components/RegisterAndLogin/login.jsx"
    )
);
const Projects = lazy(() =>
    import(
        /* webpackChunkName: "Projects" */ "./components/Projects/projects.jsx"
    )
);
const Privacy = lazy(() =>
    import(/* webpackChunkName: "Privacy" */ "./components/pagebox/privacy.jsx")
);

const Footer = styled.div`
    margin-top: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    background: rgb(47, 49, 54);
    color: white;
    position: relative;
    bottom: 0;
    z-index: 3;

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

const MainStyle = styled.div`
    width: 100%;
    height: auto;
    margin: 0;
    box-sizing: border-box;
`;

const AccountContext = createContext();
export { AccountContext };

const MainWindow = () => {
    const [accState, accDispatch] = useReducer(accountReducer, accountStatus);
    return (
        <HashRouter>
            {/* <MainStyle> */}
            {/* Use route to switch pages */}
            <AccountContext.Provider
                value={{
                    accState,
                    accDispatch,
                }}
            >
                <Suspense fallback={<div>Loading</div>}>
                    <HeadBanner />
                    <Route exact path="/Login">
                        {accState.status == 0 ? (
                            <Login />
                        ) : (
                            <Redirect push to="/Projects" />
                        )}
                    </Route>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/StockSearch" component={StockMain} />
                    <Route exact path="/CountDown" component={MapCountDown} />
                    <Route
                        exact
                        path="/CheckIP"
                        render={() => {
                            return <ShowIp />;
                        }}
                    />
                    <Route exact path="/Scripts" component={ScriptDl} />
                    <Route
                        exact
                        path="/TodoList"
                        render={() => {
                            return <TodoList />;
                        }}
                    />
                    <Route
                        exact
                        path="/Calculator"
                        render={() => {
                            return <Calculator />;
                        }}
                    />
                    <Route
                        exact
                        path="/Regist"
                        render={() => {
                            return <Register />;
                        }}
                    />
                    <Route
                        exact
                        path="/Projects"
                        render={() => {
                            return <Projects />;
                        }}
                    />
                    <Route
                        exact
                        path="/Privacy"
                        render={() => {
                            return <Privacy />;
                        }}
                    />
                </Suspense>
            </AccountContext.Provider>
            {/* </MainStyle> */}
            <Footer>
                <span>Copyright © 2021 Lizard Demo. All Rights Reserved.</span>
                <Link to="/Privacy">隱私權政策 Privacy Policy</Link>
            </Footer>
        </HashRouter>
    );
};

ReactDOM.render(<MainWindow />, document.getElementById("root"));
