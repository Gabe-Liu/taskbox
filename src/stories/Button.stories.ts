// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Button from './button.component';

export default {
  title: 'Example/Button',
  component: Button,
  // argTypes
  // https://ithelp.ithome.com.tw/articles/10246667
  // https://storybook.js.org/docs/angular/essentials/controls
  argTypes: {
    backgroundColor: { control: 'color' },
    // // 修改事件名稱。前提： peview.js > actions > argTypesRegex 註解調
    // onClick: { action: '按鈕按下了' }
    size: {
      control: 'text',
      description: 'Overwritten description',
    }
    // size: {
    //   control: {
    //     type: 'multi-select',
    //     options: ['small', 'medium', 'large']
    //   }
    // }
  },
} as Meta;

const Template: Story<Button> = (args: Button) => ({
  component: Button,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
