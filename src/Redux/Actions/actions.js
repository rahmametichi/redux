import { ADD_TASK ,COMPLETE_TASK , DELETE_TASK, EDIT_TASK} from '../Constants/actionsType'

export const addTask =(payload)=>{
    return{
        type:ADD_TASK,
        payload
    };
};
export const completeTask=(payload)=>{
    return{
        type:COMPLETE_TASK,
        payload,
    };
};
export const editeTask=(payload)=>{
    return{
        type:EDIT_TASK,
        payload,
    };
};
export  const deleteTask = (payload) => {
    return {
        type : DELETE_TASK,
        payload,
    };
};