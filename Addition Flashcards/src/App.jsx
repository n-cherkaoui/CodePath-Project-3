import React from "react";
import { useState } from "react";
import FlippableCard from './components/flippable-card.jsx'
import './App.css'


const App = () => {
  return (
    <FlippableCard></FlippableCard>
  )
}

export default App

// TODO: Large Samosa that the user can click to harvest one at a time
// TODO: Samosa counter
// TODO: Upgrades that increase power of cursor at certain thresholds
// TODO: When purchasing an upgrade, the user loses samosas
// TODO: Decrease the size of the large samosa on click