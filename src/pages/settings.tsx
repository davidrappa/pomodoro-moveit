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
}

const Settings = (props: SettingsProps): JSX.Element => {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <CountdownProvider>
        <Head>
          <title>Settings | Move.it</title>
        </Head>

        <Sidebar />
      </CountdownProvider>
    </ChallengesProvider>
  );
};

export default Settings;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
