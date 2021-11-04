import React from 'react';
import { Route, Switch } from 'react-router';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage';
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';
import Locations from './pages/Locations';
import MyWatchList from './pages/MyWatchList';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/episodes" component={Episodes} />
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/myWatchList" component={MyWatchList} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;