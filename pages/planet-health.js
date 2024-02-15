import Link from "next/link";
import Page from "../components/Page";
import { WalletHealthPageURL } from "./wallet-health";

export const PlanetHealthPageURL = "/planet-health";

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
        A quick biology and chemistry refresher... during photosynthesis, plants
        take in carbon dioxide through their leaves. Using the energy from
        sunlight, plants combine carbon dioxide with water to produce glucose
        and oxygen. The glucose serves as a source of energy for the plant,
        while the oxygen is released into the air.
      </p>

      <img style={{ alignSelf: 'center' }}src="https://t4.ftcdn.net/jpg/04/00/92/37/360_F_400923707_MsxKo5SCfApYlK8UvzCF06NMlS10CVpP.jpg" />

      <p>
        As plants grow and mature, they store carbon in their biomass – stems,
        leaves, and roots. When plants die or shed leaves, some of this organic
        matter may be incorporated into the soil, contributing to carbon
        sequestration. In forests and other ecosystems, this stored carbon can
        remain locked away for extended periods, helping to offset human-induced
        carbon emissions.
      </p>

      <p>
        Overall, plants are not only vital for producing the oxygen we breathe
        but also for actively participating in the carbon cycle, playing a key
        role in balancing atmospheric carbon dioxide levels and promoting a
        healthier planet.
      </p>

      <p>
        If you're curious to learn more, I highly recommend the{" "}
        <a href="https://www.khanacademy.org/science/biology/ecology/biogeochemical-cycles/a/the-carbon-cycle">
          Khan Academy - The Carbon Cycle
        </a>{" "}
        as a better refresher on this. I'd also recommend watching/reading the
        modules on photosynthesis and cellular respiration which are linked out
        from this module.
      </p>

      <p>
        So we know that forests and outdoor plants play a huge role in carbon
        cycles. But not everyone can go plant a biodiverse forest. Let's talk
        about how you can get involved.
      </p>
      <Link href={WalletHealthPageURL}>Your Wallet's Health</Link>
      <Link href="/">Back to home</Link>
    </Page>
  );
}
