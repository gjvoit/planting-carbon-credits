import Link from "next/link";
import Page from "../components/Page";
import PlantForm from "../components/Calculator";

export const WalletHealthPageURL = '/wallet-health';

export default function YourWalletHealth() {
  return (
    <Page>
      <h1>Your Wallet</h1>
      <p>
        Carbon credit programs are initiatives designed to mitigate climate
        change by reducing greenhouse gas emissions. The basic concept involves
        assigning a monetary value to the amount of carbon dioxide or other
        greenhouse gases a company or entity is able to prevent from being
        released into the atmosphere.
      </p>
      <p>
        Companies or projects that successfully reduce their emissions can earn
        carbon credits, which represent a measurable reduction in greenhouse gas
        emissions. These credits can then be traded or sold in carbon markets.
        This system creates a financial incentive for businesses to adopt
        eco-friendly practices and invest in sustainable technologies.
      </p>
      <p>
        Carbon credits are typically measured in metric tons of carbon dioxide
        equivalent (CO2e). By participating in carbon credit programs,
        businesses contribute to the global effort to combat climate change
        while also potentially benefiting financially from their environmental
        initiatives.
      </p>
      <p>
        The two main types of carbon credit programs are cap-and-trade and
        offset projects. Cap-and-trade systems set a limit on total emissions
        and allow companies to buy or sell allowances within that limit. Offset
        projects involve investing in activities that reduce emissions, such as
        reforestation or renewable energy projects, to compensate for emissions
        elsewhere.
      </p>
      <p>
        Governments, international organizations, and private entities play
        crucial roles in establishing and regulating carbon credit programs.
        These initiatives contribute to a more sustainable future by encouraging
        businesses to adopt environmentally friendly practices and invest in
        projects that actively reduce their carbon footprint.
      </p>
      <h2>Carbon Credits x House Plants</h2>
      <p>
        At this point you might be wondering... "okay... but how does this
        benefit me?"
      </p>
      <p>
        Play around with the Plant Form below to see what credits you might be
        eligible for, either for maintaining your existing plants or for raising
        some new little ones in your home!
      </p>
      <PlantForm />
      <Link href="/">Back to home</Link>
    </Page>
  );
}
