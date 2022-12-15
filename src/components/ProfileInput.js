import React from "react";
import TextField from "@mui/material/TextField";
import { INPUT_TYPES } from "../utils/objects/Frontend";
import { Button, MenuItem } from "@mui/material";
import { UploadFileOutlined } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";

const ProfileInput = ({
  type,
  name,
  title,
  required,
  onChange,
  value,
  autoComplete,
  placeholder,
  helperText,
  error = false,
  options,
  adornment = {
    display: false,
    content: "",
    type: "endAdornment",
    onClick: () => {},
  },
}) => {
  const inputFields = {
    [INPUT_TYPES.textField]: (
      <TextField
        margin="normal"
        required={required}
        fullWidth
        id={name}
        label={title}
        name={name}
        size="small"
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        InputProps={{
          ...(adornment.display && {
            ...{
              [adornment.type]: (
                <InputAdornment
                  position="end"
                  onClick={adornment.onClick}
                  style={{ cursor: "pointer" }}
                >
                  {adornment?.content}
                </InputAdornment>
              ),
            },
          }),
        }}
      />
    ),
    [INPUT_TYPES.date]: (
      <TextField
        margin="normal"
        type="date"
        required={required}
        fullWidth
        label={title}
        name={name}
        size="small"
        autoComplete={autoComplete}
        // autoFocus
        value={value}
        onChange={onChange}
        InputLabelProps={{ shrink: true, required: true }}
      />
    ),
    [INPUT_TYPES.file]: (
      <Button
        component="label"
        margin="normal"
        variant="outlined"
        startIcon={<UploadFileOutlined />}
        sx={{ marginRight: "1rem", marginTop: "1rem" }}
        onClick={onChange}
      >
        Upload File
      </Button>
    ),
    [INPUT_TYPES.select]: (
      <TextField
        select
        margin="normal"
        label={title}
        name={name}
        fullWidth
        value={value}
        onChange={onChange}
        error={error}
        helperText={helperText}
        placeholder={placeholder}
        isRequired={required}
      >
        {options &&
          options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </TextField>
    ),
  };

  return <div>{inputFields[type]}</div>;
};

export default ProfileInput;
