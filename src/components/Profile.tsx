import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

const Profile = (): JSX.Element => {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <picture>
        <img
          src="https://github.com/davidrappa.png"
          alt="Foto de Perfil do Usuario"
        />
      </picture>
      <div>
        <strong>David Rappa</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
};

export default Profile;
