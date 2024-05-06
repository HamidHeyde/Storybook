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
    ],
    setTodo: fn(),
  },
}
