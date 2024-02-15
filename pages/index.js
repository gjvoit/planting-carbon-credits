import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { PlanetHealthPageURL } from './planet-health';
import { WalletHealthPageURL } from './wallet-health';
import { YourHealthPageURL } from './your-health';
import { ReferencesPageURL } from './references';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Money Trees</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Let's Talk About Money... Trees
        </h1>

        <p className={styles.description}>
          What if I told you that plants could improve your health, your community's health, and now... your wallet's health too!
        </p>

        <img width='100%' src="https://png.pngtree.com/thumb_back/fh260/background/20230521/pngtree-group-of-potted-plants-in-a-window-sill-image_2670578.jpg"></img>

        <div className={styles.grid}>
          <Link href={YourHealthPageURL} className={styles.card}>
            <h3>Your Health &rarr;</h3>
            <p>Learn about the benefits of plants for your health.</p>
          </Link>

          <Link
            href={PlanetHealthPageURL}
            className={styles.card}
          >
            <h3>Your Planet's Health &rarr;</h3>
            <p>Learn about how tending plants can improve your community's and the planet's health.</p>
          </Link>

          <Link
            href={WalletHealthPageURL}
            className={styles.card}
          >
            <h3>Your Wallet's Health &rarr;</h3>
            <p>
              Round it out by learning how tending plants has a financial upside as well!
            </p>
          </Link>
          <Link
            href={ReferencesPageURL}
            className={styles.card}
          >
            <h3>References &rarr;</h3>
            <p>
              Curious to dig in more? Check out the references!
            </p>
          </Link>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
