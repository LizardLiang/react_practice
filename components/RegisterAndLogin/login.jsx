import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import styled from 'styled-components'
import {JSEncrypt} from 'jsencrypt'
import axios from 'axios'

let rsa = new JSEncrypt()

const MainDiv = styled.div ` 
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5rem;
    color: white;
    font-size: 2rem;
`

const Input = styled.input ` 
    width: 274px;
    font-size: 1.5rem;
    background:     rgb(47, 49, 54);
    border:         1px solid rgba(255,255,255,0.5);
    border-radius:  9px;
    margin: 0.5rem 0;
    width: 275px;
    color: white;

    &:focus {
        outline: none;
    }
`

const FootDiv = styled.div ` 
    width: 275px;
    display: flex;
    font-size: 1.5rem;
`

const FootButton = styled.button ` 
    margin-left: auto;
    background:         rgb(47,49,54);
    border:             1px solid rgba(255,255,255,0.3);
    border-radius:      9px;
    color:              white;
    font-size: 1.5rem;

    &:focus{
        outline: none;
    }
`

const Login = () => {
    const [username, setUser] = useState('')
    const [password, setPswd] = useState('')
    const [ErrMsg, setErrMsg] = useState('')

    useEffect(()=>{
        axios.post(`http://114.32.157.74/ExpressServer/api`, {
            action: 'KeyRequest'
        }).then(res=>{
            rsa.setPublicKey(res.data.key)
        })
    }, [])

    const LoginServer = () => {
        if(username == '' || password == ''){
            setErrMsg('請輸入完整資訊')
        }
        else{
            let hashpwd = rsa.encrypt(password)
            axios.post(`http://114.32.157.74/ExpressServer/api`, {
                action: 'login',
                username: username,
                password: hashpwd
            }).then(res=>{
                if(res.data.status == 'Success'){
                    setErrMsg('登入成功')
                }
                else{
                    setErrMsg('登入失敗')
                }
            })
        }
    }

    return (
        <MainDiv>
            登入
            <Input id="account" onChange={(e)=>{setUser(e.target.value)}} />
            <Input id="password" onChange={(e)=>{setPswd(e.target.value)}} />
            <FootDiv>
                {ErrMsg}
                <FootButton onClick={LoginServer}>登入</FootButton>
            </FootDiv>
        </MainDiv>
    )
}

export default Login