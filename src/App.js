import React from 'react';
import './styles/App.scss';
import { Route, Switch } from 'react-router';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage';
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';
import Locations from './pages/Locations';
import MyWatchList from './pages/MyWatchList';
import EpisodeCharacters from './components/Episodes/EpisodeCharcters/EpisodeCharacters';
import LocataionCharcters from './components/Locations/LocationCharcters/LocationCharcters';

const App = () => {
  return (
    <div className="bg">
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/episodes" component={Episodes} />
        <Route exact path="/episodes/characters" component={EpisodeCharacters} />
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/locations/characters" component={LocataionCharcters} />
        <Route exact path="/mywatchList" component={MyWatchList} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;