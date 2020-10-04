import React, { Component } from 'react';
import ForgotPassword from './componentsJSX/ForgotPassword';
import EnterPhotos from './componentsJSX/EnterPhotos';
import EnterForm from './componentsJSX/EnterForm';
import RegisterForm from './componentsJSX/RegisterForm';

function enterFormShake(el1,el2){
    el1.style.marginLeft='20px';
    el1.style.background='rgba(255, 0, 0, 0.5)';
    el2.style.marginLeft='-20px';
    el2.style.background='rgba(255, 0, 0, 0.5)';
    setTimeout(()=>el1.style.marginLeft='-20px',200)
    setTimeout(()=>{el1.style.marginLeft='0px'; el1.style.background='rgba(255, 255, 255, 0.5)'},400)
    setTimeout(()=>el2.style.marginLeft='20px',200)
    setTimeout(()=>{el2.style.marginLeft='0px'; el2.style.background='rgba(255, 255, 255, 0.5)'},400)

}

async function postUsersToReg(user){
  try {
    const response = await fetch('http://localhost:5000/userstoreg', {
      method: 'POST', 
      body: JSON.stringify({id:user.id,email:user.email,name:user.name,surname:user.surname,old:user.old,password:user.password,
        status:user.status,familyStatus:user.familyStatus,interests:user.interests,purpose:user.purpose,
        links:user.links,rating:user.rating}), 
      headers: {'Content-Type': 'application/json'}
    });
    const json = await response.json();
    console.log(JSON.stringify(json));
  } catch (error) {
    console.error(error);
  }
}

class Enter extends Component{

  render(){
    return ( 
      <div className="App">
        <ForgotPassword />
        <RegisterForm registerClick={()=>fetch('http://localhost:5000/userstoreg').then(res=>res.json())
        .then(data=>[].every.call(document.getElementsByClassName('registerInputs'),(e)=>e.value!=='')?
          document.getElementById('registerPassword').value===document.getElementById('registerPasswordRepeat').value?
          +document.getElementById('registerOld').value>=18?
          data.find(e=>e.email===document.getElementById('registerEmail').value)?
          document.getElementById('registerEmail').classList.add('emptyRegisterData')
          :postUsersToReg({id:(new Date()).getTime(),email:document.getElementById('registerEmail').value,
          name:document.getElementById('registerName').value,surname:document.getElementById('registerSurname').value,
          old:document.getElementById('registerOld').value,password:document.getElementById('registerPassword').value,
          status:'Add status',familyStatus:'Add family status',interests:['Add interests'],purpose:'Add purpose',links:['Add links'],rating:0})
          :document.getElementById('registerOld').classList.add('emptyRegisterData')
          :document.getElementById('registerPasswordRepeat').classList.add('emptyRegisterData')
          :[].map.call(document.getElementsByClassName('registerInputs'),(e)=>e.value!==''?e:e.classList.add('emptyRegisterData')))}
          />
        <EnterPhotos />
        <EnterForm enterClick={()=>fetch('http://localhost:5000/users').then(res=>res.json())
        .then(data=>
          data.find(e=>e.email===document.getElementById('enterEmail').value&&e.password===document.getElementById('enterPassword').value)?
          document.location.href='http://localhost:3000/account':enterFormShake(document.getElementById('enterEmailDiv'),document.getElementById('enterPasswordDiv')))
        } />
      </div>
    );
  }
}

export default Enter;
