import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anishkumar Patel&apos;s Portfolio</title>
        <meta name="description" content="Anishkumar Patel's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Anishkumar Patel&apos;s Portfolio
        </h1>

        <section id="profile">
          <h2>Profile</h2>
          <p>Diligent Blockchain Development student...</p>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <p>Programming Languages: C++, C, C#...</p>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <p>Details about your projects and experience...</p>
        </section>

        <section id="education">
          <h2>Education</h2>
          <p>Details about your education...</p>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/anishkumar-patel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn Profile
        </a>
      </footer>
    </div>
  );
};

export default Home;
