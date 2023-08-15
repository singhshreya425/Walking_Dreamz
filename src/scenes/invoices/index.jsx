import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

//fund
const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  //The configuration for the columns of the DataGrid is defined in the columns array.
  //The columns array defines the fields and headers for the DataGrid.
//The "Fund" column is configured with a custom cell renderer using a Typography component to display the fund amount.
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "Country",
      headerName: "Country",
      flex: 1,
      cellClassName: "name-column--cell",
    },
  
    {
      field: "Fund",
      headerName: "Fund",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.Fund}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="Fund" subtitle="List of Fund Balances" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
       {/*DataGrid component is displayed with mock invoice data and configured columns.*/}
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;
