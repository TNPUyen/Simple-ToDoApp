import axios from 'axios';
const apiURL =  "http://localhost:8080/api/category";


export function getSharedList(id){
    return axios.get(apiURL + '/sharedList?userId=' + id).then((response) => {
        return response.data
    });
}

// export function updateCategoryTask(id, task){
//     return axios.put(apiURL + "/" + id, task);
// }

// export function deleteCategoryTask(id){
//     return axios.delete(apiURL + "/" + id);
// }