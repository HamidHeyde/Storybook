import { fn } from "@storybook/test"
import { Star } from "./Star"
import { storybookSettings } from "../storybook/globals"
import { red, orange, yellow, green, blue } from "../../theme/ColorPallette"

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
    backgroundColor: "#18a2ff",
  },
}

export const Favorite = {
  args: {
    ...Default.args,
    favorite: true,
  },
}

const getStarRow = (color, args) => (
  <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
    {Object.keys(color).map((variety, index) => (
      <Star
        key={`Star_Red_${variety}`}
        id={index}
        backgroundColor={color[variety]}
        size={3}
        favorite={true}
        onClick={fn()}
      />
    ))}
  </div>
)

export const ColorVariety = {
  parameters: {
    controls: {
      exclude: ["id", "favorite", "size", "backgroundColor", "onClick"],
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
          <Star
            key={`Star_Size_${size}`}
            id={index}
            backgroundColor={blue[`${size*100}`]}
            size={size}
            favorite={true}
            onClick={fn()}
          />
        ))}
      </div>
    )
  }
}
