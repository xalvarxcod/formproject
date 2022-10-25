import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Layout from './Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, ButtonGroup, Grid, Box, CssBaseline, Avatar, TextField } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function BankAccountsContent() {

  const [data, setData] = useState([])
  const buttonStyle = { float: 'right' }

  const navigate = useNavigate()

  const handleClickLink = (transactions) => {
    navigate('/BankTransactions', {
      state: {
        transactions: transactions
      }
    });
  }

  useEffect(() => {
    axios.get("http://localhost:8080/bankList").then((response) => {
      setData(response.data)
    })
  }, [])

  return data ? (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1 }}>
            <AccountBalanceIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Bank accounts
          </Typography>
          <br />
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
            style={buttonStyle}
          >
            <Button>Create</Button>
          </ButtonGroup>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            
            {data.map(bankAccount => (
              <Paper elevation={6} style={{ margin: '10px', padding: '25px', textAlign: 'left' }} key={bankAccount.id}>
                <div style={{ display: 'inline-block', alignItems: 'center' }}>
                  <Link href="" underline="hover" onClick={() => handleClickLink(bankAccount.transactions)}>{bankAccount.name}</Link>
                </div>
                <ButtonGroup
                  disableElevation
                  variant="contained"
                  aria-label="Disabled elevation buttons"
                  style={buttonStyle}
                >
                  <Button>Edit</Button>
                </ButtonGroup>
              </Paper>
            ))}
          </Container>
        </Box>
      </Container>
    </>
  ) : "Loading...";
}

export default function BankAccounts() {
  return <Layout content={<BankAccountsContent />} />;
}