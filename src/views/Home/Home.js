import React from 'react';
import './Home.css';
import I18n from '../../components/I18n';

function Home() {
    const users = 15;

    return (
        <>
             <div className="language-con">  
            <h1 className="main-heading">{I18n("welcomemessage")}</h1>
            <p className="normal-text">{I18n("normalmessage")}</p>
            <h3 className="sub-heading">{I18n("greetingmessage")}</h3>


            <div className="language-container">
           
        <select
          className="language-select"
          defaultValue={localStorage.getItem("lang")}
          onChange={(e) => {
            localStorage.setItem("lang", e.target.value);
            window.location.reload();
          }}
        >
          
          <option value="mr" className="marathi-option">Marathi</option>
          <option value="hi" className="hindi-option">Hindi</option>
          <option value="en" className="english-option">English</option>
          
        </select>
      </div>
      </div>
      


      
            <p>{users} {I18n("Userscount")}</p>
        </>
    );
}


export default Home;
