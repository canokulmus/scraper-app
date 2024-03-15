import Card from "@mui/material/Card";
import Table from "examples/Tables/Table";
import VuiBox from "components/VuiBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import VuiTypography from "components/VuiTypography";
import { getScrapedData } from "_services/prediction";
import { useEffect, useState } from "react";

function ScrapedDataTable() {

    const [rows, setRows] = useState([])

    const getData = async () => {
        getScrapedData({ })
        .then((response) => {
            setRows(response.data.data.map((item) => ({

                journalID: <VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                    {item.journalID ? item.journalID : ""}
                    </VuiTypography>,
                articleTitle:<VuiTypography variant="caption" color="white" fontWeight="medium">
                    {item.articleTitle ? item.articleTitle : ""}
                    </VuiTypography>,
                articleWriters:<VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                        {(item.articleWriters && item.articleWriters.length && Array.isArray(item.articleWriters)) > 0 ? item.articleWriters.join(", ") : ""}
                    </VuiTypography>,
                articleType: (
                    <VuiTypography variant="caption" color="white" fontWeight="medium">
                    {item.articleType ? item.articleType : ""}
                    </VuiTypography>
                ),
                articleDate: (
                    <VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                    {item.articleDate ? item.articleDate : ""}
                    </VuiTypography>
                ),
                journalTitle: (
                    <VuiTypography variant="caption" color="white" fontWeight="medium">
                    {item.journalTitle ? item.journalTitle : ""}
                    </VuiTypography>
                ),
                searchKeywords: (
                    <VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                    {(item.searchKeywords && item.searchKeywords.length && Array.isArray(item.searchKeywords)) > 0 ? item.searchKeywords.join(", ") : ""}
                    </VuiTypography>
                ),
                articleKeywords: (
                    <VuiTypography variant="caption" color="white" fontWeight="medium">
                    {item.articleKeywords && item.articleKeywords.length && Array.isArray(item.articleKeywords) > 0 ? item.articleKeywords.join(", ") : ""}
                    </VuiTypography>
                ),
                articleAbstract: (
                    <VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                    {item.articleAbstract ? item.articleAbstract : ""}
                    </VuiTypography>
                ),
                articleRefrences: (
                    <VuiTypography variant="caption" color="white" fontWeight="medium">
                    {item.articleRefrences && item.articleRefrences.length && Array.isArray(item.articleRefrences) > 0 ? item.articleRefrences.join(" | ") : ""}
                    </VuiTypography>
                ),
                articleCitations: (
                    <VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                    {item.articleCitations ? item.articleCitations : ""}
                    </VuiTypography>
                ),
                articleDoi: (
                    <VuiTypography variant="caption" color="white" fontWeight="medium">
                    {item.articleDoi ? item.articleDoi : ""}
                    </VuiTypography>
                ),
                articleURL: (
                    <VuiTypography component="a" href={item.articleURL} variant="caption" color="text" fontWeight="medium">
                    {item.articleURL ? item.articleURL : ""}
                    </VuiTypography>
                ),
                pdfURL: (
                    <VuiTypography component="a" href={item.pdfURL}  variant="caption" color="white" fontWeight="medium">
                        {item.pdfURL ? item.pdfURL : ""}
                    </VuiTypography>
                ),
                })))
        })
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
                        {rows.length > 0 && (
                            <Table rows={rows} />
                        )}
                    </VuiBox>
                </Card>
            </VuiBox>
        </DashboardLayout>
    );
}

export default ScrapedDataTable;
