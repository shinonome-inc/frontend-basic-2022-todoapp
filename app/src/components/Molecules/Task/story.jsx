import React from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Molecules/Task",
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  onTaskNameChanged: (value) => console.log("taskname changed: ", value),
  onTaskCompleted: () => console.log("task completed"),
  defaultIsEditing: true,
};
Default.decorators = [
  (Story) => (
    <div style={{ width: "256px" }}>
      <Story />
    </div>
  ),
];
