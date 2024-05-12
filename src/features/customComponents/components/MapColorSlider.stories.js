import { fn } from "@storybook/test"
import { MapColorSlider } from "./MapColorSlider"
import { storybookSettings } from "../storybook/globals"

export default {
  title: "Elements/MapColorSlider",
  component: MapColorSlider,
  parameters: {
    ...storybookSettings("centered"),
    controls: {
      exclude: ["name", "disabled"],
    },
  },
  tags: ["autodocs"],
  render: (args) => <MapColorSlider {...args} />,
}

export const Default = {
  args: {
    width: "250px",
    name: "Default",
    defaultValues: [0, 20, 100],
    onChange: fn(),
    disabled: false,
  },
}

export const Disabled = {
  args: {
    width: "250px",
    name: "Default",
    defaultValues: [0, 80, 100],
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
        <MapColorSlider {...args} width={"200px"} />
        <MapColorSlider {...args} width={"300px"} />
        <MapColorSlider {...args} width={"400px"} />
      </div>
    )
  },
}
