import User from '../entities/User'
import UserDetail from '../entities/UserDetail'

class userServices {

    constructor(){
        this.headers = {
            'Content-Type': 'application/json',
            'Key': 'bitbook',
            'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
        }
    }

    getUsers() {
        return fetch(`http://bitbookapi.azurewebsites.net/api/users`, {
            headers: this.headers,
            method: 'GET'
        })
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                return response.map((el) => {
                    return new User(el)
                })
            })
    }

    getProfile() {
        return fetch(`http://bitbookapi.azurewebsites.net/api/profile`, {
            headers: this.headers,
            method: 'GET'
        })
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                return new UserDetail(response)
            })
    }

    getUserDetail(id) {
        return fetch(`http://bitbookapi.azurewebsites.net/api/users/${id}`, {
            headers: this.headers,
            method: 'GET'
        })
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                return new UserDetail(response)
            })
    }

    updateProfile(url, data) { // image/name/description
        return fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: this.headers,
        })
    }
}

const userService = new userServices();
export default userService;