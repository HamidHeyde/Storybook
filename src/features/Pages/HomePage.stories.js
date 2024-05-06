import { HomePage } from "./HomePage"
import { storybookSettings } from "./storybook/globals"

export default {
  title: "5Pages/HomePage",
  component: HomePage,
  parameters: {
    ...storybookSettings(""),
  },
  tags: ["autodocs"],
  render: (args) => (
    <>
      <HomePage {...args}>
        {"The Content"}
      </HomePage>
    </>
  ),
}

export const Default = {
  args: {},
}
