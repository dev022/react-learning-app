// Currently this component is not in use.


import * as React from 'react';
// import { Component } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
// interface SignUpFormProps {
    
// }
 
// interface SignUpFormState {
    
// }
 
const SignUpForm = () => {
//     const { register, handleSubmit, watch, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);

//   console.log(watch("example")); // watch input value by passing the name of it

//   return (
//     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* register your input into the hook by invoking the "register" function */}
//       <input defaultValue="test" {...register("example")} />
      
//       {/* include validation with required or other standard HTML validation rules */}
//       <input {...register("exampleRequired", { required: true })} />
//       {/* errors will return when field validation fails  */}
//       {errors.exampleRequired && <span>This field is required</span>}
      
//       <input type="submit" />
//     </form>
//   );

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        navigate("/pages");
    }

    // navigate dynamically by click on button
    const navigate = useNavigate();
    // const goToCounterList = (e) => {
    //     // e.preventDefault();
    //     navigate("/counterList");
    // }
    
    return (
        <div className='container mt-3'>
            <h3 className='mb-4'>React Hook Form</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-3'>
                    <label>Name</label>
                    <input name="name" className='form-control' {...register("name", { required: true, maxLength:20 }) } />
                    {errors?.name && errors?.name?.type === "required" && <span className='text-danger'>Name is required</span>}
                    {errors?.name && errors?.name?.type === "maxLength" && <span className='text-danger'>Name should not contains more then 20 characters</span>}
                </div>
                <div className='mb-3'>
                    <label>Email</label>
                    <input type="email" name="email" className='form-control' {...register("email", { required: true })} />
                    {errors?.email && <span className='text-danger'>Email is required</span>}
                </div>
                <div className='mb-3'>
                    <label>Password</label>
                    {/* we can also specify message in register function */}
                    <input type="password" name="password" className='form-control' {...register("password", { required: { value: true, message:"Password is required" } , pattern: { value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, message:"Please enter valid password" } })} />
                    {errors?.password && <span className='text-danger'>{errors?.password?.message}</span>}
                    {/* {errors?.password && errors?.password?.type === "required" && <span>Password is required</span>}
                    {errors?.password && errors?.password?.type === "pattern" && <span>Please enter valid password</span>} */}
                </div>
                <div className='mb-3'>
                    <button className='btn btn-primary btn-sm' type='submit'>Submit</button>
                </div>
                {/* <div>
                    <button type='button' className='btn btn-secondary btn-sm' onClick={goToCounterList}>Go to Counter List</button>
                </div> */}
            </form>
        </div>
    );
};

// class SignUpForm extends Component<any, any> {
//     state = {};
//     render() {
//         return ( 
//             <h1>Sign Up</h1>

//         );
//     }
// }
 
export default SignUpForm;