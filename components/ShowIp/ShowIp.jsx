import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const MainDiv = styled.div `
    display:            flex;
    flex-direction:     column;
    height:             100vh;
    width:              100vw;
    justify-content:    center;
    align-items:        center;
    color:              white;
    padding-top:        5rem;
    font-size:          5rem;

    @media screen and (max-width:   425px){
        font-size:      3rem;
    }

    @media screen and (max-width:   320px) {
        font-size:      2rem;
    }
`

function ShowIp() {
    const [Ip, setIp] = useState('')

    let FetchIp = () => {
        // use fetch post 
        fetch('http://MyIP/PythonFlask/api/v1/',{
            method: 'POST',
            headers:    {
                // need to set content-type to determine body type
                'content-type': 'application/json'
            },
            body:   JSON.stringify({'method': 'fetch_ip'})
        }).then((response)=>{
            return response.json()
        }).then((item)=>{
            setIp(item.ip)
        })
    }

    useEffect(() => {
        FetchIp()
    }, [Ip])

    return (
        <MainDiv>
            Your IP is:<br/>
            {Ip}
        </MainDiv>
    )
}

export default ShowIp