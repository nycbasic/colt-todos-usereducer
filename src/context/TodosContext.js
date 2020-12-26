import React, {createContext} from 'react';
import useTodoState from "../hooks/useTodoState";

const init = [
    {id: 1, task: "Mow the lawn using goats", completed: false},
    {id: 2, task: "Release lady bugs into garden", completed: true}
];

export const TodosContext = createContext(init);

export const TodosProvider = (props) => {
    const todosStuff = useTodoState(init)

    return (
        <TodosContext.Provider value={todosStuff}>
            {props.children}
        </TodosContext.Provider>
    )
}