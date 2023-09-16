import React from "react";
import { MockAlertHandlerProvider } from "../src/contexts/alert_handler";

export const decorators = [
  (Story) => (
    <MockAlertHandlerProvider>
      <Story />
    </MockAlertHandlerProvider>
  ),
];
