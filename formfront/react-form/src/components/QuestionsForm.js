import { useEffect, useState } from "react";
import Question from "./Question";
import { Button, Box } from "@mui/material";
import axios from "../api/axios";

const QuestionsForm = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answer, setAnswer] = useState({});

    useEffect(() => {
        axios
            .get("/question")
            .then((response) => {
                console.log(response.data);
                setQuestions(response.data);
            })
            .catch((err) => {});
    }, []);

    const changeQuestion = () => {
        let value = currentQuestion;
        value++;
        if (value <= questions.length) setCurrentQuestion(value);
        axios
            .post("/answer", answer)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {});
    };

    const tryAgain = () => {
        setCurrentQuestion(0);
    }

    if (currentQuestion < questions.length) {
        return (
            <>
                <Question
                    questionId={questions[currentQuestion].id}
                    question={questions[currentQuestion].question}
                    type={questions[currentQuestion].type}
                    answers={questions[currentQuestion].allPossibleAnswers}
                    setAnswer={setAnswer}
                />

                {currentQuestion === questions.length - 1 ? (
                    <Button
                        sx={{ ml: 1 }}
                        variant="contained"
                        onClick={changeQuestion}
                    >
                        Finish
                    </Button>
                ) : (
                    <Button
                        sx={{ ml: 1 }}
                        variant="contained"
                        onClick={changeQuestion}
                    >
                        Next
                    </Button>
                )}
            </>
        );
    }
    return (
        <>
        <Box>
            <h1>Finished Form</h1>
            <Button sx={{ ml: 1 }} variant="contained" onClick={tryAgain}>
                Try Again
            </Button>
            </Box>
        </>
    );
};

export default QuestionsForm;
