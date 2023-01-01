import './css/app.css';
// j'importe les composants Routes et Route pour manipuler les routes depuis react-router-dom grace à la commande que j'ai tapé avant "npm install -i react-router-dom"
import {Routes,Route} from 'react-router-dom';
// import React from 'react';
import Home from './pages/Home';
import Menu from './components/Menu';
import TechnoAdd from './pages/TechnoAdd';
import TechnoList from './pages/TechnoList';
import {useState} from "react";
//  j'importe le package uuid installé manuellement qui me génère un id unique
import {v4 as uuidv4} from "uuid"

const App = () => {
  const [technos,setTechnos] = useState([]) 

  function addTechno(techno){
    console.log(techno)
    setTechnos([...technos,{...techno,technoid:uuidv4()}])
  }

  function supprimerTechno(id){
    setTechnos(technos.filter(techno => techno.technoid !== id))
  }

  return (
      <>
        <Menu />
        <Routes>
          <Route path="/" element={<Home/>} />
            <Route path="/ajouter" element={<TechnoAdd addTechno={addTechno} />} />
            <Route path="/liste" element={<TechnoList technos={technos} supprimerTechno={supprimerTechno} />} />
            <Route path="*" element={<Home/>} />
        </Routes>
      </>
  );
};

export default App;