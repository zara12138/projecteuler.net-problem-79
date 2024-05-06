import { NextPage } from "next";
import styles from "./Home.module.css";
import { useState } from "react";
import { getResult } from "./util";

type Props = {
  data: string;
};

export const Home: NextPage<Props> = ({ data }) => {
  return <div className={styles.root}>
      <h1>Result</h1>
      <p>The shortest possible password is {data} based on given txt file.</p>
  </div>;
};
