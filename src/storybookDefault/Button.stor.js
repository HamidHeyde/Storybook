import { Button } from "./Button"
import { fn, userEvent, within } from "@storybook/test"
import { expect } from "@storybook/test"
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from "@storybook/blocks"


export default {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
}

export const Default = {
  args: {
    name: "myButton",
    primary: true,
    label: "Button",
    onClick: fn(),
  },
  argTypes: {
    backgroundColor: { control: "color" },
    label: { control: "text" },
    size: { control: "select" },
    // label: {
    //   control: "select",
    //   options: ["Normal", "Bold", "Italic"],
    //   mapping: {
    //     Bold: <b>Bold</b>,
    //     Italic: <i>Italic</i>,
    //   },
    // },
  },
  parameters: {
    layout: "centered",
    backgrounds: {
      values: [
        { name: "light", value: "#fff" },
        { name: "semi-dark", value: "#999" },
        { name: "dark", value: "#555" },
      ],
    },
    controls: {
      exclude: ["name"],
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  render: (args) => <Button {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const button = (await canvas.findAllByRole("button"))[0]

    expect(button).toBeInTheDocument()
    expect(button).toHaveClass("storybook-button--primary")

    await userEvent.click(button)
  },
}
