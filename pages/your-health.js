import Link from "next/link";
import Page from "../components/Page";
import { PlanetHealthPageURL } from "./planet-health";

export const YourHealthPageURL = '/your-health';

export default function YourHealth() {
  return (
    <Page>
      <h1>How Plants Impact Your Health</h1>
      <ol>
        <li>The presence of plants positively impacts objective functions, particularly in terms of relaxed physiology and improved cognition</li>
        <li>Real plants may sharpen your attention</li>
        <li>Working with plants can be therapeutic</li>
        <li>Plants may help you recover from illness faster and get sick less often</li>
      </ol>
      <p>
        In addition to your household's health, indoor plants can improve your{" "}
        <Link href={PlanetHealthPageURL}>Planet's Health</Link>
      </p>
      <Link href="/">Back to home</Link>
    </Page>
  );
}
