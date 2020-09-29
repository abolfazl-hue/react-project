import React , {useState , useContext} from 'react';
import TodosContext from './../../contexts/myContext'
import Edit from './../works/editTodo'
import API from './../../API/myAPI'

function TodosList(props){
    
    const [edit , setEdit] = useState(false)
    
    const myContext = useContext(TodosContext)
    
    let {item} = props
    
    let editHandler = (text) => {
        myContext.dispatch({type : 'loading_todo' , payload : {status : true}})
        API.put(`todos/${item.key}.json` , {text : text , done : item.done})
        .then(response => myContext.dispatch({type : 'edit_todo' , payload : {key : item.key , text : text}}))
        .then(success => myContext.dispatch({type : 'loading_todo' , payload : {status : false}}))
        .catch(err => console.log(err))
        setEdit(false)
    }
    
    function deleteHandler(){
        myContext.dispatch({type : 'loading_todo' , payload : {status : true}})
        API.delete(`/todos/${item.key}.json`)
        .then(response => myContext.dispatch({type : 'delete_todo' , payload : {key : item.key}}))
        .then(success => myContext.dispatch({type : 'loading_todo' , payload : {status : false}}))
        .catch(err => console.log(err))
    }
    
    function doneHandler(){
        myContext.dispatch({type : 'loading_todo' , payload : {status : true}})
        API.put(`/todos/${item.key}.json` , {text : item.text , done : !item.done})
        .then(response => myContext.dispatch({type : 'done_todo' , payload : {key : item.key}}))
        .then(success => myContext.dispatch({type : 'loading_todo' , payload : {status : false}}))
        .catch(err => console.log(err))
    }
    
    return(
        <>
            {
                !edit
                ? <div className="col-6 mb-2">
                       <div className="d-flex justify-content-between align-items-center border rounded p-3">
                         <div>
                            {item.text}
                          </div>
                          <div>
                                <button type="button" className={`btn ${item.done ? 'btn-warning' : 'btn-success'} btn-sm mr-1`} onClick = {doneHandler}>{item.done ? 'Undone' : 'done' }</button>
                              <button type="button" className="btn btn-secondary btn-sm" onClick = {() => setEdit(true)}>edit</button>
                              <button type="button" className="btn btn-danger btn-sm ml-1" onClick = {deleteHandler}>delete</button>
                           </div>
                         </div>
                       </div> 
                : <Edit edit = {editHandler} text = {item.text} />
            }
        </>
    )
}



export default TodosList;