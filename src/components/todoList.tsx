import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeAllTodo, removeTodo, toggleTodo } from '../action';
import { RootStoreState } from '../store';
import AddTodo from './addTodo';

const TodoList = () => {

    // useDispatch() hook is used to access the dispatch function of redux.
    const dispatch = useDispatch();

    // useSelector() hook is used to access the redux store's state.
    // get toDoArray from store
    const toDoArray = useSelector((state: RootStoreState) => state.todoReducer.toDoArray);
    console.log(toDoArray);

    // toggle todo
    const onToggleTodo = (id) => {
        dispatch(toggleTodo(id));
    }

    // delete todo
    const onDeleteTodo = (id) => {
        dispatch(removeTodo(id));
    }

    // delete all todo
    const onDeleteAllTodo = () => {
        dispatch(removeAllTodo());
    }

    return (
        <div className='container py-4'>
            <AddTodo />
            <div className="todo-listPage">
                <div className='d-flex justify-content-between'>
                    <h4>Todos List:</h4>
                    <button className="btn btn-danger" disabled={toDoArray.length === 0} onClick={() => { onDeleteAllTodo() }}>Delete All</button>
                </div>
                <table className="table">
                    <thead className="thead-inverse">
                        <tr>
                            <th>#</th>
                            <th>Todo Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toDoArray?.map(data =>
                            <tr className={data.completed ? 'completedTodo' : ''} key={data.id}>
                                <td onClick={() => { onToggleTodo(data.id) }}><span>{data.id}</span></td>
                                <td onClick={() => { onToggleTodo(data.id) }}><span>{data.description}</span></td>
                                <td><button className="btn btn-danger btn-sm" onClick={() => { onDeleteTodo(data.id) }}>Delete</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TodoList;