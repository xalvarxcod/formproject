import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Layout from './Layout';
import { Button, TextField, Box } from '@mui/material';
import { useState } from 'react';
import { Avatar } from '@mui/material';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import axios from 'axios';
import { useEffect } from 'react';

function MyAccountContent() {

    const [data, setData] = useState(null)
    useEffect(() => {
        axios.get("http://localhost:8081/user/" + 1).then((response) => {
            setData(response.data)
        })
    }, [])

    const inputStyle = { width: 500 }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {username, password};
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
                        id="username"
                        label="Username"
                        name="username"
                        defaultValue={data ? data.username:""}
                        onChange={(e)=>setUsername(e.target.value)}
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                        type="password"
                        defaultValue={data ? data.password:""}
                        onChange={(e)=>setPassword(e.target.value)}
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