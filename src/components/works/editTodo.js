import React , {useState} from 'react'


function Edit(props){
    
    const [state , setState] = useState({
        text : props.text
    })
    
    let inputHandler = (e) => {
        setState({
            text : e.target.value 
        })
    }
    
    return(
        <div className = "col-6 mb-2">
           <div className="d-flex justify-content-between align-items-center border rounded p-3">
             <div>
                <input className="form-control" onChange = {inputHandler} value = {state.text}/>
              </div>
              <div>
                  <button type="button" className="btn btn-secondary btn-sm" onClick = {() => props.edit(state.text)}>edit</button>
               </div>
             </div>
           </div> 
    )
}



export default Edit