import { plantData, plantDataGramsCarbonSequestered } from "../data/plants";

const KilogramsPerGram = 1000;
export const CaliforniaCarbonPricePerTonne = 28.66;

/**
 * 
 * @param {*} height 
 * @param {*} width 
 * @param {*} species 
 * @returns Daily CO2 emissions (CO2e) estimated offset
 */
export function calculateAnnualCO2e(height, width, species) {
    // https://www.unitconverters.net/concentration-solution/part-million-ppm-to-kilogram-liter.htm
    // https://8billiontrees.com/trees/how-much-co2-does-a-tree-absorb/
    // 1 part per million is a millionth of a kilogram per liter
    // so 1 million parts per million is equal to 1 kg/l
    // 100 PPM = 0.0000998859
    // One possible formula is:
    /**
     * Mass (grams)=(Change in concentration (ppm) / 1,000,000) ×Molecular weight of CO2 (grams/mol)×Volume (liters)
     * For example, if the volume of the atmosphere is 1,000,000 liters:
     * Mass (kilograms) = (18.30 / 1,000,000) × 44.01 × 1,000,000 ÷ 1000
     */

    // In the experiment where we are pulling ppm data from, the container was 1 cubic meter, which is 1L
    // so our formula becomes...
    const convertPPMToKG = (ppm) => {
        const volume = 1; // Liters
        const GramsPerMolCO2 = 44.01;
        return (ppm / 1000000) * GramsPerMolCO2 * volume / KilogramsPerGram;
    }
    const DaysPerYear = 365;
    return convertPPMToKG(plantData[species]) * DaysPerYear;
}

export function calculateAnnualKilogramsCarbonSequestered(species) {
    // Experiment ran for 70 days and values stored were in grams
    const gramsCarbonSequesteredIn70Days = plantDataGramsCarbonSequestered[species]['h']['carbonSequestered'];
    const gramsCarbonSequesteredPerDay = gramsCarbonSequesteredIn70Days / 70;
    const DaysPerYear = 365;
    return gramsCarbonSequesteredPerDay * DaysPerYear / KilogramsPerGram;
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