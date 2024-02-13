import React, { useState } from 'react';
import { calculateAnnualCO2e, calculateAnnualEarnings } from '../utils/plants';

const PlantForm = () => {
  // State variables to store form data
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [selectedSpecies, setSelectedSpecies] = useState('');
  const [CO2e, setCO2e] = useState('');
  const [dollarEstimate, setDollarEstimate] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO - invoke helper functions in utils/plants.js to:
        // 1. calculate CO2e for the inputted plant
        // 2. calculate user earnings for the inputted plant
    const annualCO2e = calculateAnnualCO2e(height, width, selectedSpecies);
    setCO2e((annualCO2e.toFixed(2)));
    setDollarEstimate(calculateAnnualEarnings(annualCO2e));

    // You can perform actions with the form data here
    console.log('Height:', height);
    console.log('Width:', width);
    console.log('Selected Species:', selectedSpecies);
  };

  return (
    <div>
      <h2>Plant Carbon Credit Estimator</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label>
          Plant Height (meters):
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>

        <label>
          Plant Width (meters):
          <input
            type="text"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </label>

        <label>
          Plant Species:
          <select
            value={selectedSpecies}
            onChange={(e) => setSelectedSpecies(e.target.value)}
          >
            <option value="">Select a species</option>
            <option value="areca">Areca Palm</option>
            <option value="bostonFern">Boston Fern</option>
            <option value="rubberTree">Rubber Tree</option>
            <option value="spiderPlant">Spider Plant</option>
            <option value="ficusTree">Ficus Tree</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
      {CO2e && dollarEstimate && (
        <div>
            <p>Your plant could offset up to {CO2e}kg of CO2e per year. <br /> That could earn you up to ${dollarEstimate} per year!</p>
        </div>
      )}
    </div>
  );
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '300px',
};

export default PlantForm;
