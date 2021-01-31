import React, {useCallback} from 'react'
import {Link, useHistory} from 'react-router-dom'
import styled from 'styled-components'

const SectionDiv = styled.div ` 
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    color: white;
    margin: 5px 0;

    @media screen and (max-width: 1000px){
        flex-direction: column;
    }
`

const BlockDiv = styled.div ` 
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 400px;
    background: #2f3136;
    border-radius: 5px;
    align-items: center;
    margin: 0 5px;
    transition: height 1s, width 1s;
    border: solid 1px grey;

    &:hover {
        width: 300px;
        height: 500px;
        transition: height 1s, width 1s;
    }

    @media screen and (max-width: 1000px){
        width: 100%;
        margin: 5px 0;
    }
`

const HeadDiv = styled.div ` 
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    width: 100%;
    height: 15%;
`

const FootDiv = styled.div ` 
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`

const FootButton = styled.button ` 
    width: 100px;
    height: 100%;
    white-space: nowrap;
    overflow: hidden;
    transition: width 1s;
    font-size: 1.5rem;
    background: none;
    padding: 0;

    &:hover {
        transition: width 1s;
        width: 125px;
    }
`

const IntroDiv = styled.div ` 
    position: relative;
    background-image: ${props=> `url(${props.bgurl})` || "none"};
    background-size: cover;
    background-position: center center;
    /* background-attachment: fixed; */
    width: 100%;
    height: 70%;

    &:hover {
        cursor: pointer;
    }

    span {
        position: absolute;
        bottom: 0;
        min-height: 50px;
        display: flex;
        align-items: flex-end;
        color: ivory;
        width: 100%;
        background: rgba(64,68,75,0.25)
    }
`

const GuideLink = styled(Link) `
    background: none;
    &:focus, &:hover{
        text-decoration:    none;
    }
`

const ProjectColumnUpper = () => {
    const history = useHistory()
    const handleCountdown = useCallback(() => history.push('/CountDown'), [history]);
    const handleStock = useCallback(() => history.push('/StockSearch'), [history]);
    const handleCheckIP = useCallback(() => history.push('/CheckIP'), [history]);

    return (
        <SectionDiv>
            <BlockDiv>
                <HeadDiv>
                    計時器
                </HeadDiv>
                <IntroDiv bgurl='./img/countdownCut.png' onClick={handleCountdown}>
                    <span>可自定義事件的倒數計時器。</span>
                </IntroDiv>
                <FootDiv>
                    <FootButton>
                        <GuideLink to='/CountDown'>
                            立即前往 →
                        </GuideLink>
                    </FootButton>
                </FootDiv>
            </BlockDiv>
            <BlockDiv>
                <HeadDiv>
                    股票查詢
                </HeadDiv>
                <IntroDiv bgurl='./img/stock.png' onClick={handleStock}>
                    <span>查詢一個月內該股票價格。</span>
                </IntroDiv>
                <FootDiv>
                    <FootButton>
                        <GuideLink to='StockSearch'>
                            立即前往 →
                        </GuideLink>
                    </FootButton>
                </FootDiv>
            </BlockDiv>
            <BlockDiv>
                <HeadDiv>
                    IP 查詢
                </HeadDiv>
                <IntroDiv bgurl='./img/checkip.png' onClick={handleCheckIP}>
                    <span>利用API查詢使用者的IP</span>
                </IntroDiv>
                <FootDiv>
                    <FootButton>
                        <GuideLink to='CheckIP'>
                            立即前往 →
                        </GuideLink>
                    </FootButton>
                </FootDiv>
            </BlockDiv>
        </SectionDiv>
    )
}

const ProjectColumnLower = () => {
    const history = useHistory()
    const handleScripts = useCallback(() => history.push('/Scripts', [history]))
    const handleTodoList = useCallback(() => history.push('/TodoList', [history]))
    const handleCalculator = useCallback(() => history.push('/Calculator', [history]))

    return (
        <SectionDiv>
            <BlockDiv>
                <HeadDiv>
                    檔案下載
                </HeadDiv>
                <IntroDiv bgurl='./img/script.png' onClick={handleScripts}>
                    <span>分享模組檔案。</span>
                </IntroDiv>
                <FootDiv>
                    <FootButton>
                        <GuideLink to='/Scripts'>
                            立即前往 →
                        </GuideLink>
                    </FootButton>
                </FootDiv>
            </BlockDiv>
            <BlockDiv>
                <HeadDiv>
                    待辦事項
                </HeadDiv>
                <IntroDiv bgurl='./img/todolist.png' onClick={handleTodoList}>
                    <span>紀錄待辦事項，可分為三種狀態。</span>
                </IntroDiv>
                <FootDiv>
                    <FootButton>
                        <GuideLink to='TodoList'>
                            立即前往 →
                        </GuideLink>
                    </FootButton>
                </FootDiv>
            </BlockDiv>
            <BlockDiv>
                <HeadDiv>
                    計算機
                </HeadDiv>
                <IntroDiv bgurl='./img/calculator.png' onClick={handleCalculator}>
                    <span>基本計算機功能。</span>
                </IntroDiv>
                <FootDiv>
                    <FootButton>
                        <GuideLink to='Calculator'>
                            立即前往 →
                        </GuideLink>
                    </FootButton>
                </FootDiv>
            </BlockDiv>
        </SectionDiv>
    )
}

const MainDiv = styled.div ` 
    display: flex;
    flex-direction: column;
    min-height: calc(1000px - 24px);
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 5rem;
`

const Projects = () => {

    return (
        <MainDiv>
            <ProjectColumnUpper />
            <ProjectColumnLower />
        </MainDiv>
    )
}

export default Projects