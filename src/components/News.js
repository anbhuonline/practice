import React from 'react'

import newsdata from '../components/data/newsdata'

export default function News() {
    // console.log(newsdata)
    const myTitle = {
        color: "blue",
        fontSize:"25px"
    };
    const mySTitle = {
        color: "grey",
        fontSize:"12px"
      };
    const myCont = {        
        fontSize:"14px"
      };

      function brief(){
        alert("Brief page will be opened here!")
      }

    return (
        <>
        <div>
        {newsdata.map((data, key) => {
          return (
           
            <div key={data.id}>              
              <a style={myTitle} onClick={brief}>
              {data.title} 
              </a><hr/>
                <h2 style={mySTitle} >
                {data.subtitle} 
                </h2><hr/>
                <h5 style={myCont} >
                {data.content}
                </h5><br/><br/><br/>
            </div>
            
          );
        })}
      </div>
        </>
    )
}
