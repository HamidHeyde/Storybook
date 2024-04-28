import { fn } from "@storybook/test"
import { AddTodo } from "./AddTodo"
import { storybookSettings } from "../storybook/globals"

export default {
  title: "TaskPlanner/Compounds/AddTodo",
  component: AddTodo,
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
  render: (args) => <AddTodo {...args} />,
}

export const Default = {
  args: {
    todo: [
      {
        id: 1,
        completed: false,
        favorite: false,
        pinned: false,
        title: "1st One",
      },
    ],
    setTodo: fn(),
  },
}
