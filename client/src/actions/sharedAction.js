import { getSharedList } from "../services/sharedService";
import { getSharedTaskList } from "../services/categoryTaskService";


const getAllSharedList = async (userId)=> {
    try {
        const  data = await getSharedList(userId);
            if(data != null){
                console.log(data)
                return data.sharedList;
            }else{
                return null;
            }
    } catch (error) {
        console.log(error);
    }
}

const handleGetSharedTaskList = async (categoryId)=>{
    try {
        const data = await getSharedTaskList(categoryId);
        if(data != null){
            return data;
        }else{
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}

export const SharedAction = {
    getAllSharedList,
    handleGetSharedTaskList
};