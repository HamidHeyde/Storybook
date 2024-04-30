import { fn } from "@storybook/test"
import { TaskItem } from "./TaskItem"
import { storybookSettings } from "../storybook/globals"

export default {
  title: "Compounds/TaskItem",
  component: TaskItem,
  parameters: {
    ...storybookSettings("centered"),
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "500px" }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => <TaskItem {...args} />,
}

export const Default = {
  args: {
    todoItem: {
      id: 1,
      title: "1st One",
      completed: false,
      favorite: false,
      pinned: false,
    },
    onStarClickHandler: fn(),
    onPinClickHandler: fn(),
    onCheckboxClickHandler: fn(),
  },
}
