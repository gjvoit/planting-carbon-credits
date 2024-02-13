import Link from "next/link";
import Page from "../components/Page";

export default function YourHealth() {
  return (
    <Page>
      <h1>Your Health</h1>
      <ol>
        <li>Indoor plants may help reduce stress levels</li>
        <li>Real plants may sharpen your attention</li>
        <li>Working with plants can be therapeutic</li>
        <li>Plants may help you recover from illness faster</li>
        <li>...</li>
      </ol>
      <p>
        In addition to your household's health, indoor plants can improve your{" "}
        <Link href="/community-health">Community's Health</Link>
      </p>
      <Link href="/">Back to home</Link>
    </Page>
  );
}
