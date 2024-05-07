import { TaskPlanner } from "."
import { storybookSettings } from "./storybook/globals"

export default {
  title: "Modules/TaskPlanner",
  component: TaskPlanner,
  parameters: {
    ...storybookSettings("centered"),
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "600px" }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => <TaskPlanner {...args} />,
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
