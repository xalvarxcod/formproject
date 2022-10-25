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
import { useLocation } from 'react-router-dom';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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

function BankTransactionsContent() {

    const buttonStyle = { float: 'right' }
    const location = useLocation()

    return (
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
                        <ReceiptLongIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Transactions list
                    </Typography>
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><b>Transmitter</b></TableCell>
                                        <TableCell align="right"><b>Receiver</b></TableCell>
                                        <TableCell align="right"><b>Amount</b></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {location.state.transactions.map(transaction => (
                                        <TableRow
                                            key={transaction.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {transaction.transmitter}
                                            </TableCell>
                                            <TableCell align="right">{transaction.receiver}</TableCell>
                                            <TableCell align="right">{transaction.amount}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Container>
                </Box>
            </Container>
        </>
    );
}

export default function BankTransactions() {
    return <Layout content={<BankTransactionsContent />} />;
}