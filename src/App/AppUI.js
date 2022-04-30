import React from 'react';
import { TodoContext } from '../context/TodoContext';
import {TodoCounter}  from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton/index.js";
import { Modal } from "../components/Modal";
import { TodoForm } from '../components/TodoForm';

function AppUI() {

    const {
        error,
        loading,
        filterTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
                <TodoList>
                    {error && <p>Desespérate, hubo un error...</p>}
                    {loading && <p>Estamos cargando, no desesperes...</p>}
                    {(!loading && !filterTodos.length) && <p>¡Crea tu primer TODO!</p>}
                    {filterTodos.map((todo) => (<TodoItem 
                        complete={() => completeTodo(todo.id)}
                        text={todo.text} 
                        key={todo.id} 
                        completed={todo.completed} 
                        delete={() => deleteTodo(todo.id)}  
                    />))}
                </TodoList>
            {!!openModal && (
                <Modal>
                <TodoForm />
            </Modal>
            )}

            <CreateTodoButton
                setOpenModal={setOpenModal}
            />
    </React.Fragment>
    );
}

export { AppUI };