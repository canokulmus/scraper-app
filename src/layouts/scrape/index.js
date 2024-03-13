import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
import VuiInput from "components/VuiInput";
import VuiTypography from "components/VuiTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import SendIcon from '@mui/icons-material/SendAndArchive';
import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from "react";
import { runScraper } from "_services/prediction";

function Products() {

    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [scrapedData, setScrapedData] = useState(null);


    const handleClick = () => {
        if(url === "") {
            alert("Please enter a URL");
            return;
        }
        setLoading(true);
        getData()
    }

    const stop = () => {
        setLoading(false);
    }

    const getData = async () => {
        await Promise.allSettled([
            runScraper({
                url: url,
             })
                 .then((response) => {
                     console.log("scraped", response.data.data);
                     setScrapedData(response.data.data)
                     setLoading(false)
                 }
             )
         ])
     }
 

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <VuiBox py={3}>
            <VuiTypography 
                variant="lg" 
                color="white" 
                fontWeight="bold"
                sx={() => ({
                    marginTop: "50px !important",
                })}
            >
                Give a URL of the product you want to scrape
            </VuiTypography>
            <VuiBox
                sx={() => ({
                    display: "flex",
                    marginTop: "20px !important",
                    justifyContent: "center",
                })}
            >
                <VuiInput
                value = {url}
                onChange = {(e) => setUrl(e.target.value)}
                placeholder="Enter product URL..."
                sx={({ breakpoints }) => ({
                    maxWidth: "80%",
                    backgroundColor: "info.main !important",
                    height: "60px !important",
                    fontSize: "20px !important",

                    // placeholder
                    "&::placeholder": {
                        fontSize: "20px !important",
                    },
                    
                })}
                />
                <LoadingButton
                    size="large"
                    onClick={handleClick}
                    endIcon={<SendIcon />}
                    loading={loading}
                    loadingPosition="end"
                    variant="contained"
                    sx={{
                        marginLeft: "10px",
                        color: "white !important",
                        // clicked 
                        "&.MuiButton-contained.Mui-disabled": {
                            backgroundColor: "#66d432 !important",
                            color: "white !important",
                        },
                    }}
                    >
                    <span>{loading ? "Scraping..." :"Start Scraper"}</span>
                </LoadingButton>
            </VuiBox>

            { loading && (
                <VuiBox
                    sx={() => ({
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "50px",
                    })}
                >
                    <CircularProgress color="success" />
                    <VuiButton
                        color="warning"
                        onClick={stop}
                        sx = {({ breakpoints }) => ({
                            marginTop: "30px",
                        })}
                        size="large"
                    >
                        Stop Scraping
                    </VuiButton>
                </VuiBox>
            )}
            </VuiBox>
            <VuiBox>
                {scrapedData && (
                    <p style={{color: "white", padding:20, fontSize: "14px", overflow:"hidden"}}>
                        {scrapedData}
                    </p>
                )}
            </VuiBox>
        </DashboardLayout>
    );
}

export default Products;
