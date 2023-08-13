import React, { useEffect, useState } from 'react';
import { Button, Table } from "reactstrap";
import Navbar from "../components/navbar";
import NavbarUser from "../components/navbarUser";
import styles from "../../styles/feature.module.css";
import { connect, useDispatch } from 'react-redux';
import { setEmail, setPlayedGames  } from "../../redux/action";
import Axios from 'axios';

const LeaderBoard = ({ isLoggedIn, user}) => {
    const [username, setUsername] = useState('');
    const [status, setStatus] = useState('');
    const [totalscore, setTotalScore] = useState(0);
    const [playerData, setPlayerData] = useState([]);


    const handleBackClick = () => {
        window.location.replace('/gamelist');
      };


      const getData = async ()=> {
        const token = localStorage.getItem("token");
        const email = localStorage.getItem("email");
        const username = localStorage.getItem("username");
        const status = localStorage.getItem("status");
        const totalscore = localStorage.getItem("totalscore");
        const gamename = localStorage.getItem("gamename");
        try {
            if (!token) {
                console.log('Not Authorize !');
                window.location.replace('/login');
            } else {
                const gamename = 'gamerps';
                const response = await Axios.post('http://localhost:3005/gamehistory/get/rank',
                { gamename },
                { headers: {
                    Authorization: `Basic ${token}`,
                  }}
            )
            console.log(response.data.data);
            setUsername(response.data.data.username);
            setStatus(response.data.data.status);
            setTotalScore(response.data.data.totalscore);
            setPlayerData(response.data.data); 
            };
           
  
        } catch (error) {
            console.log("Internal Server Error !");
        }
    }
    
    useEffect(() => {
        getData();
      }, []);
    
    
  return (
    <div className={styles.FeaturePageImage}>
    <NavbarUser isLoggedIn={isLoggedIn} userEmail={user.email}/>
    <div className='mt-4'>
        <Table striped>
        <thead>
            <tr>
            <th>#</th>
            <th>Username</th>
            <th>Game Name</th>
            <th>Status</th>
            <th>Total Score</th>
            </tr>
        </thead>
        <tbody>
            {playerData.map((player, index) => (
            <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{player.username}</td>
                <td>{player.gamename}</td>
                <td>{player.status}</td>
                <td>{player.totalscore}</td>
            </tr>
            ))}
        </tbody>
        </Table>
    </div>
        <div>
        <Button color="primary" onClick={handleBackClick}>
          Kembali
        </Button>
      </div>
  </div>
);
};

const mapStateToProps = (state) => ({
    isLoggedIn: state.reducer.isLoggedIn,
    user: state.reducer.user,
  });
  
  export default connect(mapStateToProps)(LeaderBoard);

