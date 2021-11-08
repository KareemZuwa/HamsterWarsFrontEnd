import { Switch, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Start from './components/start/Start'
import Header from './components/start/Header';
import Contest from './components/contest/Contest';
import Gallery from './components/gallery/Gallery';
import Stats from './components/statistics/Stats';
import History from './components/history/History';

import './App.css';

function App() {

  return (
    <RecoilRoot>
    <div className="App">
      <section className="wrapper">
        <Header />
        <main>
        <Switch>
            <Route path="/" exact> <Start /> </Route>
            <Route path="/tävla"> <Contest /> </Route>
            <Route path="/galleri"> <Gallery /> </Route>
            <Route path="/statistik"> <Stats /> </Route>
            <Route path="/historik"> <History /> </Route>
	    </Switch>
        </main>

      </section>
    </div>
    </RecoilRoot>
  );
}

export default App;
