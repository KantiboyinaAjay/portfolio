import About from './Component/About';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Project from './Component/Project';
import Skill from './Component/Skill';
import './App.css'

function App() {
  return (
    <div>
      <Header/>
      <main>
        <About/>
        <Skill/>
        <Project/>
        <Contact/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
