import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styles from 'styled-components'

const LinkButton = styles.button `
    width:          10%;
    background:     none;
    color:          white;
    text-align:     left;
    float:          right;

    &:hover {
        background: grey;
    }
`

const LinkBlock = styles.div `
    width:          60%;
    display:        flex;
    font-size:      1.5rem;
`

const LinkName = styles.span `
    width:          90%;
`

function Scripts(props){
    return (
        <LinkBlock>
            <LinkName>{props.name}</LinkName>
            <LinkButton onClick={()=>{props.setSrc(props.fullpath)}}>
                點此下載
            </LinkButton>
        </LinkBlock>
    )
}

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

const LinkDiv = styles.div `
    display:            flex;
    flex-direction:     column;
    width:              100%;
    align-items:        center;
    justify-content:    flex-start;
`

const LinkCatSpan = styles.span `
    width:              70%;
    font-size:          2rem;
`

export default class ScriptDl extends Component {
    constructor(props){
        super(props)
        this.state = {
            Games:  [],
            Game:   [],
            src:    ''
        }
    }

    setSource = (src) => {
        this.setState({src: src})
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
                // remove Hack in name
                let dir_ = obj.dir.replace('Hack', '')

                // do not repeatly add category
                if(!this.state.Games.includes(dir_)){
                    this.setState({Games: [...this.state.Games, dir_]})
                }
                
                // try to remove E://Hacks no need for this
                let path = obj.fullpath.split('\\')
                path.splice(0, 2)

                // rejoin the path to server location
                let newPath = 'http://114.32.157.74/Scripts/' + path.join('/')
                let obj_game = {
                    name: obj.name, 
                    fullpath: newPath,
                    dir: dir_
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
                    return (<Scripts setSrc={this.setSource} name={item.name} fullpath={item.fullpath} />)
                }
            })
            return (
                <LinkDiv>
                    <LinkCatSpan>{game}</LinkCatSpan>
                    {tmp}
                </LinkDiv>
            )
        })
        return (
            <MainDiv>
                <HeaderDiv>
                    外掛下載區
                </HeaderDiv>
                {Spans}
                <iframe src={this.state.src} style={{display: 'none'}}></iframe>
            </MainDiv>
        )
    }
}