import { fn } from "@storybook/test"
import { Button } from "./Button"
import { storybookSettings } from "../storybook/globals"

export default {
  title: "1Elements/Button",
  component: Button,
  parameters: {
    ...storybookSettings("centered"),
  },
  tags: ["autodocs"],
  render: (args) => <Button {...args} />,
}

export const Default = {
  args: {
    width: 200,
    text: "Button Text",
    onClick: fn(),
  },
}

