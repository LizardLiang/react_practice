import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import Bcrypt from 'bcryptjs'
import styled from 'styled-components'
import {JSEncrypt} from 'jsencrypt'
import axios from 'axios'

let rsa = new JSEncrypt()

const MainDiv = styled.div ` 
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: center;
    align-items: center;
    padding-top: 5rem;
    font-size: 2rem;
`

const Input = styled.input ` 
    font-size: 1.5rem;
    background:     rgb(47, 49, 54);
    border:         1px solid rgba(255,255,255,0.5);
    border-radius:  9px;
    margin: 0.5rem 0;
    width: 275px;
    color: white;
`

const FootDiv = styled.div ` 
    width: 274px;
    display: flex;
`

const FootButton = styled.button ` 
    margin-left: auto;
    background:         rgb(47,49,54);
    border:             1px solid rgba(255,255,255,0.3);
    border-radius:      9px;
    color:              white;
    font-size: 1.5rem;
`

const Register = () => {
    const [username, setName] = useState('')
    const [password, setPswd] = useState('')

    useEffect(() => {
        axios.post(`http://114.32.157.74/ExpressServer/api/`, {
            action: 'KeyRequest'
        }).then(res=>{
            let key = res.data.key
            rsa.setPublicKey(key)
        })
    }, [])

    const RegistUser = () => {
        let hashpwd = ''
        // Bcrypt.hash(password, 8, function(err, res){
        //     hashpwd = res
        //     console.log(username, hashpwd)
        // })
        hashpwd = rsa.encrypt(password)
        axios.post(`http://114.32.157.74/ExpressServer/api/`,{
            action: 'Regist',
            username: username,
            password: hashpwd
        }).then(res=>{
            console.log(hashpwd)
        })
    }

    return (
        <MainDiv>
            Registration
            <Input 
                id="account" placeholder={`輸入帳號`}
                onChange={(e)=>{setName(e.target.value)}} />
            <Input id="pw" placeholder={`輸入密碼`}
                onChange={(e)=>{setPswd(e.target.value)}} />
            <FootDiv>
                <FootButton onClick={RegistUser}>
                    送出
                </FootButton>
            </FootDiv>
        </MainDiv>
    )
}

export default Register