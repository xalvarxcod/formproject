import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Layout from './Layout';
import QuestionsForm from './QuestionsForm';


function DashboardContent() {

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container>
        <Typography variant ="h5">
        Start your blockchain form
      </Typography>
        <QuestionsForm />
      </Grid>
    </Container>
  );
}

export default function Dashboard() {
  return <Layout content={<DashboardContent />} />;
}
