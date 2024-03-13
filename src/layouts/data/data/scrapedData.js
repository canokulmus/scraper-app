import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

import { data } from "variables/data";

function Function({ job, org }) {
  return (
    <VuiBox display="flex" flexDirection="column">
      <VuiTypography variant="caption" fontWeight="medium" color="white">
        {job}
      </VuiTypography>
      <VuiTypography variant="caption" color="text">
        {org}
      </VuiTypography>
    </VuiBox>
  );
}

export default {
  columns: [
    { name: "ID", align: "left" },
    { name: "yayinid", align: "left" },
    { name: "Yayın adı", align: "center" },
    { name: "yazar", align: "center" },
    { name: "sayfa", align: "center" },
  ],

  rows: data.map((item) => ({

    ID: <VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        {item.id}
      </VuiTypography>,
    isim:<VuiTypography variant="caption" color="white" fontWeight="medium">
        "{item.yayinid}"
      </VuiTypography>,
    yayinEvi:<VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.yayinEvi}
        </VuiTypography>,
    yazar: (
      <VuiTypography variant="caption" color="white" fontWeight="medium">
        Authorized User
      </VuiTypography>
    ),
    sayfa: (
      <VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        {item.sayfa}
      </VuiTypography>
    ),
  })),
};
