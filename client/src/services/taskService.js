import axios from 'axios';
const apiURL =  "http://localhost:8080/api/task";

export function getAllTask(){
    return axios.get(apiURL);
}

export function addNewTask(newTask){
    return axios.post(apiURL, newTask);
}

export function updateTask(id, task){
    return axios.put(apiURL + "/" + id, task);
}

export function deleteTask(id){
    return axios.delete(apiURL + "/" + id);
}