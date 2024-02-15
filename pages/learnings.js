import Link from "next/link";
import Page from "../components/Page";
import { PlanetHealthPageURL } from "./planet-health";

export const YourHealthPageURL = "/your-health";

export default function YourHealth() {
  return (
    <Page>
      <h1>Learnings</h1>
      <p>
        While there is a total addressable market of 30 million+ in the US
        alone, assuming an average of 1 plant per household and an average yield
        of .02KG CO2e annually, this amounts to 600 tonnes of carbon or $17,000
        annually. A quintiessentially cheerful nihilism{" "}
        <a href="https://www.krado.co/blogs/how-many-house-plants-do-celebrities-need-to-offset-their-private-jet-co2-emissions">
          post
        </a>{" "}
        to put it in perspective.
      </p>
      <p>
        It's possible that this could be more feasible if we start to consider
        lanscaping projects or commercial properties and spaces (airports,
        offices, etc.)
      </p>
      <p>
        It is REALLY hard to get good data on carbon sequestration for the
        myriad of different species of house plants out there. This is also
        impacted by age, health, light, so arriving at a single "average" is
        likely going to be wrong.
      </p>
      <p>
        Many plants have little to no impact on carbon sequestration, and even
        if they do, if the plant dies, all/most of that carbon is most likely
        heading straight back into the atmosphere.
      </p>
      <p>
        I'm curious what ideas this has sparked for people to make this more
        feasible. One example I thought of was a kind of ecosystem play where
        this could tie into less carbon-lossy loops by integrating with
        community composting programs.
      </p>
      <p>
        I could see this idea synergizing really well with an application like
        Planta, where they already have a ton of data on many many real
        household plants and their lifecycles and health
      </p>
      <h2>Next Steps</h2>
      <p>
        I'd love to connect with some folks who are more expertly trained and
        well-versed in plant-based carbon cycles to see whether my data and
        calculations are in the right ballpark.
      </p>
      <p>
        I'd love to connect with some folks who are more expertly trained and
        well-versed in carbon credit projection and validation to explore
        building out a monitoring system to validate these carbon sequestration
        estimates.
      </p>
      <p>
        In addition to your household's health, indoor plants can improve your{" "}
        <Link href={PlanetHealthPageURL}>Planet's Health</Link>
      </p>
      <Link href="/">Back to home</Link>
    </Page>
  );
}
