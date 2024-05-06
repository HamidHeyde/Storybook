import { storybookSettings } from "./storybook/globals"
import { red, orange, yellow, green, blue } from "./ColorPallette"

export default {
  title: "6Theme/ColorPallette",
  parameters: {
    ...storybookSettings("centered"),
  },
  tags: ["autodocs"],
}

const getColorPalletteRow = (color) => (
  <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
    {Object.keys(color).map((variety, index) => (
      <div
        key={`Star_Red_${variety}`}
        id={index}
        style={{ width: "2rem", height: "2rem", backgroundColor: color[variety], borderRadius: "30%" }}
      />
    ))}
  </div>
)

export const Default = {
  render: (args) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {getColorPalletteRow(red)}
        {getColorPalletteRow(orange)}
        {getColorPalletteRow(yellow)}
        {getColorPalletteRow(green)}
        {getColorPalletteRow(blue)}
      </div>
    )
  },
}