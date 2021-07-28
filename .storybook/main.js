// npx chromatic --project-token=6d3fb1f01b9e
module.exports = {
  // "stories": [
  //   "../src/**/*.stories.mdx",
  //   "../src/**/*.stories.@(js|jsx|ts|tsx)"
  // ],
  // "stories": ["../src/app/components/**/*.stories.ts"],
  "stories": ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": [
    "@storybook/addon-links",
    // '@storybook/addon-a11y',
    // "@storybook/addon-essentials"
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        // actions: false,
        // backgrounds: false,
        // controls: false,
        // docs: false,
        // viewport: false,
        // toolbars: false
      }
    }
  ]
}
