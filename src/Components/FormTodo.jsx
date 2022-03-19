import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTask} from '../Redux/Actions/actions'
import {Button} from 'react-bootstrap'


const FormTodo = () => {

    const [newTask, setNewTask]=useState('')
    const handleChange=(e)=>{
        setNewTask(e.target.value)
    }
    const dispatch = useDispatch()
    const handleSubmit=(e)=>{ 
        e.preventDefault()
        dispatch(addTask({
            description : newTask
        }))
        setNewTask('')

    }     
    return (
        <form className ="form">
            <input
            type="text"
            placeholder='Type a Todo here ...'
            className='input-add'
            required
            onChange={handleChange} 
            value={newTask}
            style={{width:"40rem" ,height:"3rem" ,borderColor:"white"}}
            />
        
            <Button variant="success" type='submit' 
            className='btn-add' 
            style ={{ margin:"2rem" ,width:"10rem"}}  
            onClick={handleSubmit}> 
            Add
            </Button>
        </form>
        
    );
};

export default FormTodo



//input
//style={{width:"40rem" ,height:"3rem" ,borderColor:"white"}}
//button
//style ={{ margin:"2rem" ,width:"10rem"} } 