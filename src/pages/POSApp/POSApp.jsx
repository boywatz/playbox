import * as React from "react";
import "./POSApp.css";
import ResponsiveContainer from "../../components/ResponsiveContainer";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export const POSApp = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {};
  const handleBack = () => {};
  const steps = [
    {
      label: "Customer Selection",
      element: <div>Customer Selection Component</div>,
    },
    {
      label: "Product Selection",
      element: <div>Product Selection Component</div>,
    },
    {
      label: "Payment",
      element: <div>Payment Component</div>,
    },
  ];

  return (
    <div className="pos-app">
      <div style={{ marginBottom: "40px" }}>
        <ResponsiveContainer deviceType="tablet-landscape">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid size={12}>
                <Stepper activeStep={activeStep} alternativeLabel>
                  {steps.map((step, index) => (
                    <Step key={index} onClick={() => setActiveStep(index)}>
                      <StepLabel>{step.label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                <div>{steps[activeStep].element}</div>
              </Grid>
            </Grid>
          </Box>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default POSApp;
