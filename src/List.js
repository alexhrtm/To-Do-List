import React, { Component } from 'react';

export default class List extends Component {
    renderList(item) {
        return <li key={item.key}>{item.text}</li>
    }

    render() {
        // props (this.state.items) para uma variável
        let todoEntries = this.props.entries

        let listItems = todoEntries.map(this.renderList)

        return(
            <ul>
                {listItems}
            </ul>
        )
    }
}