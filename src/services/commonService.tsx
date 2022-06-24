import axios from "axios";

export class CommonService{

    // used axios to call API (make http request) , get user details
    public async getUserDetails(){
        return await axios.get('https://randomuser.me/api/').then(response => {
            console.log(response);
            return response;
        }).catch(error => {
            console.log(error);
            return error;
        });
    }
}