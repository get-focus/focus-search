import {connect as connectToState} from 'react-redux';
import compose from 'lodash/flowRight';
import Button from './components/button';
import React, {Component, PropTypes} from 'react';
import map from 'lodash/map';
import SearchComponent from './searchComponent'
import OtherSearchComponent from './otherSearchComponent'

const Home = () =>  {
  return <div style={{color: 'orange'}}>
    <SearchComponent/>
    <OtherSearchComponent/>
  </div>;
}

const ConnectedComponentHome = compose(
  connectToState(s => ({reduxState: s}))
)(Home)
export default ConnectedComponentHome;