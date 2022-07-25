import type { GetServerSideProps } from "next";
import Head from "next/head";

import { ChallengesProvider } from "../contexts/ChallengesContext";
import { CountdownProvider } from "../contexts/CountdownContext";

import {
  ChallengeBox,
  CompletedChallenges,
  Countdown,
  ExperienceBar,
  Profile,
  Sidebar,
} from "../components";

import styles from "../styles/pages/Dashboard.module.css";

interface DashboardProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  username: string;
}

const Dashboard = (props: DashboardProps): JSX.Element => {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <CountdownProvider>
        <Head>
          <title>Dashboard | Move.it</title>
        </Head>

        <Sidebar />

        <div className={styles.container}>
          <ExperienceBar />
          <section>
            <div>
              <Profile username={props.username} />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </div>
      </CountdownProvider>
    </ChallengesProvider>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted, username } =
    ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      username: String(username),
    },
  };
};
