import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import styled from 'styled-components'
import {JSEncrypt} from 'jsencrypt'

let rsa = new JSEncrypt()

const MainDiv = styled.div ` 
    width: 100%;
    min-height: calc(100vh - 24px);
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: center;
    align-items: center;
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

    &:focus{
        outline: none;
    }
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

    &:focus{
        outline: none;
    }
`

const ErrSpan = styled.span ` 
    color: red;
    font-size: 1.5rem;
`

const LoginLink = styled(Link) `
    font-size: 1rem;
    
    &:focus, &:hover {
        text-decoration: none;
        outline: none;
    }
`

const Register = () => {
    const [username, setName] = useState('')
    const [password, setPswd] = useState('')
    const [errmsg, setErrMsg] = useState('')

    useEffect(() => {
        Axios.post(`http://MyIP/ExpressServer/api/`, {
            action: 'KeyRequest'
        }).then(res=>{
            let key = res.data.key
            rsa.setPublicKey(key)
        })
    }, [])

    const valid_username = (name) => {
        let pattern = /^\w*$/
        let valid = name.match(pattern)

        if (valid == null)
            return false
        else
            return true
    }

    const valid_password = (pwd) => {
        let pattern = /^[-\w.?!@#$%^&*]*$/
        let valid = pwd.match(pattern)

        if (valid == null)
            return false
        else
            return true
    }

    const RegistUser = () => {
        if(!valid_username(username)){
            setErrMsg('帳號格式錯誤')
        }
        else if(!valid_password(password)){
            setErrMsg('密碼格式錯誤')
        }
        else{
            let hashpwd = ''
            // Bcrypt.hash(password, 8, function(err, res){
            //     hashpwd = res
            //     console.log(username, hashpwd)
            // })
            hashpwd = rsa.encrypt(password)
            Axios.post(`http://MyIP/ExpressServer/api/`,{
                action: 'Regist',
                username: username,
                password: hashpwd
            }).then(res=>{
                if(res.data.err.code == 'ER_DUP_ENTRY'){
                    setErrMsg('帳號已使用')
                }
                else{
                    setErrMsg('')
                }
            })
        }
    }

    return (
        <MainDiv>
            註冊
            <Input 
                id="account" placeholder={`輸入帳號`}
                onChange={(e)=>{setName(e.target.value)}} />
            <Input id="password" placeholder={`輸入密碼`}
                onChange={(e)=>{setPswd(e.target.value)}} />
            <FootDiv>
                <ErrSpan>
                    {errmsg}
                </ErrSpan>
                <FootButton onClick={RegistUser}>
                    送出
                </FootButton>
            </FootDiv>
            <LoginLink to='/Login'>已經有帳號了嗎? 點這裡登入</LoginLink>
        </MainDiv>
    )
}

export default Register