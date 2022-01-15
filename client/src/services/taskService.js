import axios from 'axios';
const apiURL =  "http://localhost:8080/api/task";

export function getAllTask(){
    return axios.get(apiURL);
}

export function getTodayTask(){
    return axios.get(apiURL + '/today');
}

export async function addNewTask(newTask){
    return axios.post(apiURL, newTask);
    // await axios.post(apiURL, newTask).then(response => {
    //     console.log(response.data);
    // });
}

export function updateTask(id, task){
    return axios.put(apiURL + "/" + id, task);
}

export function deleteTask(id){
    return axios.delete(apiURL + "/" + id);
}