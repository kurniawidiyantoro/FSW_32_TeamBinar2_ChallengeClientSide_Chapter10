import React from "react";
import styles from "../styles/feature.module.css";

export default function Features() {
  const items = [
    {
      title: "Rock Paper Scissor",
      description: "Game Bantung Gunting Kertas melawan computer",
      backgroundImage: '/images/rock-paper-scissor.jpg',
    },
    {
      title: "Head or Tails",
      description: "Mencoba menebak hasil dari lemparan coin",
      backgroundImage: '/images/coin.jpg',
    },
    {
      title: "Game Dadu",
      description: "Permainan lempar dadu melawan komputer",
      backgroundImage: '/images/dadu.jpg',
    },
  ];

  const fontSize = { fontSize: '16px' }

  return (
    <section>
      <div className={styles.FeaturePageImage}>
      </div>
    </section>
  );
}