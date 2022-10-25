import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const Question = (props) => {
    const type = props.type;
    const question = props.question;
    const allPossibleAnswers = props.answers.split(",");

    const layout = () => {
        if (type === 0) {
            return (
                <>
                    <Box>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel
                                value={true}
                                control={<Radio />}
                                label="Yes"
                            />
                            <FormControlLabel
                                value={false}
                                control={<Radio />}
                                label="No"
                            />
                        </RadioGroup>
                    </Box>
                </>
            );
        } else if (type === 1) {
            return (
                <>
                    <Box>
                        <Slider
                            defaultValue={1}
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={1}
                            max={10}
                        />
                    </Box>
                </>
            );
        } else {
            return (
                <>
                    <Box>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            {allPossibleAnswers.map((answer, i) => {
                                return (
                                    <FormControlLabel
                                        key={i}
                                        value={answer}
                                        control={<Radio />}
                                        label={answer}
                                    />
                                );
                            })}
                        </RadioGroup>
                    </Box>
                </>
            );
        }
    };

    return (
        <Grid item xs={12}>
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
                {layout()}
            </Paper>
        </Grid>
    );
};

export default Question;
