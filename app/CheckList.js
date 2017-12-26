import React, { Component } from 'react';

class CheckList extends Component {
    render() {
        console.log('tasks',tasks);
        let tasks = this.props.tasks && this.props.tasks.length ?
            this.props.tasks.map((task, index) =>(
                <li key={`li-${index}`} className="checklist__tack">
                    <input type="checkbox" defaultChecked={task.done} />
                    {task.name}
                    <a href="#" className="checklist__task--remove" />
                </li>    
            ))
            : null;
        return(
            <div className="checklist">
                <ul>{tasks}</ul>
            </div>    
        );
    }
}

export default CheckList;