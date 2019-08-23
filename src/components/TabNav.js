import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/

function handleChange (e){

}

const panes = [
    { menuItem: 'Home Page', render: () => <NavLink to='/'><Tab.Pane>CLICK HERE FOR HOME PAGE</Tab.Pane></NavLink>},
    { menuItem: 'Characters', render: () => <NavLink to='/characters'><Tab.Pane>CLICK HERE FOR CHARACTERS PAGE</Tab.Pane></NavLink> },
    { menuItem: 'Locations', render: () => <NavLink to='/locations'> <Tab.Pane>CLICK HERE FOR LOCATIONS PAGE</Tab.Pane></NavLink>},
    { menuItem: 'Episodes', render: () => <NavLink to='/episodes'><Tab.Pane>CLICK HERE FOR EPISODES PAGE</Tab.Pane></NavLink> },
  ]
  
  const TabExampleBasic = () => <Tab panes={panes} />
  
  export default TabExampleBasic
