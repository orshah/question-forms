import React from "react";
import "./trueFalse.style.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const marks = [
  {
    value: 0,
    label: "Eazy",
  },
  {
    value: 50,
    label: "Medium",
  },
  {
    value: 100,
    label: "Hard",
  },
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["React", "JavaScript", "CSS", "HTML", "Programming Related"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function valuetext(value) {
  return `${value}`;
}

function TrueFalse() {
  const theme = useTheme();
  const [questionType, setquestionType] = useState([]);
  const [data, setData] = useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setquestionType(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div className="trueFalse__container">
      <h2 className="trueFalse__header">QUIZ FORM</h2>
      <p>Select Level:</p>
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="question level"
          defaultValue={50}
          getAriaValueText={valuetext}
          step={50}
          valueLabelDisplay="auto"
          marks={marks}
        />
      </Box>
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">Question Type</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={questionType}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, questionType, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
          <TextField
            sx={{ marginTop: "1rem" }}
            id="outlined-basic"
            label="Input Question"
            variant="outlined"
            onChange={handleChange}
            value="question"
          />
        </FormControl>
      </div>
    </div>
  );
}

export default TrueFalse;
