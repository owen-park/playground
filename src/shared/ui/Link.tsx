import { Link as MuiLink } from "@mui/material";

export const Link = (props: {
  href: string;
  displayText: string;
}) => {
  const { href, displayText } = props;

  return (
    <MuiLink href={href} underline="hover" sx={{ fontSize: "14px", color: "#7E99A3" }}>
      {displayText}
    </MuiLink>
  );
};
