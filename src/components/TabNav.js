import React from 'react'
import {Menu} from 'semantic-ui-react'
import { NavLink, Link } from "react-router-dom";
import './TabNav.css';

export default function TabNav() {


    return (
      <div>
        <Menu attached='top' tabular>
        
          <NavLink className='tab main-tab' activeClassName="active" exact to='/'><Menu.Item name='Home Page'/></NavLink>
          <NavLink className='tab' activeClassName="active" to='/characters'><Menu.Item name='Characters'/></NavLink>
          <NavLink className='tab' activeClassName="active" to='/locations'><Menu.Item name='Locations'/></NavLink>
          <NavLink className='tab' activeClassName="active" to='/episodes'><Menu.Item name='Episodes'/></NavLink>
          
        </Menu>
      </div>
    )
}