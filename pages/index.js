import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: "/posts/[pid]",
      query: {
        pid: "1234",
        foo: "bar",
      },
    });
  };

  return (
    <div className={styles.container}>
      <button onClick={handleClick}> The Button </button>
    </div>
  );
}
