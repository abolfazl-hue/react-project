import React , {  useReducer , useEffect } from 'react';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import API from './../API/myAPI'
import 'bootstrap/dist/css/bootstrap.css'

//import 404
import Error from './../error/404page'
//import context
import TodosContext from './../contexts/myContext'
import Abolfazl from './../contexts/abolfazl'

//import reducer
import myReducer from './../reducers/myReducer'

//import loading
import Load from './../loading/load'

// Import layouts
import Header from './layouts/Header';
import Home from './layouts/home';
import About from './layouts/about';
import Contact from './layouts/contact';


function App(props){

    const [state , dispatch] = useReducer(myReducer, {
        todo : [],
        stateDone : false,
        married : false,
        loading : false
    })
    
    
    function getData(data){
        let todo = Object.entries(data).map(([key , item]) => {
            return {...item , key}
        })
        dispatch({type : 'init_todo' , payload : {todo}})
    }
    
    useEffect( () => {
        dispatch({type : 'loading_todo' , payload : {status : true}})
        API.get(`/todos.json`)
        .then(response => getData(response.data))
        .then(success =>  dispatch({type : 'loading_todo' , payload : {status : false}}))
        .catch(err => console.log(err))
    },[])        

        return (
            <Router>
                <Abolfazl.Provider value = {{
                    married : state.married,
                    loading : state.loading,
                    dispatch

                }} >
                    <TodosContext.Provider value = {{
                            stateDone : state.stateDone, 
                            todo : state.todo,
                           dispatch
                        }}>
                        <div className="App">
                                <Header />
                                <main>
                                <Switch>
                                    <Route exact path = '/' component = {Home} />
                                    <Route path = '/about' component = {About} />
                                    <Route path = '/contact' component = {Contact} />
                                    <Route exact path = '' component = {Error} />
                                </Switch>
                                </main>
                            </div>
                    </TodosContext.Provider>
                </Abolfazl.Provider>
            </Router>
        )
}


export default App;
