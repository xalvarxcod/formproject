import { useEffect, useState } from "react";
import Question from "./Question";
import { Typography, Paper, Grid, Button } from "@mui/material";
import axios from "../api/axios";

const QuestionsForm = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    useEffect(() => {
        axios.get("/question").then((response) => {
            setQuestions(response.data);
        }).catch((err) => {})
    }, [])

    const changeQuestion = () => {
        console.log(currentQuestion);
        let value = currentQuestion;
        value++;
        if (value <= questions.length) setCurrentQuestion(value);
    };

    return (
        <>
            {currentQuestion === questions.length ? (
                <Grid item xs={12}>
                    <Paper
                        sx={{
                            m: 1,
                            p: 3,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Typography variant="h3" align="center" sx={{ mb: 2 }}><b>Finish Form</b></Typography>
                        <Button variant="contained">Submit</Button>
                    </Paper>
                </Grid>
            ) : (
                <>
                    <Question
                        question={questions[currentQuestion].question}
                        type={questions[currentQuestion].type}
                        answers={questions[currentQuestion].allPossibleAnswers}
                    />

                    <Button
                        sx={{ ml: 1 }}
                        variant="contained"
                        onClick={changeQuestion}
                    >
                        Next
                    </Button>
                </>
            )}
        </>
    );
};

export default QuestionsForm;
