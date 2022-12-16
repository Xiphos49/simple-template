import './App.css';
import MyTemplate from './components/MyTemplate';

// asset imports
import myWP from './assets/imgs/wp01.png'
import bielefeldWP from './assets/imgs/bielefeldWP.jpg'
import logo from './assets/imgs/remondislogo.png'
import newLogo from './assets/imgs/newlogo.png'


function App() {
  return (
    <div className="App">
      <MyTemplate
        bgImage={myWP}
        alert='NEWS'
        title='Fakten rund um die Abfallart Akkus'
        description='Ein Akkumulator – oder kurz Akku – ist eine wiederaufladbare Batterie.'
        btnText=' Mehr erfahren'
        website='www.remondis-nachhaltigkeit.de'
        logo={logo}
      />
      <MyTemplate
        bgImage={bielefeldWP}
        alert='UPDATE'
        title='This is a second example title for an update'
        description='The update is that we used different content for the same component.'
        btnText=' New Button Text'
        website='www.another-website-name.com'
        logo={newLogo}
      />
    </div>
  );
}

export default App;