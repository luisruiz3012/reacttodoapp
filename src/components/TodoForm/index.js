import React from "react";
import { TodoContext } from "../../context/TodoContext";
import './TodoForm.css';

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    function onChange(e) {
        setNewTodoValue(e.target.value);
    }

    function onCancel() {
        setOpenModal(false);
    }

    function onSubmit(e) {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
        setNewTodoValue('');
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <label>Crea un todo</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla"
            />
            <div className="buttons">
                <button
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                >
                    Anadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };