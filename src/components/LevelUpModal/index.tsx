import { useContext } from "react";

import { ChallengesContext } from "../../contexts/ChallengesContext";

import styles from "./LevelUpModal.module.css";

const LevelUpModal = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <picture>
            <img src="/icons/close.svg" alt="Fechar modal" />
          </picture>
        </button>
      </div>
    </div>
  );
};

export default LevelUpModal;
