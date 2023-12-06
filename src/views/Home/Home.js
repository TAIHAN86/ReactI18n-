import React from 'react';
import './Home.css';
import I18n from '../../utils/I18n';
function Home(){

    const users=15;


    return (
        <>
  <h1>{I18n("welcomemessage")}</h1>

  <p>{I18n("normalmessage")}</p>
  
  <h3>{I18n("greetingmessage")}</h3>
<select 
defaultValue={localStorage.getItem("lang")}
onChange={(e)=>{
    localStorage.setItem("lang",e.target.value);
    window.location.reload();
}}>
    <option value="mr">Marathi</option>
    <option value="hi">Hindi</option>
    <option value="en">English</option>
</select>

  <p>{users} {I18n("Userscount")}</p>
  </>
    )
}

export default Home