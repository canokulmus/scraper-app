import VuiBox from "components/VuiBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function Dashboard() {

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <VuiBox py={3}>
                DPS DASHBOARD
            </VuiBox>
        </DashboardLayout>
    );
}

export default Dashboard;
