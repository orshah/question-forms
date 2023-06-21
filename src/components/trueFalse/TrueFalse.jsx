import React, { useState } from "react";
import "./trueFalse.style.css";
import FormControl from "@mui/material/FormControl";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function TrueFalse() {
  const theme = useTheme();
  const [text, setText] = useState("");
  const [typeValue, setTypeValue] = useState("css");
  const [levelValue, setLevelValue] = useState("easy");
  const [booleanValue, setBooleanValue] = useState("true");

  const handleChangeType = (event) => {
    setTypeValue(event.target.value);
  };
  const handleChangeLevel = (event) => {
    setLevelValue(event.target.value);
  };
  const handleChangeBoolean = (event) => {
    setBooleanValue(event.target.value);
  };

  const handleChangeInput = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <div className="trueFalse__container">
      <h2 className="trueFalse__header">QUIZ FORM</h2>
      <div>
        <FormControl
          sx={{ m: 1, width: 400 }}
          component="form"
          onSubmit={handleSubmit}
        >
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <FormControl component="fieldset">
              <RadioGroup
                className="trueFalse__typeTab"
                value={typeValue}
                onChange={handleChangeType}
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
              <RadioGroup
                className="trueFalse__levelTab"
                value={levelValue}
                onChange={handleChangeLevel}
                row
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
          <TextField
            sx={{ marginTop: "1rem" }}
            id="outlined-basic"
            label="Input Question"
            variant="outlined"
            onChange={handleChangeInput}
            value={text}
            name="question"
          />
          <FormControl component="fieldset">
            <RadioGroup
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
            </RadioGroup>
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

export default TrueFalse;
