import { Fragment } from "react";
import type { GetServerSideProps } from "next";
import Head from "next/head";

import {
  ChallengeBox,
  CompletedChallenges,
  Countdown,
  ExperienceBar,
  Profile,
  Sidebar,
} from "../components";

import styles from "../layout/pages/Dashboard.module.css";

interface DashboardProps {
  username: string;
}

const Dashboard = ({ username }: DashboardProps): JSX.Element => {
  return (
    <Fragment>
      <Head>
        <title>Dashboard | Move.it</title>
      </Head>

      <Sidebar />

      <div className={styles.container}>
        <ExperienceBar />
        <section>
          <div>
            <Profile username={username} />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { username } = ctx.req.cookies;
  return {
    props: {
      username: String(username),
    },
  };
};
