import { fn } from "@storybook/test"
import { TodoItem } from "./TodoItem"
import { storybookSettings } from "../storybook/globals"

export default {
  title: "TaskPlanner/Compounds/TodoItem",
  component: TodoItem,
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
  render: (args) => <TodoItem {...args} />,
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
