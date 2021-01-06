import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const LinkButton = styled.button `
    width:          10%;
    background:     none;
    color:          white;
    text-align:     left;
    float:          right;
    display:        flex;
    align-items:    flex-end;

    @media screen and (max-width:   1440px){
        font-size:  1.163rem;
    }

    @media screen and (max-width:   1024px){
        font-size:  0.7731rem;
    }

    @media screen and (max-width:   768px){
        width:      14%;
    }

    @media screen and (max-width:   425px){
        width:      28%;
    }

    @media screen and (max-width:   320px){
        width:      34%;
    }

    &:hover {
        background: grey;
    }
`

const LinkBlock = styled.div `
    width:          60%;
    display:        flex;
    font-size:      1.5rem;
`

const LinkName = styled.span `
    width:          90%;
    word-wrap:      break-word;

    @media screen and (max-width:   768px){
        font-size:  1rem;
    }

    @media screen and (max-width:   425px){
        width:      71%;
    }

    @media screen and (max-width:   320px){
        width:      68%;
    }
`

// Display the file's name and download button
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

const MainDiv = styled.div `       
    display:        flex;
    flex-direction: column;
    align-items:    center;
    color:          white;
    width:          100%;
    padding-top:    5rem;
`

const HeaderDiv = styled.div `
    display:        flex;
    justify-content:center;
    align-items:    center;
    font-size:      4rem;

    @media screen and (max-width:   425px){
        font-size:  3rem;
    }

    @media screen and (max-width:   320px){
        font-size:  2rem;
    }
`

const LinkDiv = styled.div `
    display:            flex;
    flex-direction:     column;
    width:              100%;
    align-items:        center;
    justify-content:    flex-start;
`

const LinkCatSpan = styled.span `
    width:              70%;
    font-size:          2rem;
`

// Main view of download page
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
        // Get every scripts I have in my folders
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
                // Category on top
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
                {/* this iframe is use for downloading files */}
                <iframe src={this.state.src} style={{display: 'none'}}></iframe>
            </MainDiv>
        )
    }
}