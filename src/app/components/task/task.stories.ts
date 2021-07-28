// src/app/components/task.stories.ts
import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TaskComponent } from './task.component';
import { Task } from '../../models/task.model';
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
// export default {
//   title: 'Task',
//   excludeStories: /.*Data$/,
// };

// export const actionsData = {
//   onPinTask: action('onPinTask'),
//   onArchiveTask: action('onArchiveTask'),
// };

// export const taskData = {
//   id: '1',
//   title: 'Test Task',
//   state: 'Task_INBOX',
//   updated_at: new Date(2019, 0, 1, 9, 0),
// };
// export const Default = () => ({
//   component: TaskComponent,
//   props: {
//     task: taskData,
//     onPinTask: actionsData.onPinTask,
//     onArchiveTask: actionsData.onArchiveTask,
//   },
// });
// // pinned task state
// export const Pinned = () => ({
//   component: TaskComponent,
//   props: {
//     task: {
//       ...taskData,
//       state: 'TASK_PINNED',
//     },
//     onPinTask: actionsData.onPinTask,
//     onArchiveTask: actionsData.onArchiveTask,
//   },
// });
// // archived task state
// export const Archived = () => ({
//   component: TaskComponent,
//   props: {
//     task: {
//       ...taskData,
//       state: 'TASK_ARCHIVED',
//     },
//     onPinTask: actionsData.onPinTask,
//     onArchiveTask: actionsData.onArchiveTask,
//   },
// });

export default {
  component: TaskComponent,
  decorators: [
    moduleMetadata({
      declarations: [TaskComponent],
      imports: [CommonModule],
    }),
  ],
  excludeStories: /.*Data$/,
  title: 'Task',
  argTypes: {
    state: {
        control: {
          type: 'inline-radio',
          options: ['Task_INBOX', 'TASK_PINNED', 'TASK_ARCHIVED'],
        },
    },
    updated_at: { control: 'date'}
  },
  parameters: {
    // the viewports object from the Essentials addon
    viewport: {
      // the viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      // your own default viewport
      defaultViewport: 'iphone6'
    },
  }
} as Meta;

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};
export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'Task_INBOX',
  updated_at: new Date(2019, 0, 1, 9, 0),
};

const Template: Story<Task> = (args: Task) => ({
  component: TaskComponent,
  props: {
      task: args,
      onPinTask: actionsData.onPinTask,
      onArchiveTask: actionsData.onArchiveTask,
  }
});

export const Default = Template.bind({});
Default.args = taskData;

// Pinned Task State
export const Pinned = Template.bind({});
Pinned.args = Object.assign({}, taskData, {state: "TASK_PINNED"});

// Archived Task State
export const Archived = Template.bind({});
Archived.args = Object.assign({}, taskData, {state: "TASK_ARCHIVED"});
Archived.parameters = {
  viewport: {
    defaultViewport: 'iphone12'
  },
  // docs: {
  //   source: {code: 'Some custom string here'}
  // },
};
