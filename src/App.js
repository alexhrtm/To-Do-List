import React, {Component} from 'react';
import Input from './Input'
import List from './List'

import './main.css'


export default class App extends Component {
    constructor() {
        super()
        this.state = {
            userInput: '',
            list: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.addItem = this.addItem.bind(this)
    }

    handleChange(e) {
        this.setState({
            userInput: e.target.value
        })
    }

    addItem(e) {
        e.preventDefault();
        if (this.state.userInput !== '') {
            let newItem = {
                text: this.state.userInput,
                key: Date.now()
            }
            
    
            this.setState((prevState) => {
                return {
                    list: prevState.list.concat(newItem),
                    userInput: ''
                }
            })

        }
        
    }

    render() {
        return(
            <div>
                <Input 
                    value={this.state.userInput} 
                    onChange={this.handleChange} 
                    onClick={this.addItem}/>
                <List entries={this.state.list}/>
                
            </div>
        )
    }
} 