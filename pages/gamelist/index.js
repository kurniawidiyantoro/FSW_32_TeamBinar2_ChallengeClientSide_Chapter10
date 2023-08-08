import React, { useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import NavbarUser from "../components/navbarUser";
import styles from "../../styles/feature.module.css";

const GameList = () => {
  // const navigate = useNavigate();

  const items = [
    {
      title: "Rock Paper Scissor",
      description: "Bantung Gunting Kertas melawan computer",
      backgroundImage: '/images/rock-paper-scissor.jpg',
      path: "/gamerps",
    },
    {
      title: "Head or Tails",
      description: "Mencoba menebak hasil dari lemparan coin",
      backgroundImage: '/images/coin.jpg',
      path: "/gamecoin",
    },
    {
      title: "Game Dadu",
      description: "Permainan lempar dadu melawan komputer",
      backgroundImage: '/images/dadu.jpg',
      path: "/gamedice",
    },
  ];

  const checkToken = async () => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    console.log(token);
    console.log(email);
    try {
      if (!token) {
        console.log('Not Authorized!');
        window.location.replace('/login');
      } else {
        console.log('Authorized !')
      }
    } catch (error) {
      console.log('Internal Server Error!');
      window.location.replace('/login');
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  const handleClick = (path) => {
    // navigate(path);
    console.log(path);
    window.location.replace(path);
  };
  
  const textTitle = {
    fontSize: '21px',
    textAlign: 'center'
  }

  const textDescription = {
    fontSize: '16px',
    textAlign: 'center'
  }

  return (
    <div className={styles.FeaturePageImage}>
      <NavbarUser />
      <div className="py-12 md:py-20">
        {/* Section header */}
        <div className="text-center">
          <h2 className={styles.featureTitle}>Selamat datang</h2>
          <h2 className={styles.featureTitle}>Game List</h2>
          <p className={styles.featureDescription}>
            Berbagai permainan yang bisa anda mainkan di website kami
          </p>
        </div>

        {/* Items */}
        <div className={styles.mderwSm}>
          {items.map((item, index) => (
             <div
             key={index}
             className={styles.rectangleItem}
             style={{ backgroundImage: `url(${item.backgroundImage})` }}
             data-aos="fade-up"
           >
             <div className={styles.rectangleItemContent}>
               <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                 {/* Add SVG content here if needed */}
               </svg>
               <h2 className={`h4 mb-2`}>{item.title}</h2>
               <p>{item.description}</p>
                  <Button
                    color="primary"
                    onClick={() => handleClick(item.path)}
                  >
                    Play
                  </Button>
             </div>
           </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameList;
