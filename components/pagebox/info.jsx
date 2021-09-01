import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./info.css";

const MainIntroDiv = styled.div`
    position: relative;
    margin: 2.5% auto;
    color: white;
    @media screen and (min-width: 1080px) {
        fontsize: 1.8rem;
        width: 868px;
        height: 176px;
    }

    @media screen and (max-width: 1079px) {
        width: 85%;
        height: auto;
    }
`;

const SpanTitleIntro = styled.span`
    color: white;

    @media screen and (min-width: 1080px) {
        position: relative;
        display: inline-block;
        // border-bottom:   1px solid grey;
        height: 100%;
        left: 50px;
        font-size: 3vmin;
    }

    @media screen and (max-width: 1079px) {
        position: relative;
        top: 0;
        font-size: 3vmin;
        text-align: right;
        width: 100%;
        left: 5px;
    }
`;

const DivTitleIntro = styled.div`
    @media screen and (min-width: 1080px) {
        float: left;
        width: 15%;
        height: auto;
        position: relative;
        z-index: 1;
        &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            background: grey;
            z-index: -1;
            height: 100%;
            width: 100%;
            transform: skew(-30deg);
        }
    }

    @media screen and (max-width: 1079px) {
        width: 95%;
        height: auto;
        position: relative;
        z-index: 1;
        margin: 2.5% auto;
        &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            background: grey;
            z-index: -1;
            height: 100%;
            width: 100%;
            transform: skew(-30deg);
        }
    }
`;

const ShapeDivIntro = styled.div`
    @media screen and (min-width: 1080px) {
        height: 176px;
        width: 90px;
        float: left;
        shape-outside: polygon(0 0, 100% 0, 0 100%);
    }

    @media screen and (max-width: 1079px) {
        display: none;
    }
`;

const DivContentIntro = styled.div`
    @media screen and (min-width: 1080px) {
        float: left;
        width: 85%;
        height: 176px;
    }

    @media screen and (max-width: 1079px) {
        width: 95%;
        margin: 0 auto;
    }
`;

const SpanContentIntro = styled.span`
    width: 100%;
    font-size: 3vmin;
    @media screen and (min-width: 1080px) {
        font-size: 15.6px;
    }
`;

class Intro extends Component {
    static get propTypes() {
        return {
            setRef: PropTypes.func,
        };
    }

    constructor(props) {
        super(props);

        this.state = {
            opacity: 1,
            left: "0%",
        };
        this.MainElement;
    }
    componentDidMount() {
        window.addEventListener("scroll", this.scrollHandler);
        this.props.setRef(this.MainElement, 1);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollHandler);
    }

    scrollHandler = () => {
        let rec = this.MainElement.getBoundingClientRect();
        let pos = rec["top"];
        let height = rec["height"];
        let winHeight = window.innerHeight;
        let minW = winHeight - height;
        let maxW = winHeight;
        if (pos >= minW && pos <= maxW) {
            let diff = 1 - (pos - minW) / (maxW - minW);
            let offset = (1 - diff) * 100;
            this.setState({ left: offset + "%" });
            this.setState({ opacity: diff });
        } else if (pos < minW) {
            this.setState({ left: "0%" });
            this.setState({ opacity: 1 });
        } else if (pos > maxW) {
            this.setState({ left: "100%" });
            this.setState({ opacity: 0 });
        }
    };
    render() {
        const Styles = {
            StyleContainer: {
                left: this.state.left,
                opacity: this.state.opacity,
            },
        };
        return (
            <MainIntroDiv
                ref={(MainElement) => {
                    this.MainElement = MainElement;
                }}
                style={Styles.StyleContainer}
            >
                <DivTitleIntro>
                    <SpanTitleIntro>自我介紹</SpanTitleIntro>
                </DivTitleIntro>
                <DivContentIntro>
                    <ShapeDivIntro></ShapeDivIntro>
                    <SpanContentIntro>
                        在軟體公司任職期間，開發一款馬達測試軟體以及協助編輯Odoo
                        ERP系統和單晶片韌體的編寫
                        <br />
                        <br />
                        空閒時間有進行過 web 相關案件，是使用 HTML/CSS
                        搭配Javascript完成，之後又將其重新使用ReactJS
                        改寫，並將成果放置在下方 project部分
                        <br />
                        <br />
                        目前短期目標是成為一名前端工程師，並正在自學React的部分
                        <br />
                        <br />
                        長期目標為成為全端工程師，目前僅學到使用Python +
                        Flask作為web API，與我的前端網頁串接
                    </SpanContentIntro>
                </DivContentIntro>
            </MainIntroDiv>
        );
    }
}

