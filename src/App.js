import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import LocationsList from './components/LocationsList';
import EpisodeList from './components/EpisodeList';

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
     
      <Route exact path='/' component={WelcomePage}></Route>
      <Route path='/characters' component={CharacterList}></Route>
      <Route path='/locations' component={LocationsList}></Route>
      <Route path='/episodes' component={EpisodeList}></Route>
    </main>
  );
}
