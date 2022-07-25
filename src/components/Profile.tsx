import { useContext } from "react";

import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/Profile.module.css";

interface ProfileProps {
  username: string;
}

const Profile = ({ username }: ProfileProps): JSX.Element => {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <picture>
        <img
          src="https://picsum.photos/200/300"
          alt="Foto de Perfil do Usuario"
        />
      </picture>
      <div>
        <strong>{username}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
};

export default Profile;
