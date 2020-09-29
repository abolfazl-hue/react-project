import React , {useContext} from 'react'
import TodosContext from './../../contexts/myContext'
import TodosList from './todosList';

function Nav(props){
    
    let myContext = useContext(TodosContext)
    let {todo , stateDone } = myContext
    let filterTodo = todo.filter(item => item.done === stateDone)
    return(
        <>
            <nav className="col-6 mb-3">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a onClick = {() => myContext.dispatch({type : 'stateDone_todo' , payload : {status : false}})} className={`nav-item nav-link ${stateDone ? '' : 'active'}  font-weight-bold`} id="nav-home-tab">undone <span className="badge badge-secondary">{todo.filter(item => item.done === false).length}</span></a>
                    <a onClick = {() => myContext.dispatch({type : 'stateDone_todo' , payload : {status : true}})} className={`nav-item nav-link ${!stateDone ? '' : 'active'}  font-weight-bold`} id="nav-profile-tab">done <span          className="badge badge-success">{todo.filter(item => item.done === true).length}</span></a>
                </div>
            </nav>
                {
                    filterTodo.length === 0
                    ? <p> There are not any works to do ! </p>
                    : filterTodo.map(item => <TodosList key = {item.key} item = {item} />)
                }
        </>
    )
}



export default Nav