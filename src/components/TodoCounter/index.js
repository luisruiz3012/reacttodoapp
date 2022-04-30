import React from "react";
import { TodoContext } from "../../context/TodoContext";
import './TodoCounter.css';

function TodoCounter() {

    const { completedTodos, totalTodos } = React.useContext(TodoContext);

    return (
        <section className="todoCounter">
            <h2>Bienvenido</h2>
            <h3>Has completado {completedTodos} de {totalTodos} todos</h3>
        </section>
    )
}

export {TodoCounter};