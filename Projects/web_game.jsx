import React, {Component} from "react"

class WebGame extends Component{

    render(){
        const Styles = {
            divContainer:{
                display:    this.props.isVisible,
            },
            spanContainer:{
                margin:     'auto',
                width:      '80%',
                display:    'block',
                textAlign:  'left'
            },
            iframeContainer:{
                height:     "70%",
                width:      "80%",
                margin:     'auto',
                overflow:   "hidden",
                textAlign:  'left'
            }
        }
        return (
            <div style={Styles.divContainer}>
                <span style={Styles.spanContainer}>
                    此遊戲是基於 ReactJS 所製作的小遊戲<br/>
                    遊戲機制為在時限之內將點擊出所有汙染源<br/>
                    共有八種汙染源，隨機產生五種汙染源作為目標，並限時一分鐘內找出這五種汙染源<br/>
                    人物身上的能量條亦會隨著汙染源被找出改變其狀態<br/>
                    當遊戲結束時根據是否找出所有汙染源，還是計時器結束，顯示訊息框。
                </span>
                <iframe style={Styles.iframeContainer} src="http://114.32.157.74" 
                        scrolling='no'/>
            </div>
        )
    }
}

export {WebGame}