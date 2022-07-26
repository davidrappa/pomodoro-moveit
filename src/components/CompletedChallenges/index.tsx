import { useContext } from "react";

import { ChallengesContext } from "../../contexts/ChallengesContext";

import styles from "./CompletedChallenges.module.css";

const CompletedChallenges = (): JSX.Element => {
  const { challengesCompleted } = useContext(ChallengesContext);
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
};

export default CompletedChallenges;