const MainInfoDiv = styled.div`
    position: relative;
    color: white;
    margin: 2.5% auto;
    @media screen and (min-width: 1080px) {
        height: 230.25px;
        width: 837.75px;
        font-size: 3vmin;
        // background: rgb(64, 68, 75);
    }
    @media screen and (max-width: 1079px) {
        width: 85%;
        height: 150px;
    }
`;
const ImgdivInfo = styled.div`
    @media screen and (min-width: 1080px) {
        position: relative;
        display: inline-block;
        width: 171.23px;
        height: 100%;
    }
    @media screen and (max-width: 1079px) {
        position: relative;
        width: 92.97px;
        height: 125px;
        display: inline-block;
    }
`;

const ImgInfo = styled.img`
    position: absolute;
    height: 100%;
    float: left;
    top: 0;
    left: 0;
`;

const SpanInfo = styled.span`
    @media screen and (min-width: 1025px) {
        margin-left: 5%;
        font-size: 1.3rem;
        color: white;
    }

    @media screen and (max-width: 1024px) {
        display: inline-block;
        font-size: 3vmin;
        color: white;
    }
    @media screen and (max-width: 500px) {
        display: inline-block;
        font-size: 5vmin;
        color: white;
    }
`;
const InfoMainSpanDiv = styled.div`
    @media screen and (min-width: 1080px) {
        position: absolute;
        display: inline-block;
        width: calc(100% - 181.23px);
    }
    @media screen and (max-width: 1079px) {
        position: absolute;
        margin: 0 5px;
        display: inline-block;
        width: calc(100% - 102.97px);
        height: 100%;
    }
`;

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 1,
            left: "0%",
        };
        // this.scrollHandler = this.scrollHandler.bind(this)
    }

    static get propTypes() {
        return {
            id: PropTypes.number,
            setRef: PropTypes.func,
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollHandler);
        this.props.setRef(this.MainElement, 0);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollHandler);
    }

    scrollHandler = () => {
        let rec = this.MainElement.getBoundingClientRect();
        let pos = rec["top"];
        let height = rec["height"];
        let winHeight = window.innerHeight;
        let minW = winHeight - height;
        let maxW = winHeight;
        if (pos > minW && pos < maxW) {
            let diff = 1 - (pos - minW) / (maxW - minW);
            let offset = (1 - diff) * 100;
            this.setState({ left: offset + "%" });
            this.setState({ opacity: diff });
        } else if (pos >= maxW) {
            this.setState({ left: "100%" });
            this.setState({ opacity: 0 });
        } else if (pos < minW) {
            this.setState({ left: "0%" });
            this.setState({ opacity: 1 });
        }
    };
    render() {
        const Styles = {
            StyleContainer: {
                left: this.state.left,
                opacity: this.state.opacity,
            },
        };
        return (
            <MainInfoDiv
                ref={(MainElement) => {
                    this.MainElement = MainElement;
                }}
                style={Styles.StyleContainer}
                id={this.props.id}
            >
                <ImgdivInfo>
                    <ImgInfo src="../img/SelfPic.jpg"></ImgInfo>
                </ImgdivInfo>
                <InfoMainSpanDiv>
                    <SpanInfo>梁芳銘</SpanInfo>
                    <br />
                    <SpanInfo>Fang-Ming, Liang</SpanInfo>
                    <br />
                    <SpanInfo role="img" aria-label="phone">
                        📱 0920173978
                    </SpanInfo>
                    <br />
                    <SpanInfo role="img" aria-label="mail">
                        ✉️
                        <a href="mailto: shotup0101@gmail.com">
                            shotup0101@gmail.com
                        </a>
                    </SpanInfo>
                </InfoMainSpanDiv>
            </MainInfoDiv>
        );
    }
}

export { Info, Intro };
