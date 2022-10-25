import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import Layout from "./Layout";
import Response from "./Response";
import axios from "../api/axios";

const MyResponsesContent = () => {
    const [responses, setResponses] = useState([]);

    useEffect(() => {
        axios
            .get("/user/" + 1 + "/responses")
            .then((response) => {
                console.log(response.data);
                setResponses(response.data);
            })
            .catch((err) => {});
    }, []);

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <h1>My Responses</h1>
            {responses.map((ans, i) => {
                return <Response key={i} question={ans.question} answer={ans.answer}/>;
            })}
        </Container>
    );
};

export default function Responses() {
    return <Layout content={<MyResponsesContent />} />;
}
