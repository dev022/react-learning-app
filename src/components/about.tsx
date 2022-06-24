// import axios from 'axios';
import * as React from 'react';
import { useEffect , useState} from 'react';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import { CommonService } from '../services/commonService';

// interface AboutProps {
    
// }
 
// interface AboutState {
    
// }

// interface UserDetails{
//     name: object,
//     email: string,
//     phone: string,
//     location: object
// }

const About = () => {
    const commonService = new CommonService();
    const [userDetails, setUserDetails] = useState<any>({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    // get user details
    const getUserDetails = async () => {
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        },3000);
        const getDetails = await commonService.getUserDetails();
        if(getDetails && getDetails.name !== 'AxiosError'){
            setUserDetails(getDetails.data.results[0]);
            console.log(userDetails);
            setLoading(false);
        }
    }

    const navigate = useNavigate();

    // get search params from route.
    const [searchParams,setSearchParams] = useSearchParams();
    const name = searchParams.get('name');
    const age = searchParams.get('age');
    console.log(name,age);

    return ( 
        <div>
            <h3>About</h3>
            {/* if you want to set search params to the same route means current route */}
            <button className='btn btn-secondary btn-sm my-3' onClick={()=>{setSearchParams({name:'test2', age:'20'})}}>Set search params to same route</button>

            <h4>Value From Search Params</h4>
            <p>Name is : {name ? name : '--'}</p>
            <p>Age is : {age ? age : '--'}</p>

            <div>
                <button className='btn btn-primary btn-sm me-3' onClick={() => { navigate("aboutChild1") }}>Load Child1</button>
                <button className='btn btn-primary btn-sm' onClick={() => { navigate("aboutChild2") }}>Load Child2</button>
            </div>
            {/* The <Outlet /> allows you to render components of its child routes. */}
            <Outlet />

            {/* Display data from API */}
            {loading ? (<div className='mt-4'>Loading Data...</div>) : (
                <div className="row mt-4">
                <div className="col-md-8">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h4 className='mb-3'>Data From User Details API</h4>
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6>Name</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    {userDetails?.name?.title +' '+ userDetails?.name?.first +' '+ userDetails?.name?.last}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6>Email</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    {userDetails?.email}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6>Phone</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    {userDetails?.phone}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6>Address</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    {userDetails?.location?.street?.name +', '+ userDetails?.location?.city +', '+ userDetails?.location?.state +', '+ userDetails?.location?.country}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
}

// class About extends Component<AboutProps, AboutState> {
//     render() { 
//         return ( 
//             <div>
//                 <h3>About</h3>
//                 {/* The <Outlet /> allows you to render components to its child routes. */}
//                 <Outlet />
//             </div>
//         );
//     }
// }
 
export default About;