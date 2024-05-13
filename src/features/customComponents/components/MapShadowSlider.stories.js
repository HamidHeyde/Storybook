import { fn } from "@storybook/test"
import { MapShadowSlider } from "./MapShadowSlider"
import { storybookSettings } from "../storybook/globals"

export default {
  title: "Elements/MapShadowSlider",
  component: MapShadowSlider,
  parameters: {
    ...storybookSettings("centered"),
    controls: {
      exclude: ["name", "disabled"],
    },
  },
  tags: ["autodocs"],
  render: (args) => <MapShadowSlider {...args} />,
}

export const Default = {
  args: {
    width: "250px",
    name: "Default",
    defaultValues: [0, 20, 40, 100],
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
        <MapShadowSlider {...args} width={"200px"} />
        <MapShadowSlider {...args} width={"300px"} />
        <MapShadowSlider {...args} width={"400px"} />
      </div>
    )
  },
}
