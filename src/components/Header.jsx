import { Typography, Box, useTheme } from "@mui/material";//Typography is used for text elements and Box is a layout component.
import { tokens } from "../theme";
//header
//Header component is defined as a functional component that takes two props: title and subtitle.
const Header = ({ title, subtitle }) => {
  //useTheme hook, and colors are generated based on the theme using the tokens function.
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}{/*Typography element displays the title prop */}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {/*Typography element displays the subtitle prop */}
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
