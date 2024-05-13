import { fn } from "@storybook/test"
import { MapBubbleSlider } from "./MapBubbleSlider"
import { storybookSettings } from "../storybook/globals"
import propTypes from "prop-types"

export default {
  title: "Elements/MapBubbleSlider",
  component: MapBubbleSlider,
  parameters: {
    ...storybookSettings("centered"),
    controls: {
      exclude: ["name", "disabled"],
    },
  },
  tags: ["autodocs"],
  render: (args) => <MapBubbleSlider {...args} />,
}

export const Default = {
  args: {
    width: "250px",
    name: "Default",
    defaultValues: [0, 20, 40, 70, 100],
    onChange: fn(),
    disabled: false,
  },
}

export const Disabled = {
  args: {
    width: "250px",
    name: "Default",
    defaultValues: [0, 40, 80, 100],
    onChange: fn(),
    disabled: true,
  },
}

export const SizeVariety = {
  args: {
    width: "250px",
    name: "Default",
    defaultValues: [0, 30, 70, 100],
    onChange: fn(),
    disabled: true,
  },
  parameters: {
    controls: {
      exclude: ["width", "name", "defaultValues", "onChange", "disabled"],
    },
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <MapBubbleSlider
          {...args}
          width={"200px"}
          defaultValues={[0, 100]}
        />
        <MapBubbleSlider
          {...args}
          width={"300px"}
          defaultValues={[0, 30, 70, 100]}
        />
        <MapBubbleSlider
          {...args}
          width={"400px"}
          defaultValues={[0, 20, 40, 70, 100]}
        />
      </div>
    )
  },
}

// propTypes
MapBubbleSlider.propTypes = {
  width: propTypes.string,
  name: propTypes.string,
  defaultValues: propTypes.array,
  onChange: propTypes.func,
  disabled: propTypes.bool,
}