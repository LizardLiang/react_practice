import React from 'react';
import ReactDom from 'react-dom';

// let element = <h1>Hello Lizard</h1>;

// const gettime = () => {
//     let datetime = (
//         <div>
//             <span>current time:{new Date().toLocaleTimeString()}</span>
//         </div>
//     )
//     ReactDom.render(
//         datetime,
//         document.getElementById('time_area')
//     )
// }

class Tree extends React.Component {
    render(){
        return <div>Hello, King<br/>Hello, Queen<br/></div>
    }
}

// ReactDom.render(tree, document.getElementById('root'))

class GetTime extends React.Component {
    // 建構 state
    constructor(props) {
        // 取得上層的props
        super(props)

        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }

    componentDidMount() {
        const countup = () => {
            this.setState({time: new Date().toLocaleTimeString()})
        }

        setInterval(countup, 1000)
    }

    render() {
        return <span>Current Time: {this.state.time}</span>
    }
}

ReactDom.render(<div><Tree /><GetTime /></div>, document.getElementById('time_area'))

// ReactDom.render(
//     element,
//     document.getElementById('root')
// );

// setInterval(gettime,1000)