export interface toDo {
    id: number;
    description: string;
    completed: boolean;
}

export interface InitialState{
    toDoArray : toDo[]
}

// initial state , its used when setting up the store of our app.
const initial_state: InitialState = {
    toDoArray: []
}

const TodoReducer = (state = initial_state , action) => {
    switch (action.type) {
        case 'ADD_TODO':
            console.log(state,action);
            action.todo.id = state.toDoArray.length + 1;    
            return Object.assign({}, state, {
                toDoArray: state.toDoArray.concat(Object.assign({}, action.todo))
            })
        
        case 'TOGGLE_TODO':
            console.log(state,action);
            var todo = state.toDoArray.find(t => t.id === action.id);
            var index = state.toDoArray.indexOf(todo);
            return Object.assign({}, state, {
                toDoArray: [
                    // get all elements before this index (this index el is not covered).
                    ...state.toDoArray.slice(0, index),
                    // change isCompleted property in current index element.
                    Object.assign({}, todo, {completed: !todo.completed}),
                    // get all elements after this index.
                    ...state.toDoArray.slice(index+1)
                ]
            })

        case 'REMOVE_TODO':
            console.log(state,action);
            return Object.assign({}, state, {
                toDoArray: state.toDoArray.filter(t => t.id !== action.id)
            })
            
        case 'REMOVE_ALL_TODOS':
            console.log(state,action);
            return Object.assign({}, state, {
                toDoArray: []
            })
    }
    return state;
}

export default TodoReducer;