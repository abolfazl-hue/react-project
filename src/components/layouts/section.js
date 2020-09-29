import React from 'react'
import Form from './form.js'

function Section(props){
    
    
    return(
        <section className="jumbotron">
            <div className="container d-flex flex-column align-items-center">
                <h4 className = 'mb-3'> add some works to do:</h4>
                    <Form  />
            </div>
        </section>
    )
}



export default Section