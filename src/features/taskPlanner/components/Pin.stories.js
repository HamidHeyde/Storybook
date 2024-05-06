import { fn } from "@storybook/test"
import { Pin } from "./Pin"
import { storybookSettings } from "../storybook/globals"
import { red, orange, yellow, green, blue } from "../../theme/ColorPallette"


export default {
  title: "Elements/Pin",
  component: Pin,
  parameters: {
    ...storybookSettings("centered"),
    controls: {
      exclude: ["size"],
    },
  },
  tags: ["autodocs"],
  render: (args) => <Pin {...args} />,
}

export const Default = {
  args: {
    id: 1,
    pinned: false,
    onClick: fn(),
    size: 5,
    backgroundColor: blue[400],
  },
}


export const Pinned = {
  args: {
    ...Default.args,
    pinned: true,
  }
}
const getStarRow = (color, args) => (
  <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
    {Object.keys(color).map((variety, index) => (
      <Pin
        key={`Star_Red_${variety}`}
        id={index}
        backgroundColor={color[variety]}
        size={3}
        pinned={true}
        onClick={fn()}
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
        {getStarRow(red, args)}
        {getStarRow(orange, args)}
        {getStarRow(yellow, args)}
        {getStarRow(green, args)}
        {getStarRow(blue, args)}
      </div>
    )
  },
}

export const SizeVariety = {
  parameters: ColorVariety.parameters,
  render: (args) => {
    return (
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        {[6, 5, 4, 3, 2, 1].map((size, index) => (
          <Pin
            key={`Star_Size_${size}`}
            id={index}
            backgroundColor={blue[`${size * 100}`]}
            size={size}
            pinned={true}
            onClick={fn()}
          />
        ))}
      </div>
    )
  },
}
