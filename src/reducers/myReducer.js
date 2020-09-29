import React from 'react'


function MyReducer(state,action){
    switch(action.type){
        case 'init_todo' :
            return initTodo(state , action)
        case 'loading_todo' :
            return loadTodo(state , action)
        case 'add_todo' :
            return addTodo(state , action);
        case 'delete_todo' :
            return deleteTodo(state , action);
        case 'done_todo' :
            return doneTodo(state , action);
        case 'edit_todo' :
            return editTodo(state , action);
        case 'stateDone_todo' :
            return stateDoneTodo(state , action);
        case 'letIn_todo' :
            return letIn(state);
        case 'letOut_todo' :
            return letOut(state);
    }
}

export default MyReducer

    
    function loadTodo(state , action){
        let {status} = action.payload
        return{
            ...state,
            loading : status
        }
    }


    function initTodo(state , action){
        let {todo} = action.payload
        return{
            ...state,
            todo : todo
        }
    }

    let addTodo = (state , action) => {
        let {todo} = action.payload
        return{
            ...state,
            todo : [
                ...state.todo,
                todo
            ]
        }
    }


   function  deleteTodo(state , action){
        let {key} = action.payload
        let newFilter = state.todo.filter(item => item.key !== key)
        
        return{
            ...state,
            todo : [
                ...newFilter
            ]
        }
    }


    function  doneTodo(state , action){
        let {key} = action.payload
        let {todo} = state
        let item = todo.find(item => item.key === key)
        item.done = !item.done
        let newFilter = todo.filter(item => item.key !== key)
        
        return{
            ...state,
            todo : [
                item,
                ...newFilter
            ]
        }
    }

    
    function  editTodo(state , action){
        let {key , text} = action.payload
        let {todo} = state
        let item = todo.find(item => item.key == key)
        item.text = text
        let newFilter = todo.filter(item => item.key !== key)
        
        return{
            ...state,
            todo : [
                item,
                ...newFilter
            ]
        }
    }

    function  stateDoneTodo(state , action){
        let {status} = action.payload
        return{
            ...state,
            stateDone : status
        }
    }

    function  letOut(state){
        return{
            ...state,
            married : false
        }
    }
    function  letIn(state){
        return{
            ...state,
            married : true
        }
    }


