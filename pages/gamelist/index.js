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
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 className={styles.featureTitle}>Game List</h2>
          <p className={styles.featureDescription}>
            Berbagai permainan yang bisa anda mainkan di website kami
          </p>
        </div>

        {/* Items */}
        <div className="mderw-sm mx-auto flex flex-wrap gap-8 md:max-w-2xl lg:max-w-none">
          {items.map((item, index) => (
            <div
              key={index}
              className="rectangle-item"
              style={{ backgroundImage: `url(${item.backgroundImage})` }}
              data-aos="fade-up"
            >
              <div className="rectangle-item-content">
                <svg
                  className="w-12 h-12 mb-4"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG code */}
                </svg>
                <h4 style={textTitle}>{item.title}</h4>
                <p style={textDescription}>
                  {item.description}
                </p>
                <div>
                  <Button
                    color="primary"
                    onClick={() => handleClick(item.path)}
                  >
                    Play
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameList;