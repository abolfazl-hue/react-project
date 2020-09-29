import React , {useContext} from 'react'
import Abolfazl from './../../contexts/abolfazl'
import Section from './section'
import Nav from './nav';
import Load from './../../loading/load'

function Home(props){
    
    const abolfazl = useContext(Abolfazl)
    
    return(
        <>
            <Section />
                <div className="todosList">
                    <div className="container">
                        <div className="d-flex flex-column align-items-center ">
                            {
                                abolfazl.loading
                                ? (
                                    <Load/>
                                    )
                                : (
                                    <Nav/>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </>
    )
}



export default Home