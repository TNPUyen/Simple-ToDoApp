import axios from 'axios';
const apiURL =  "http://localhost:8080/api/category";

export function getAllCategories(userId){
    return axios.get(apiURL + "?userId=" + userId).then((response) => {
        return response.data
    });;
}

export function addNewCategory(newCategory){
    return axios.post(apiURL, newCategory);
    // return axios.post(apiURL, newCategory).then((response)=>{
    //     response.data;
    // });
}

export function updateCategory(id, category){
    return axios.put(apiURL + "/" + id, category);
}

export function deleteCategory(id){
    return axios.delete(apiURL + "/" + id);
}