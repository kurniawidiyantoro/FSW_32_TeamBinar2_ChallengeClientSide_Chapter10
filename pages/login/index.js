import Link from 'next/link'
import React, { useState } from 'react';
import Axios from 'axios';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import styles from '../../styles/LoginPage.module.css';

const LoginPage = () => {
  const [hideAlert, setHideAlert] = useState(true);
  const [alertMessage, setAlertMessage] = useState('');

  const [payload, setPayLoad] = useState({
      email: '',
      password: '',
  })

  function handleChange(value) {
      console.log(value);
      setPayLoad({ ...payload, ...value })
  }

  const loginApi = async (event) => {
    event.preventDefault();
    try {
      const response = await Axios.post("http://localhost:3005/login", {
        email: payload.email,
        password: payload.password,
      });
      console.log(response.data.email);
      console.log(response.data.token);
      localStorage.setItem('token', response.data.token); //to get data use command => localStorage.getItem('token')
      localStorage.setItem('email', response.data.email); //to get data use command => localStorage.getItem('email')
      window.location.replace('/gamelist');
    } catch (error) {
        // console.log('error', error);
        // setAlertMessage('Invalid Email or Password !');
        // setHideAlert(false);
        setAlertMessage(error.response.data.message);
        setHideAlert(false);
    }
  }

  return (
    <div className={styles.HomePageImage}>
      <h2 className={styles.textH2}>LOGIN</h2>
      <div className={styles.alertContainer}>
        <Alert color="danger" hidden={hideAlert}>
          {alertMessage}
        </Alert>
      </div>
      <div className={styles.loginContainer}>
        <Form>
          <FormGroup id="formBasicEmail">
            <Label className={styles.textLabel}>Email</Label>
            <Input
              className={styles.input}
              type="email"
              value={payload.email}
              onChange={function(event) {
                handleChange({ email: event.target.value })
              }}
            />
          </FormGroup>
          <FormGroup id="formBasicPassword">
            <Label className={styles.textLabel}>Password</Label>
            <Input
              className={styles.input}
              type="password"
              value={payload.password}
              onChange={function(event) {
                handleChange({ password: event.target.value })
              }}
            />
          </FormGroup>
          <br></br>
          <Button 
            color="primary" 
            onClick={loginApi}
            style={{ width: '100%' }} // Set the button width to 100%
          >
            Login
          </Button>
        </Form>
        <br></br>
        <p className={styles.textDescription}>Belum mempunyai akun? <Link href="/register"><a className={styles.linkText}>daftar</a></Link> disini</p>
      </div>
    </div>
  );
};

export default LoginPage;