import { fn } from "@storybook/test"
import { TextInput } from "./TextInput"
import { storybookSettings } from "../storybook/globals"

export default {
  title: "1Elements/TextInput",
  component: TextInput,
  parameters: {
    ...storybookSettings("centered"),
  },
  tags: ["autodocs"],
  render: (args) => <TextInput {...args} />,
}

export const Default = {
  args: {
    width: 200,
    value: "Some text value",
    onChange: fn(),
  },
}
