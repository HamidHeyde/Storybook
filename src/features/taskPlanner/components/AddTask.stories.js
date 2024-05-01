import { fn } from "@storybook/test"
import { AddTask } from "./AddTask"
import { storybookSettings } from "../storybook/globals"

export default {
  title: "Compounds/AddTask",
  component: AddTask,
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
  render: (args) => <AddTask {...args} />,
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
