import { useTheme } from "@mui/material";//access the theme of the Material-UI components.
import { ResponsiveBar } from "@nivo/bar";//responsive and customizable bar chart component.
import { tokens } from "../theme";//that takes a theme object and generates colors.
import { mockBarData as data } from "../data/mockData";//containing the data used for the bar chart.

//barchart utilises the responsivebar components from @nivo/bar

///The BarChart component is defined as a functional component. It takes an optional prop isDashboard (defaulting to false) to determine certain display settings
const BarChart = ({ isDashboard = false }) => {
  //the component, the theme is accessed using the useTheme hook, and colors are generated based on the theme using the tokens function.
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    //configuration of charts appearance, data and other settings is done thrrough the various props provided to the responsive bart cpomponents
    <ResponsiveBar
      data={data}
      theme={{
        //// added
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      //data: The data for the bar chart.
      // theme: Custom theme settings for the chart's appearance.
      // keys: The keys (categories) to display on the chart.
      // indexBy: The key in the data to use as the x-axis (country names).
      // margin: Margins around the chart.
      keys={[
        "Covid case",
        "Death",
        "Active",
        "Passive",
        "Recovering",
        "Recovered",
      ]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "country", // changed
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "cases", // changed
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
    />
  );
};

export default BarChart;
