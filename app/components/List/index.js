import React from 'react'
import Item from './Item'
import './style.less'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div className="list-container">
                {this.props.data.map((item, index) => {
                    return <Item key={index} data={item}/>
                })}
            </div>
        )
    }
}

export default List
