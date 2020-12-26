import React, {createContext, useReducer} from 'react';
import todoReducer from "../reducer/todoReducer";
import {useLocalStorageReducer} from "../hooks/useLocalStorageReducer"


const init = [
    {id: 1, task: "Mow the lawn using goats", completed: false},
    {id: 2, task: "Release lady bugs into garden", completed: true}
];

export const TodosContext = createContext(init);
export const DispatchContext = createContext();

export const TodosProvider = (props) => {
    const [todos, dispatch] = useLocalStorageReducer("todos", init, todoReducer)

    return (
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}