import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import Layout from './Layout';

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

function NotificationsContent() {

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      notifications
    </Container>
  );
}

export default function BankAccounts() {
  return <Layout content={<NotificationsContent />} />;
}