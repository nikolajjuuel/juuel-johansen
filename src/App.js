import Skills from './Skills';
import './App.scss';
import Menu from './Menu';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="App">

      <Menu />
      <Projects name='name' tools='tools' description='description' />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
