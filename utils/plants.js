/**
 * 
 * @param {*} height 
 * @param {*} width 
 * @param {*} species 
 * @returns Daily CO2 emissions (CO2e) estimated offset
 */
export function calculateAnnualCO2e(height, width, species) {
    // TODO - incorporate ppm from various plants in this study and convert from ppm to KG CO2
    // https://www.researchgate.net/publication/315968651_Effectiveness_of_Indoor_Plant_to_Reduce_CO_2_in_Indoor_Environment?_tp=eyJjb250ZXh0Ijp7InBhZ2UiOiJwdWJsaWNhdGlvbiIsInByZXZpb3VzUGFnZSI6bnVsbH19
    // https://www.unitconverters.net/concentration-solution/part-million-ppm-to-kilogram-liter.htm
    // https://8billiontrees.com/trees/how-much-co2-does-a-tree-absorb/
    let dailyCO2e = .00015;
    const DaysPerYear = 365;
    switch(species) {
        case 'rubberPlant':
            dailyCO2e = 0.0002387;
            break;
        case 'prayerPlant':
            dailyCO2e = .00046;
            break;
    }
    return dailyCO2e * DaysPerYear;
}

/**
 * 
 * @param {*} AnnualCO2eKG 
 * @returns Annual earnings for a CO2e credit.
 */
export function calculateAnnualEarnings(AnnualCO2eKG) {
    // https://carboncredits.com/carbon-prices-today/
    const CaliforniaCarbonPricePerTonne = 28.66;
    const KilogramsPerTonne = 1000;
    const platformFee = .2;
    const customerPortion = 1 - platformFee;
    return AnnualCO2eKG * CaliforniaCarbonPricePerTonne / KilogramsPerTonne * customerPortion;
}