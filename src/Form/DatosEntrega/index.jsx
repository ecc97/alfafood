import React, {useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarCampo } from "./validaciones";

const DatosEntrega = () => {
  const [estado, setEstado] = useState({
    direccion: { value: "", valid: true },
    ciudad: { value: "", valid: true },
    estado: { value: "", valid: true },
  });

  return (
    <Box
      onSubmit={(e) => {
        e.preventDefault();
        if (
          !validarCampo(estado.direccion.value) &&
          !validarCampo(estado.ciudad.value) &&
          !validarCampo(estado.estado.value)
        ) {
          console.log("Error de formulario 2: Entrega");
        } 
      }}
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingTop: "2rem",
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={estado.direccion.value}
        onChange={(e) => {
          const valueDireccion = e.target.value;
          const valid = validarCampo(valueDireccion);
          setEstado({
            ...estado,
            direccion: { value: valueDireccion, valid: valid },
          });
        }}
        onBlur={(e) => {
          const valueDireccion = e.target.value;
          const valid = validarCampo(valueDireccion);
          setEstado({
            ...estado,
            direccion: { value: valueDireccion, valid: valid },
          });
        }}
        error={!estado.direccion.valid}
        helperText={
          !estado.direccion.valid &&
          "Ingresa una dirección mayor o igual a 3 caracteres"
        }
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={estado.ciudad.value}
        onChange={(e) => {
          const valueCiudad = e.target.value;
          const valid = validarCampo(valueCiudad);
          setEstado({
            ...estado,
            ciudad: { value: valueCiudad, valid: valid },
          });
        }}
        onBlur={(e) => {
          const valueCiudad = e.target.value;
          const valid = validarCampo(valueCiudad);
          setEstado({
            ...estado,
            ciudad: { value: valueCiudad, valid: valid },
          });
        }}
        error={!estado.ciudad.valid}
        helperText={
          !estado.ciudad.valid &&
          "Ingresa una ciudad mayor o igual a 5 caracteres"
        }
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={estado.estado.value}
        onChange={(e) => {
          const valueEstado = e.target.value;
          const valid = validarCampo(valueEstado);
          setEstado({
            ...estado,
            estado: { value: valueEstado, valid: valid },
          });
        }}
        onBlur={(e) => {
          const valueEstado = e.target.value;
          const valid = validarCampo(valueEstado);
          setEstado({
            ...estado,
            estado: { value: valueEstado, valid: valid },
          });
        }}
        error={!estado.estado.valid}
        helperText={
          !estado.estado.valid &&
          "Ingresa un estado mayor o igual a 5 caracteres"
        }
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
