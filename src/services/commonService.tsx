import { config } from "./api.config";
import { ApiService } from "./api.service";

export class CommonService {

    // constructor() { }

    private apiService = new ApiService();

    // used axios to call API (make http request) , get user details
    public async getUserDetails() {
        let url = config.api.user.getUserDetails;

        return await this.apiService.get(url).then(response => {
            console.log(response);
            return response;
        }).catch(error => {
            console.log(error);
            return error;
        });

        // return await axios.get('https://randomuser.me/api/').then(response => {
        //     console.log(response);
        //     return response;
        // }).catch(error => {
        //     console.log(error);
        //     return error;
        // });
    }

    // get list of university
    public async getAllListOfUniversity() {
        let url = config.api.university.getUniversityList;

        return await this.apiService.get(url).then(response => {
            console.log(response);
            return response;
        }).catch(error => {
            console.log(error);
            return error;
        });
    }
}