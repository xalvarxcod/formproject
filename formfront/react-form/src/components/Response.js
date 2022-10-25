import { useEffect, useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import axios from "../api/axios";

const Response = (props) => {
    const questionId = props.question;
    const answer = props.answer;
    const [question, setQuestion] = useState('');

    useEffect(() => {
        axios
            .get("/question/" + questionId)
            .then((response) => {
                console.log(response.data);
                setQuestion(response.data.question);
            })
            .catch((err) => {});
    }, []);

    return <Grid item xs={12}>
            <Paper
                sx={{
                    m: 1,
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Typography variant="h5" color="text.secondary" align="justify">
                    {question}
                </Typography>
                <Typography variant="body1" color="text.secondary" align="justify">
                    {answer}
                </Typography>
            </Paper>
        </Grid>
}

export default Response;