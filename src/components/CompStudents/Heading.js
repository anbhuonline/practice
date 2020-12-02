import React from 'react';
import { Link } from 'react-router-dom';

const Heading = () => {
    return (
        <>
            <article className="panel is-link">
                <p className="panel-heading">
                    Students List&nbsp;&nbsp;
                    <Link className="button is-warning is-small is-outline" to="/AddStudent">
                    <span className="icon is-small"> 
                                        <i className="fas fa-user-plus  
                                        fa-sm has-text-link "></i> 
                                    </span> 
                    </Link>
                </p>                
            </article>
            
        </>
    )
}

export default Heading
