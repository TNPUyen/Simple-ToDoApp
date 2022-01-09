import axios from 'axios';
const apiURL =  "http://localhost:8080/api/category";

export function getAllCategories(){
    return axios.get(apiURL);
}

export function addNewCategory(newCategory){
    console.log(newCategory)
    return axios.post(apiURL, newCategory);
}

export function updateCategory(id, category){
    return axios.put(apiURL + "/" + id, category);
}

export function deleteCategory(id){
    return axios.delete(apiURL + "/" + id);
}