import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTodo } from '../action';

const AddTodo = () => {
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

    return (
        <div className="add-todoPage">
            <h4>Create Todo:</h4>
            <form onSubmit={handleSubmit(onSubmitTodo)}>
                <div className="row">
                    <div className="col-10 mb-3">
                        {/* also we can add validate function to form input field for custom validation , below we have 
                            checked only blank spaces in input field is not valid input.
                        */}
                        <input type="text" className="form-control" placeholder="Description" {...register("description", { required: true, validate: (value) => { return !!value.trim() } })} />
                        {errors?.description && <span className='text-danger'>Description is required</span>}
                    </div>
                    <div className="col-10 mb-3">
                        <button type="submit" className="btn btn-primary" >Create</button>
                    </div>
                </div>
            </form>
            <br />
        </div>
    );

}

export default AddTodo;