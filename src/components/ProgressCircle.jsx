import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
//progressive
//The ProgressCircle component is defined as a functional component that takes two props: progress and size.
const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  //theme is accessed using the useTheme hook, and colors are generated based on the theme using the tokens function.
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  //The angle is calculated based on the progress prop, which is a value between 0 and 1. The angle is derived by multiplying the progress value by 360 degrees.
  const angle = progress * 360;
  return (
    <Box
    //sx prop is used to apply inline styling to the Box element.
      sx={{
        //background property is set to a combination of radial and conic gradients with specific color stops and angles.
        //resulting background style combines a radial gradient that creates a half-circle, a conic gradient that simulates the progress, and a solid color outer circle.
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
            ${colors.greenAccent[500]}`,
        borderRadius: "50%",//borderRadius is set to create a circular shape
        //width and height properties are used to define the size of the circle based on the size prop.
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
