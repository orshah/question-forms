import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import { useTheme } from "@mui/material/styles";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function FlashCard() {
  const theme = useTheme();
  const [question, setQuestion] = useState("");
  const [typeValue, setTypeValue] = useState("css");
  const [levelValue, setLevelValue] = useState("easy");
  const [answer, setAnswer] = useState("");

  const handleChangeType = (event) => {
    setTypeValue(event.target.value);
  };
  const handleChangeLevel = (event) => {
    setLevelValue(event.target.value);
  };

  const handleChangeInput = (e) => {
    setQuestion(e.target.value);
  };

  const handleChangeAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <div className="trueFalse__container">
      <h2 className="trueFalse__header">FLASHCARD</h2>
      <div>
        <FormControl
          sx={{ m: 1, width: 400 }}
          component="form"
          onSubmit={handleSubmit}
        >
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <FormControl component="fieldset">
              <Typography variant="h6" gutterBottom>
                Select category:
              </Typography>
              <RadioGroup
                className="trueFalse__typeTab"
                value={typeValue}
                onChange={handleChangeType}
                name="category"
                row
              >
                <FormControlLabel value="css" control={<Radio />} label="CSS" />
                <FormControlLabel value="js" control={<Radio />} label="JS" />

                <FormControlLabel
                  value="react"
                  control={<Radio />}
                  label="REACT"
                />
                <FormControlLabel
                  value="cs"
                  control={<Radio />}
                  label="CS RELATED"
                />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
              <Typography variant="h6" gutterBottom>
                Select level:
              </Typography>
              <RadioGroup
                className="trueFalse__levelTab"
                value={levelValue}
                onChange={handleChangeLevel}
                row
                name="level"
              >
                <FormControlLabel
                  value="easy"
                  control={<Radio />}
                  label="EASY"
                />
                <FormControlLabel
                  value="medium"
                  control={<Radio />}
                  label="MEDIUM"
                />
                <FormControlLabel
                  value="hard"
                  control={<Radio />}
                  label="HARD"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Typography variant="h6" gutterBottom>
            Question:
          </Typography>

          <TextareaAutosize
            sx={{ marginTop: "1rem" }}
            id="outlined-basic"
            label="Input Question"
            variant="outlined"
            onChange={handleChangeInput}
            value={question}
            name="question"
            minRows={5}
            placeholder="Input Question"
          />
          <Typography variant="h6" gutterBottom>
            Answer:
          </Typography>
          <TextareaAutosize
            sx={{ marginTop: "2rem" }}
            id="outlined-basic"
            label="Input Answer"
            variant="outlined"
            onChange={handleChangeAnswer}
            value={answer}
            name="answer"
            minRows={5}
            placeholder="Input Answer"
          />
          <FormControl component="fieldset">
            {/* <RadioGroup
              className="trueFalse__booleanTab"
              value={booleanValue}
              onChange={handleChangeBoolean}
              row
            >
              <FormControlLabel value="true" control={<Radio />} label="TRUE" />
              <FormControlLabel
                value="false"
                control={<Radio />}
                label="FALSE"
              />
            </RadioGroup> */}
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </FormControl>
      </div>
    </div>
  );
}
export default FlashCard;
