import React from 'react';
import RandomDog from '../components/RandomDog'

import DogList from '../components/test'

import './Styles.css';



export default class Grid_AllDogs extends React.Component {
  render() {
    return (
      <div>
        <RandomDog />
        <DogList />
      </div>
);
}
}
