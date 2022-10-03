import { useState } from 'react'
import {Header} from './components/Header';
import { Main }  from './components/Main';
import { Data }  from './components/Data';
import { Footer }  from './components/Footer';
import { OurServices }  from './components/OurServices';
import { ServicesOne } from './components/ServicesOne';
import { ServicesTwo } from './components/ServicesTwo';
import { ServicesThree } from './components/ServicesThree';
import { TheTeam } from './components/TheTeam';
import './App.css'

function App() {
  

  return (
    <div className="App">
        <Header/>
        <Main/>
        <ServicesOne/>
        <ServicesTwo/>
        <ServicesThree/>
        <OurServices/>
        <TheTeam/>
        <Data/>
        <Footer/>
      </div>
  )
}

export default App
