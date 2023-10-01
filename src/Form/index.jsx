import React, {useState, useEffect} from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, MainSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import Step from './Step'

import { validarEmail, validarPassword } from "./DatosUsuario/validaciones";
import { validarNombre, validarApellidos, validarTelefono } from "./DatosPersonales/validaciones";
import { validarCampo } from "./DatosEntrega/validaciones";

const Form = () => {
  const [step, setStep] = useState(0);
  const [pasos, setPasos] = useState({
    0: {
      inputs: [
        {
          label: "Correo electrónico",
          type: "email",
          value: "",
          valid: null,
          helperText: "Ingresa un correo electrónico válido",
          validator: validarEmail,
        },
        {
          label: "Password",
          value: "",
          valid: null,
          helperText: "Ingresa una password entre 8 y 20 caracteres",
          validator: validarPassword,
        },
      ],
      buttonText: "Siguiente",
    },
    1: {
      inputs: [
        {
          label: "Nombre",
          type: "text",
          value: "",
          valid: null,
          helperText: "Ingresa un nombre entre 3 y 15 caracteres",
          validator: validarNombre,
        },
        {
          label: "Apellidos",
          type: "text",
          value: "",
          valid: null,
          helperText: "Ingresa apellidos entre 10 y 30 caracteres",
          validator: validarApellidos,
        },
        {
          label: "Número telefónico",
          type: "number",
          value: "",
          valid: null,
          helperText: "Ingresa un teléfono entre 9 y 14 caracteres",
          validator: validarTelefono,
        },
      ],
      buttonText: "Siguiente",
    },
    2: {
      inputs: [
        {
          label: "Dirección",
          type: "text",
          value: "",
          valid: null,
          helperText: "Ingresa una dirección mayor o igual a 3 caracteres",
          validator: validarCampo,
        },
        {
          label: "Ciudad",
          type: "text",
          value: "",
          valid: null,
          helperText: "Ingresa una ciudad mayor o igual a 5 caracteres",
          validator: validarCampo,
        },
        {
          label: "Estado/Provincia",
          type: "text",
          value: "",
          valid: null,
          helperText: "Ingresa un estado mayor o igual a 5 caracteres",
          validator: validarCampo,
        },
      ],
      buttonText: "Crear cuenta",
    },
  });

  const onChange = (e, index, step, validator) => {
    const value = e.target.value;
    const valid = validator(value);

    setPasos({
      ...pasos,
      [step]: {
        ...pasos[step],
        inputs: pasos[step].inputs.map((objeto, indexarray) => {
          if (indexarray === index) {
            return {
              ...pasos[step].inputs[index],
              value: value,
              valid: valid,
            };
          } else {
            return objeto;
          }
        }),
      },
    });
  };
  
  const onSubmit = (e, step) => {
    e.preventDefault();
    const checkAllValidity = pasos[step].inputs
      .map((objeto) => objeto.valid)
      .every((elemento) => elemento === true);

    if (checkAllValidity) {
      setStep({
        [step]: pasos[step].inputs.map((objeto) => objeto.value),
      });
      setStep(step + 1);
    } else {
      alert("Te falta completar uno o más campos");
    }
  };

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AlfaFood</Typography>
      </LogoSpace>
      <FormSpace>
        <Stepper step={step} />
        <Step
          data={pasos[step]}
          step={step}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </FormSpace>
    </Box>
  );
};

export default Form;
