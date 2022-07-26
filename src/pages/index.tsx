import Cookies from "js-cookie";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";

import styles from "../layout/pages/Home.module.css";

const Home = (): JSX.Element => {
  const [username, setUsername] = useState("");

  const router = useRouter();

  function handleSetUsername(event: { target: { value: string } }) {
    const inputName = event.target.value;
    setUsername(inputName);
  }

  function handleNavigateToDashboard() {
    if (!username) {
      alert("Favor preencher o campo para continuar ou entrar como convidado!");

      return;
    }
    Cookies.set("username", username);
    router.push("/dashboard");
  }

  useEffect(() => {
    if (Cookies.get("username")) {
      router.push("/dashboard");
    }
  }, [router]);

  return (
    <Fragment>
      <Head>
        <title>Inicio | Move.it</title>
      </Head>

      <div className={styles.homeContainer}>
        <div className={styles.homeBackgroundImage}>
          <picture>
            <img src="logo-background.svg" alt="" />
          </picture>
        </div>
        <div className={styles.homeLogin}>
          <picture>
            <img src="logo-moveit.svg" alt="" />
          </picture>

          <div className={styles.homeLoginContent}>
            <h2>Bem-vindo</h2>

            <div className={styles.homeLoginGithub}>
              <picture>
                <img src="icons/github.svg" alt="" />
              </picture>
              <p>Faça login com seu Github para começar</p>
            </div>

            <div className={styles.homeLoginInput}>
              <input
                type="text"
                placeholder="Digite seu nome"
                onChange={handleSetUsername}
                value={username}
              />

              <button onClick={handleNavigateToDashboard}>
                <picture>
                  <img src="icons/arrow-left.svg" alt="" />
                </picture>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
