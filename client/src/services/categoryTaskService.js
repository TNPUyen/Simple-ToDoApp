import axios from 'axios';
const apiURL =  "http://localhost:8080/api/categoryTask";

export function addNewCategoryTask(newTask){
    return axios.post(apiURL, newTask);
}

export function getCategoryTaskList(id){
    return axios.get(apiURL + '/' + id);
}

export function updateCategoryTask(id, task){
    return axios.put(apiURL + "/" + id, task);
}

export function deleteCategoryTask(id){
    return axios.delete(apiURL + "/" + id);
}