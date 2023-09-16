module.exports = {
  stories: ["../src/**/story.jsx"],
  addons: ["@storybook/addon-essentials"],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  docs: {
    autodocs: false,
  },
};
