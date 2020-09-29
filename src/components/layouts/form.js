import React , {useState , useContext} from 'react';
import TodosContext from './../../contexts/myContext'
import Abolfazl from './../../contexts/abolfazl'
import axios from 'axios'
import API from './../../API/myAPI'



function Form(props){
    
    const [state , setState] = useState({
        text : ''
    })
    
    const myContext = useContext(TodosContext)
    const abolfazl = useContext(Abolfazl)
    
    let formHandler = (e) => {
        let todos = {text : state.text , done : false}
        e.preventDefault()
        myContext.dispatch({type : 'loading_todo' , payload : {status : true}})
        API.post(`/todos.json` , {...todos})
        .then(response => myContext.dispatch({type : 'add_todo' , payload : {todo : {...todos , key : response.data.name} } }) )
        .then(success => myContext.dispatch({type : 'loading_todo' , payload : {status : false}}))
        .catch(err => console.log(err))
        setState({
            text : ''
        })
    }
    
    
    let inputHandler = (e) => {
        setState({
            text : e.target.value
        })
    }
    
    return(
        <>
            {
                !abolfazl.married 
                ? <p>You should login !</p>
                :<form className="form-inline" onSubmit = {formHandler}>
                    <div className="form-group">
                      <input value = {state.text} onChange = {inputHandler} type="text" className="form-control mx-sm-3" placeholder="I want to do ..."/>
                        <button type = 'submit' className="btn btn-primary">Add</button>
                    </div>
                </form>
            }
        </>
    )
}




export default Form