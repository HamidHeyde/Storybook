import { fn } from "@storybook/test"
import { Star } from "./Star"
import { storybookSettings } from "../storybook/globals"

export default {
  title: "1Elements/Star",
  component: Star,
  parameters: {
    ...storybookSettings("centered"),
    controls: {
      exclude: ["size"],
    },
  },
  tags: ["autodocs"],
  render: (args) => <Star {...args} />,
}

export const Default = {
  args: {
    id: 1,
    favorite: false,
    onClick: fn(),
    size: 5,
  },
}

export const Favorite = {
  args: {
    ...Default.args,
    favorite: true,
  },
}
