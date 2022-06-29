// this are the actions which are handled by the reducer function.

export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    todo
});

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
});

export const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    id
});

export const removeAllTodo = () => ({
    type: 'REMOVE_ALL_TODOS'
});