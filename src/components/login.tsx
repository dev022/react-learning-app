import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        localStorage.setItem('userLogin', JSON.stringify(data));
        navigate("/pages");
    }

    // navigate dynamically by click on button
    const navigate = useNavigate();

    return (
        <div className='container mt-3'>
            <div className="row d-flex justify-content-center">
                <div className="col-9">
                    <h3 className='mb-4'>Login</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                            <button className='btn btn-primary' type='submit'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;