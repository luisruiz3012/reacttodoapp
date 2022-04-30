import React from "react";
import { TodoContext } from "../../context/TodoContext";
import './TodoSearch.css';

function TodoSearch() {

    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <section className="todoSearch">
            <input 
            onChange={onSearchValueChange} 
            type="text"
            value={searchValue}
            placeholder="Cebolla" 
            />
        </section>
    );
}

export {TodoSearch};