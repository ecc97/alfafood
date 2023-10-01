import React from "react";
import { TextField, Button, Box } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import { validarEmail, validarPassword } from "./validaciones";
import FormHelperText from "@mui/material/FormHelperText";

const DatosUsuario = ({ updateStep, data, onChange, onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  if (!data) {
    return <></>;
  } else {
    const { inputs, buttonText } = data;

    return (
      <Box
        component="form"
        autocomplete="off"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          paddingTop: "2rem",
        }}
        onSubmit={
          (e) => onSubmit(e, 0)
        }
      >
        <TextField
          label={inputs[0].label}
          variant="outlined"
          error={inputs[0].valid === false}
          fullWidth
          margin="dense"
          type={inputs[0].type}
          helperText={inputs[0].valid === false && inputs[0].helperText}
          value={inputs[0].value}
          onChange={
            (e) => onChange(e, 0, 0, inputs[0].validator)
          }
          onBlur={
            (e) => onChange(e, 0, 0, inputs[0].validator)
          }
        />

        <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
          <InputLabel
            error={inputs[1].valid === false}
            htmlFor="outlined-adornment-password"
          >
            {inputs[1].label}
          </InputLabel>
          <OutlinedInput
            error={inputs[1].valid === false}
            value={inputs[1].value}
            onChange={
              (e) => onChange(e, 1, 0, inputs[1].validator)
            }
            onBlur={(e) => onChange(e, 1, 0, inputs[1].validator)}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          <FormHelperText error={inputs[1].valid === false}>
            {inputs[1].valid === false ? inputs[1].helperText : ""}
          </FormHelperText>
        </FormControl>
        <Button variant="contained" type="submit">
          {buttonText}
        </Button>
      </Box>
    );
  }
};

export default DatosUsuario;