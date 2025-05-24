import { TextField } from "@mui/material";

export const Input = (props: {
  type: "text" | "number" | "password";
  label: string;
  size?: "medium" | "small";
  autoFocus?: boolean;
}) => {
  const { type, label, size = "medium", autoFocus=false } = props;

  return (
    <>
      <TextField
        fullWidth
        type={type}
        label={label}
        variant="standard"
        size={size}
        autoComplete="off"
        sx={{ fontSize: "14px" }}
        autoFocus={autoFocus}
      />
    </>
  );
};
