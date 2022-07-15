import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CommonService } from '../services/commonService';
// import { Component } from 'react';

// interface HomeProps {

// }

// interface HomeState {

// }

const Home = () => {
    const navigate = useNavigate();

    const commonService = new CommonService();
    const [universityList, setUniversityList] = useState<any>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getUniversitiesList();

        // code that will executed while component unmount from DOM
        return () => {
            console.log('Home component unmount');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // get all list of university
    const getUniversitiesList = async () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
        const getList = await commonService.getAllListOfUniversity();
        if (getList && getList.name !== 'AxiosError') {
            setUniversityList(getList?.data?.slice(0, 100));
            console.log(universityList);
            setLoading(false);
        }
    }

    // set search params when navigate to other route.
    // const goToAbout = () => {
    //     navigate({
    //         pathname:'/pages/about',
    //         search: '?name=test&age=20'
    //     });
    // }

    // when click on any university , navigate to other route & set search params for that route.
    const onSelectedUniversity = (university) => {
        navigate({
            pathname: '/pages/about',
            search: `?name=${university?.name}&domain=${university?.domains[0]}&country=${university?.country}&url=${university?.web_pages[0]}`
        });
    }

    return (
        <div className='container m-2'>
            {/* <h3>Home Component</h3> */}
            {/* <button className='btn btn-secondary btn-sm my-3' onClick={goToAbout}>Go to About Page with search params</button> */}

            <h3>University List : </h3>
            {loading ? (<div className='mt-4'>Loading Data...</div>) : (
                <div className='p-3'>
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Domain</th>
                                    <th scope="col">Country</th>
                                    <th scope="col">URL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {universityList?.map(data => (
                                    <tr key={data?.name} onClick={() => { onSelectedUniversity(data) }} className="universityTableRow">
                                        <th scope="row">{data?.name}</th>
                                        <td>{data?.domains[0]}</td>
                                        <td>{data?.country}</td>
                                        <td>{data?.web_pages[0]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    )
}

// class Home extends Component<HomeProps, HomeState> {
//     state = {};
//     render() { 
//         return ( 
//             <div>
//                 <h3>Home Component</h3>
//                 <button onClick={goToAbout}>Go to About Page with search params</button>
//             </div>
//         );
//     }
// }

export default Home;