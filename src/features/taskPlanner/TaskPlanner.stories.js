import { TodoApp } from "./"
import { storybookSettings } from "./storybook/globals"

export default {
  title: "3Modules/TaskPlanner",
  component: TodoApp,
  parameters: {
    ...storybookSettings("centered"),
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{width: "600px"}}>
        <Story />
      </div>
    ),
  ],
  render: (args) => <TodoApp {...args} />,
}

export const Default = {
  args: {
    TodoListData: [
      {
        id: 1,
        title: "Learn React",
        completed: false,
        pinned: true,
        favorite: false,
      },
      {
        id: 2,
        title: "Learn Redux",
        completed: true,
        pinned: false,
        favorite: true,
      },
    ],
  },
}
