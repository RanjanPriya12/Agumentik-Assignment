
import { Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/footer/Footer';
import { Aside } from './components/helper/Aside';
import { Section1 } from './components/helper/section1';
import { Section2 } from './components/helper/section2';
import { Header } from './components/navbar/header';
import { SearchPropertry } from './components/SearchPropertry';


function App() {
  return (
    <div className="App">
      <Header/>
      <Aside/>
      <SearchPropertry/>
      <Section1/>
      <Section2/>
      <Footer/>
    </div>
  );
}

export default App;
