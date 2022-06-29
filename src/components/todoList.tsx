import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeAllTodo, removeTodo, toggleTodo } from '../action';
import { RootStoreState } from '../store';

const TodoList = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    // add to do 
    const onSubmitTodo = (data) => {
        // dispatch the addTodo method of action.
        dispatch(addTodo(data));
        // to reset form
        reset();
    }

    

    // useDispatch() hook is used to access the dispatch function of redux.
    const dispatch = useDispatch();

    // useSelector() hook is used to access the redux store's state.
    // get toDoArray from store
    const toDoArray = useSelector((state:RootStoreState) => state.todoReducer.toDoArray);
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

    return(
        <div className="container todo-listPage py-4">
            <h4>Create Todo:</h4>
            <form onSubmit={handleSubmit(onSubmitTodo)}>
                <div className="row">
                    <div className="col-10 mb-3">
                        {/* also we can add validate function to form input field for custom validation , below we have 
                            checked only blank spaces in input field is not valid input.
                        */}
                        <input type="text" className="form-control" placeholder="Description" {...register("description", { required: true , validate: (value) => { return !!value.trim() } })}/>
                        {errors?.description && <span className='text-danger'>Description is required</span>}
                    </div>
                    <div className="col-10 mb-3">
                        <button type="submit" className="btn btn-primary" >Create</button>
                    </div>
                </div>
            </form>
            <br />
            <div className='d-flex justify-content-between'>
                <h4>Todos List:</h4>
                <button className="btn btn-danger" disabled={toDoArray.length === 0} onClick={() => {onDeleteAllTodo()}}>Delete All</button>
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
                        <tr className={ data.completed ? 'completedTodo' : '' } key={data.id}>
                            <td onClick={() => {onToggleTodo(data.id)}}><span>{data.id}</span></td>
                            <td onClick={() => {onToggleTodo(data.id)}}><span>{data.description}</span></td>
                            <td><button className="btn btn-danger btn-sm" onClick={() => {onDeleteTodo(data.id)}}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default TodoList;