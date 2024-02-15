import Link from "next/link";
import Page from "../components/Page";

export const ReferencesPageURL = '/references';

export default function References() {
  return (
    <Page>
      <h1>References</h1>
      <ol>
        <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9224521/">Effects of Indoor Plants on Human Functions: A Systematic Review with Meta-Analyses</a></li>
        <li>
            <a href="https://carboncredits.com/">https://carboncredits.com</a>
            <ul>
                <li>Notes - I am using the California carbon credit cost currently as a basic proxy.
                    In the future, I could explore directly integrating with this via API or potentially exploring
                    an option like <a href="https://www.patch.io/">https://www.patch.io/</a>
                </li>
            </ul>
        </li>
        <li><a href="https://carboncredits.com/the-ultimate-guide-to-understanding-carbon-credits/">The Ultimate Guide to Understanding Carbon Credits</a></li>
        <li><a href="https://www.khanacademy.org/science/biology/ecology/biogeochemical-cycles/a/the-carbon-cycle">Khan Academy - The Carbon Cycle</a></li>
        <li>
            <a href="https://www.researchgate.net/publication/315968651_Effectiveness_of_Indoor_Plant_to_Reduce_CO_2_in_Indoor_Environment?_tp=eyJjb250ZXh0Ijp7InBhZ2UiOiJwdWJsaWNhdGlvbiIsInByZXZpb3VzUGFnZSI6bnVsbH19">Effectiveness of Indoor Plant to Reduce CO2 in Indoor Environment</a>
            <ul>
                <li>Notes - I was initially using this for my rudimentary calculator (and preserved the code for posterity)</li>
                <li>but I was able to find a study with somewhat more robust data (see next reference)</li>
            </ul>
        </li>
        <li>
            <a href="https://greenplantsforgreenbuildings.org/wp-content/uploads/2014/01/Project-Carbon-HortScience-474.pdf">Quantification of Carbon Assimilation of Plants in Simulated and In Situ Interiorscapes</a>
            <ul>
                <li>Notes - this took some noodling to understand, but ultimately the output was exactly what I wanted (grams per day carbon sequestered)</li>
            </ul>
        </li>
        <li>
            <a href="https://verra.org/programs/verified-carbon-standard/develop-a-vcs-project/">DEVELOP A VERIFIED CARBON STANDARD (VCS) PROJECT</a>
            <ol>
                <li><a href="https://verra.org/wp-content/uploads/VM0034-Canadian-Forest-Carbon-Offset-Methodology-v2.0.pdf">Canadian-Forest-Carbon-Offset-Methodology-v2.0</a></li>
                <li>Notes - This organization (one of the leaders in the space) has come under scrutiny for the projects it validates, which emphasizes the difficulty of certifying/validating carbon credit programs</li>
            </ol>
        </li>
        <li>
            <a href="https://www.researchgate.net/publication/298806688_Measuring_the_Impact_of_Selected_Plants_on_Indoor_CO2_Concentrations">Measuring the Impact of Selected Plants on Indoor CO2 Concentrations</a>
            <ol>
                <li>Notes - this was interesting because the graphs clearly demonstrate how plants invert their CO2 {'<-->'} O2 cycle when photosynthesis is not occurring (e.g. overnight)</li>
            </ol>
        </li>
        <li><a href="https://www.ecomatcher.com/how-to-calculate-co2-sequestration/">How to calculate CO2 sequestration</a></li>
        <li><a href="https://www.saps.org.uk/teaching-resources/resources/157/measuring-the-rate-of-photosynthesis/">Measuring the rate of photosynthesis</a></li>
        <li><a></a></li>
        <li><a></a></li>
      </ol>
      <p><Link href="/">Back to home</Link></p>
    </Page>
  );
}