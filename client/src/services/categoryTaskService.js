import axios from 'axios';
const apiURL =  "http://localhost:8080/api/categoryTask";

export function addNewCategoryTask(newTask){
    return axios.post(apiURL, newTask);
}