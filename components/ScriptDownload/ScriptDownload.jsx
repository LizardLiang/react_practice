import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styles from 'styled-components'

const MainDiv = styles.div `       
    display:        flex;
    flex-direction: column;
    align-items:    center;
    color:          white;
    width:          100%;
    padding-top:    5rem;
`

const HeaderDiv = styles.div `
    display:        flex;
    justify-content:center;
    align-items:    center;
    font-size:      4rem;
`

function Scripts(props){
    return (
        <a src={props.fullpath}>{props.name}</a>
    )
}

export default class ScriptDl extends Component {
    constructor(props){
        super(props)
        this.state = {
            Games:  [],
            Game:   []
        }
    }

    componentDidMount(){
        this.FetchScripts()
    }

    FetchScripts = async () => {
        fetch('http://114.32.157.74/PythonFlask/api/v1/',{
            method: 'POST',
            headers:    {
                'content-type': 'application/json'
            },
            body:   JSON.stringify({
                method: 'get-scripts'
            })
        }).then((res)=>{
            return res.json()
        }).then((obj)=>{
            let Urls = obj.scripts
            Urls.map((obj)=>{
                if(!this.state.Games.includes(obj.dir)){
                    this.setState({Games: [...this.state.Games, obj.dir]})
                }
                let obj_game = {
                    name: obj.name, 
                    fullpath: obj.fullpath,
                    dir: obj.dir
                }
                this.setState({Game: [...this.state.Game, obj_game]})
            })
        })
    }

    render(){
        let Spans = this.state.Games.map((game)=>{
            let tmp = []
            tmp = this.state.Game.map((item)=>{
                if (item.dir == game){
                    console.log(item.name, item.fullpath)
                    return (<Scripts name={item.name} path={item.path} />)
                }
            })
            return (
                <div>
                    <span>{game}</span>
                    {tmp}
                </div>
            )
        })
        console.log(Spans)
        return (
            <MainDiv>
                <HeaderDiv>
                    外掛下載區
                </HeaderDiv>
                {Spans}
                <button onClick={this.DownloadScript}></button>
                <iframe style={{display: 'none'}}></iframe>
            </MainDiv>
        )
    }
}