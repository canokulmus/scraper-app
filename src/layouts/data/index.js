import Card from "@mui/material/Card";
import Table from "examples/Tables/Table";
import VuiBox from "components/VuiBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import VuiTypography from "components/VuiTypography";
// Data
import scrapedData from "layouts/data/data/scrapedData";
import { getProducts } from "_services/prediction";
import { useEffect } from "react";

function Users() {
    const { columns, rows } = scrapedData;

    const getData = async () => {
        await Promise.allSettled([
            getProducts({
                 sample: true
             })
                .then((response) => {
                    console.log(response)
             })
         ])
     }

     useEffect(() => {
        getData()
      }, []); 
    

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <VuiBox py={3}>
                <Card>
                    <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="22px">
                        <VuiTypography variant="lg" color="white">
                            Data
                        </VuiTypography>
                    </VuiBox>
                    <VuiBox
                        sx={{
                            "& th": {
                                borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                                    `${borderWidth[1]} solid ${grey[700]}`,
                            },
                            "& .MuiTableRow-root:not(:last-child)": {
                                "& td": {
                                    borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                                        `${borderWidth[1]} solid ${grey[700]}`,
                                },
                            },
                        }}
                    >
                        <Table columns={columns} rows={rows} />
                    </VuiBox>
                </Card>
            </VuiBox>
        </DashboardLayout>
    );
}

export default Users;
