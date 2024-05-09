import { fn } from "@storybook/test"
import { ArrowIcon } from "./ArrowIcon"
import { storybookSettings } from "../storybook/globals"
import { red, orange, yellow, green, blue } from "../../theme/ColorPallette"

const Decoration = ({ children }) => (
  <div
    style={{
      width: "50px",
      height: "50px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0px 0px 10px 0px #c6c3c3bf",
    }}
  >
    {children}
  </div>
)

export default {
  title: "Elements/ArrowIcon",
  component: ArrowIcon,
  parameters: {
    ...storybookSettings("centered"),
    controls: {
      exclude: ["backgroundColor"],
    },
  },
  tags: ["autodocs"],
  render: (args) => <ArrowIcon {...args} />,
}

export const Close = {
  args: {
    isOpen: false,
    setIsOpen: fn(),
  },
  decorators: [
    (Story) => (
      <Decoration>
        <Story />
      </Decoration>
    ),
  ],
}

export const Open = {
  args: {
    isOpen: true,
    setIsOpen: fn(),
  },
  decorators: [
    (Story) => (
      <Decoration>
        <Story />
      </Decoration>
    ),
  ],
}

export const Hovered = {
  args: {
    isOpen: false,
    setIsOpen: fn(),
  },
  parameters: { pseudo: { hover: true } },
  decorators: [
    (Story) => (
      <Decoration>
        <Story />
      </Decoration>
    ),
  ],
}


const getStarRow = (color) => (
  <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
    {Object.keys(color).map((variety, index) => (
      <ArrowIcon
        key={`ArrowIcon_${variety}_${index}`}
        isOpen={false}
        setIsOpen={fn()}
        backgroundColor={color[variety]}
      />
    ))}
  </div>
)

export const ColorVariety = {
  parameters: {
    controls: {
      exclude: ["open", "isOpen"],
    },
  },
  decorators: [],
  render: (args) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {getStarRow(red)}
        {getStarRow(orange)}
        {getStarRow(yellow)}
        {getStarRow(green)}
        {getStarRow(blue)}
      </div>
    )
  },
}
