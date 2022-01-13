import axios from 'axios';
const apiURL =  "http://localhost:8080/api/user";

// export function getAllTask(){
//     return axios.get(apiURL);
// }

export function addNewUser(newUser){
    return axios.post(apiURL + "/register" , newUser);
}

export function login(user){
    return axios.post(apiURL + "/login" , user).then((response) => {
        if(response.data.message == "Login successfully!"){
            localStorage.setItem('userInfo', JSON.stringify(response.data.user));
        }else{
            return response.data.message;
        }
        return response.data;
    });
}

// export function updateUser(id, user){
//     return axios.put(apiURL + "/" + id, user);
// }

// export function deleteTask(id){
//     return axios.delete(apiURL + "/" + id);
// }