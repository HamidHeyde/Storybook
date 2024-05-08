import { fn } from "@storybook/test"
import { AddButton } from "./AddButton"
import { storybookSettings } from "../storybook/globals"
import { red, orange, yellow, green, blue } from "../../theme/ColorPallette"

export default {
  title: "Elements/NewButton",
  component: AddButton,
  parameters: {
    ...storybookSettings("centered"),
  },
  tags: ["autodocs"],
  render: (args) => <AddButton {...args} />,
}

export const Default = {
  args: {
    onClick: fn()
  },
}

export const Hovered = {
  args: {
    onClick: fn(),
    backgroundColor: "teal",
  },
}

const getNewRow = (color) => (
  <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
    {Object.keys(color).map((variety, index) => (
      <AddButton
        key={`New_${variety}_${index}`}
        onClick={fn()}
        backgroundColor={color[variety]}
      />
    ))}
  </div>
)

export const ColorVariety = {
  parameters: {
    controls: {
      exclude: ["id", "pinned", "size", "backgroundColor", "onClick"],
    },
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {getNewRow(red)}
        {getNewRow(orange)}
        {getNewRow(yellow)}
        {getNewRow(green)}
        {getNewRow(blue)}
      </div>
    )
  },
}

