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
import { Button, TextField, Box } from '@mui/material';
import { useState } from 'react';
import { Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import axios from 'axios';
import { useEffect } from 'react';

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

function MyAccountContent() {

    const [data, setData] = useState(null)
    useEffect(() => {
        axios.get("http://localhost:8080/dataUser").then((response) => {
            setData(response.data)
        })
    }, [])

    const inputStyle = { width: 500 }

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {firstName, lastName, username, phoneNumber}
    }

    return data ? (
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
                    <ManageAccountsIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    User Settings
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Name"
                        name="name"
                        defaultValue={data ? data.firstName:""}
                        onChange={(e)=>console(e.target.value)}
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Last Name"
                        name="lastName"
                        defaultValue={data ? data.lastName:""}
                        onChange={(e)=>setLastName(e.target.value)}
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        defaultValue={data ? data.username:""}
                        onChange={(e)=>setUsername(e.target.value)}
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="phoneNumber"
                        label="Phone number"
                        name="phoneNumber"
                        defaultValue={data ? data.phoneNumber:""}
                        onChange={(e)=>setPhoneNumber(e.target.value)}
                        autoFocus
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Save
                    </Button>
                </Box>
            </Box>
        </Container>
    ) : "Loading";
}

export default function MyAccount() {
    return <Layout content={<MyAccountContent />} />;
}