import React from "react";
import './TodoItem.css';

function TodoItem(props) {

    return (
        <li className="todoItem">
            <span onClick={props.complete} className={`done ${props.completed && 'completed'}`}>{props.completed ? "✓" : "O"}</span>
            <p className={props.completed ? 'completed-text' : ''}>{props.text}</p>
            <span onClick={props.delete} className="close">X</span>
        </li>
    );
}

export {TodoItem};