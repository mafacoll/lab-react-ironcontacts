import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'


function Contacts(){

  return (
    <div > {
      contacts.slice(0,5).map((elem) => {
      return(
        <div>
        <h1>IronContacts</h1>
        {elem.picture}
        {elem.name}
        {elem.popularity}
        {elem.wonOscar}
        {elem.wonEmmy}
       </div>
       )
       
       })
      }
    </div>
  )

}

function Prize(){
   contacts.map((elem, index)=>{
     return(
      <div>
      {elem.wonEmmy == true && '🏆'}
      {elem.wonOscar == true && '🏆'}
      </div> 
           )
  }) 
}

function Add(){
  function handleAdd(){
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)]
    let newArray = [randomContact, ...contacts]
  }

  <div>
    <button onClick={handleAdd}>Add Random contact</button>
  </div>
}

function Sort(){
  function handleSortPopularity(){
    let clonePoularity = JSON.parse(JSON.stringify(contacts))
    clonePoularity.sort((first, second) =>{
      if(first.popularity > second.popularity){
        return 1
      }
      else if(first.popularity < second.popularity){
        return -1
      }
      else{
        return 0
      }

    })
  }

  function handleSortByname(){
    let cloneName = JSON.parse(JSON.stringify(contacts))
    cloneName.sort((first, second) => {
      if (first.name > second.name) {
          return 1
      }
      else if (first.name < second.name) {
          return -1
      }
      else {
          return 0
      }
  })
  }



  <div>
    <button onClick={handleSortPopularity}>Sort by popularity</button>
    <button onClick={handleSortByname}>Sort by name</button>

  </div>
}

function Remove(){
  function handleDelete(id){
    let filterContacts = contacts.filter((elem)=>{
      return elem.id !== id
    })
  }
  <button onClick={() => { handleDelete(elem.id) }}>Delete</button>

}

function App() {
  return (
    <div className="App">
    <Contacts />
    <Prize />
    <Add/>
    <Sort/>
    <Remove/>
    </div>
  );
}

export default App;
