import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";//component rendering a circular progress indicator.
//The StatBox component is defined as a functional component that takes several props to customize its appearance. 
const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();//to access material-ui theme
  const colors = tokens(theme.palette.mode);//generates colors based on the theme.
//Typography represents text elements,
  return (
    //Box is a layout component
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}{/* first one displays the subtitle*/}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}{/* second one displays the increase*/}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
