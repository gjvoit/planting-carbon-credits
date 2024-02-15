import Link from "next/link";
import Page from "../components/Page";
import { WalletHealthPageURL } from "./wallet-health";

export const PlanetHealthPageURL = '/planet-health';

export default function YourHealth() {
  return (
    <Page>
      <h1>Your Planet's Health</h1>
      <p>
        Plants play a crucial role in the carbon cycle, a natural process that
        maintains the balance of carbon in the Earth's atmosphere. Through
        photosynthesis, plants absorb carbon dioxide (CO2) from the air and
        convert it into organic compounds, releasing oxygen as a byproduct. This
        process is fundamental to sustaining life on Earth and reducing the
        concentration of CO2 in the atmosphere.
      </p>

      <p>
        During photosynthesis, plants take in carbon dioxide through tiny pores
        called stomata on their leaves. Using the energy from sunlight, plants
        combine carbon dioxide with water to produce glucose and oxygen. The
        glucose serves as a source of energy for the plant, while the oxygen is
        released into the air. This exchange not only supports plant growth but
        also contributes to the overall reduction of atmospheric carbon levels.
      </p>

      <p>
        As plants grow and mature, they store carbon in their biomass – stems,
        leaves, and roots. When plants die or shed leaves, some of this organic
        matter may be incorporated into the soil, contributing to carbon
        sequestration. In forests and other ecosystems, this stored carbon can
        remain locked away for extended periods, helping to offset human-induced
        carbon emissions.
      </p>

      <p>
        Furthermore, healthy and diverse ecosystems, including forests, act as
        carbon sinks by absorbing more carbon through photosynthesis than they
        release through processes like respiration and decomposition. Protecting
        and restoring natural habitats, therefore, is essential for maintaining
        the Earth's carbon balance and mitigating the impacts of climate change.
      </p>

      <p>
        Overall, plants are not only vital for producing the oxygen we breathe
        but also for actively participating in the carbon cycle, playing a key
        role in reducing atmospheric carbon dioxide levels and promoting a
        healthier planet.
      </p>
      <Link href={WalletHealthPageURL}>Your Wallet's Health</Link>
      <Link href="/">Back to home</Link>
    </Page>
  );
}
