import React, { useState } from 'react';
import { CaliforniaCarbonPricePerTonne, calculateAnnualCO2e, calculateAnnualEarnings, calculateAnnualKilogramsCarbonSequestered } from '../utils/plants';
import { plantDataGramsCarbonSequestered } from '../data/plants';

const PlantForm = () => {
  // State variables to store form data
  // const [height, setHeight] = useState('');
  // const [width, setWidth] = useState('');
  const [selectedSpecies, setSelectedSpecies] = useState('');
  const [CO2e, setCO2e] = useState('');
  const [dollarEstimate, setDollarEstimate] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO - invoke helper functions in utils/plants.js to:
        // 1. calculate CO2e for the inputted plant
        // 2. calculate user earnings for the inputted plant
    const annualCO2e = calculateAnnualKilogramsCarbonSequestered(selectedSpecies);
    setCO2e(annualCO2e.toFixed(5));
    setDollarEstimate(calculateAnnualEarnings(annualCO2e).toFixed(5));

    // You can perform actions with the form data here
    // console.log('Height:', height);
    // console.log('Width:', width);
    console.log('Selected Species:', selectedSpecies);
  };

  return (
    <div>
      <h2>Plant Carbon Credit Estimator</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        {/* <label>
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
        </label> */}

        <div>
          <label>
            Plant Species:
            <select
              value={selectedSpecies}
              onChange={(e) => setSelectedSpecies(e.target.value)}
            >
              <option value="">Select a species</option>
              <option value="aglaonemaSpp">Aglaonema</option>
              <option value="chamaedoreaElegans">Parlor Palm</option>
              <option value="ctenantheOppenheimiana">Never Never Plant</option>
              <option value="dizygothecaElegantissima">False Aralia</option>
              <option value="dracaenaGodseffiana">Gold Dust Dracaena</option>
              {/* <option value="dracaenaDeremensisLemonLime">Lemon Lime Dracaena</option> */}
              {/* <option value="dracaenaDeremensisJanetCraig">Janet Craig Dracaena</option> */}
              <option value="dracaenaMarginata">Dragon Tree</option>
              <option value="ficusBenjaminaImmature">Weeping Fig (Immature)</option>
              <option value="ficusBenjaminaMature">Weeping Fig (Mature)</option>
              <option value="ficusRepens">Creeping Fig</option>
              {/* <option value="spathiphyllumSweetChico10cm">Peace Lily (Sweet Chico) - Small</option> */}
              {/* <option value="spathiphyllumSweetChico15cm">Peace Lily (Sweet Chico) - Medium</option> */}
            </select>
          </label>
          {selectedSpecies && <img height={200} src={plantDataGramsCarbonSequestered[selectedSpecies]['h']['imageUrl']} />}
        </div>

        <button type="submit">Submit</button>
      </form>
      {CO2e && dollarEstimate && (
        <div>
            <p>Your plant could offset up to {CO2e}kg of CO2e per year.</p>
            <p>Carbon Credit markets typically price units in tonnes per year </p>
            <p>With California's Carbon Credit rate at ${CaliforniaCarbonPricePerTonne} per tonne, that could earn you up to ${dollarEstimate} per year!</p>
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
