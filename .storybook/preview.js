import { setCompodocJson } from "@storybook/addon-docs/angular";
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import docJson from "../documentation.json";
setCompodocJson(docJson);

const customViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};

export const parameters = {
  // 使用argTypesRegex就無法更改事件名稱
  actions: { argTypesRegex: "^on[A-Z].*" },
  // actions: { argTypesRegex: "^update[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  viewport: {
    // disable: true,
    // viewports: INITIAL_VIEWPORTS,
    // viewports: {
    //   ...customViewports,
    //   ...INITIAL_VIEWPORTS,
    // }
  },
};
