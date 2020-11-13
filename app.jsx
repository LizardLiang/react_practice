import React from 'react';
import ReactDom from 'react-dom';

class CreateForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Default Name',
            sub_name: '',
            placehold: 'Input Name',
            lists: [
                    {TaskID: '01', TaskName: 'PUBG', check: false},
                    {TaskID: '02', TaskName: 'APEX', check: false},
                    {TaskID: '03', TaskName: 'MHW', check: false},
                    ],
            checkItem: [],
            show: false
        }
        this.changeState = this.changeState.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    changeState(event){
        this.setState({name:event.target.value})
    }

    submitForm(event){
        let tmp = ''
        this.setState({sub_name:this.state.name})
        this.state.lists.map(
            (list)=>{
                (list.check) ? tmp += list.TaskName : '\n'
            })
        this.state.show = this.state.show ^ 1
        this.setState({checkItem: tmp})
        // prevent react submit all html content
        event.preventDefault()
    }

    checkStateChange(index){
        let arr_  = this.state.lists;
        arr_[index].check = arr_[index].check ^ 1;
        this.setState({lists: arr_})
    }

    render () {
        let lists = this.state.lists.map((list, index)=>(
            <div key={list.TaskID}>
                <input  type="checkbox"
                        checked={list.check}
                        onChange={this.checkStateChange.bind(this, index)}
                        key={list.TaskID}/>
                <label>{list.TaskName}</label>
            </div>
        ));
        return (
            <form onSubmit={this.submitForm}>
                <label>Name: </label>
                <input  id="name" 
                        name="name"
                        value={this.state.name}
                        placehold={this.state.placehold}
                        onChange={this.changeState}/>
                <br/>
                {lists}
                <input id="submit" type="submit" value="submit"></input>
                <br/>
                {(this.state.lists.map((item, index) => 
                        (item.check) ? 
                        <div style={{visibility: item.check ? 'visible' : 'hidden'}}>
                            <span>{item.TaskName}</span><br/>
                        </div> : ''))}
            </form>
        )
    }
}

ReactDom.render(<CreateForm />, document.getElementById('root'))