import { Button as MuiButton } from "@mui/material";

export const Button = (props: {
  type: "submit" | "reset" | "button";
  displayText: string;
  size?: "small" | "medium" | "large";
  className?: string;
}) => {
  const { type, displayText, size="medium", className } = props;

  return (
    <MuiButton
      type={type}
      variant="contained"
      size={size}
      className={className}
      sx={{ backgroundColor: "#4C585B" }}
    >
      {displayText}
    </MuiButton>
  );
};
