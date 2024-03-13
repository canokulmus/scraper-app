
import { useState } from "react";

import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiInput from "components/VuiInput";
import VuiButton from "components/VuiButton";
import VuiSwitch from "components/VuiSwitch";
import GradientBorder from "examples/GradientBorder";
import IconButton from "@mui/material/IconButton";
import DPSlogo from "assets/images/dps-logo1.svg";
import rgba from "assets/theme/functions/rgba";

import radialGradient from "assets/theme/functions/radialGradient";
import palette from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";
import { useHistory } from "react-router-dom";
import CoverLayout from "layouts/authentication/components/CoverLayout";

import bgSignIn from "assets/images/dps-signin.png";
function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSetRememberMe = () => setRememberMe(!rememberMe);


  const onSubmit = () => history.push("/scrape");

  return (
    <CoverLayout
      image={bgSignIn}
    >
      <VuiBox
        display="flex"
        justifyContent="center"
      >
        <IconButton
          transition="all .25s ease"
          justify="center"
          align="center"
          borderradius="15px"
          sx={({ palette: { secondary, grey }, borders: { borderRadius } }) => ({
            borderRadius: borderRadius.xl,
            padding: "25px",
            border: `1px solid ${grey[600]}`,
            marginBottom: "20px",
            backgroundColor: secondary.focus,
            "&:hover": {
              backgroundColor: rgba(secondary.focus, 0.5),
            },
          })}
        >
          <img
            src={DPSlogo}
            alt="DPS Logo"
            style={{
              width: "75px",
              height: "75px",
            }}
          />
        </IconButton>
      </VuiBox>

      <VuiBox component="form" role="form">
        <VuiBox mb={2}>
          <VuiBox mb={1} ml={0.5}>
            <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
              Username
            </VuiTypography>
          </VuiBox>
          <GradientBorder
            minWidth="100%"
            padding="1px"
            borderRadius={borders.borderRadius.lg}
            backgroundImage={radialGradient(
              palette.gradients.borderLight.main,
              palette.gradients.borderLight.state,
              palette.gradients.borderLight.angle
            )}
          >
            <VuiInput
              type="text"
              placeholder="Enter username"
              fontWeight="500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </GradientBorder>
        </VuiBox>
        <VuiBox mb={2}>
          <VuiBox mb={1} ml={0.5}>
            <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
              Password
            </VuiTypography>
          </VuiBox>
          <GradientBorder
            minWidth="100%"
            borderRadius={borders.borderRadius.lg}
            padding="1px"
            backgroundImage={radialGradient(
              palette.gradients.borderLight.main,
              palette.gradients.borderLight.state,
              palette.gradients.borderLight.angle
            )}
          >
            <VuiInput
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </GradientBorder>
        </VuiBox>
        <VuiBox display="flex" alignItems="center">
          <VuiSwitch color="info" checked={rememberMe} onChange={handleSetRememberMe} />
          <VuiTypography
            variant="caption"
            color="white"
            fontWeight="medium"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp; Remember Me
          </VuiTypography>
        </VuiBox>
        <VuiBox mt={4} mb={1}>
          <VuiButton
            color="info"
            onClick={onSubmit}
            fullWidth>
            Sign In
          </VuiButton>
        </VuiBox>
      </VuiBox>
    </CoverLayout>
  );
}

export default SignIn;
