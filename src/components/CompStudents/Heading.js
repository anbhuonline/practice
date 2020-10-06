import React from 'react';
import { Link } from 'react-router-dom';

const Heading = () => {
    return (
        <>
            <article class="panel is-link">
                <p class="panel-heading">
                    Students List&nbsp;&nbsp;
                    <Link className="button is-warning is-small is-outline" to="/AddStudent">
                    <span class="icon is-small"> 
                                        <i class="fas fa-plus  
                                        fa-sm has-text-link "></i> 
                                    </span> 
                    </Link>
                </p>                
            </article>
            
        </>
    )
}

export default Heading
