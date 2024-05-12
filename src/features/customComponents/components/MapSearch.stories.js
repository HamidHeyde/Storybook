import { fn } from "@storybook/test"
import { MapSearch } from "./MapSearch"
import { storybookSettings } from "../storybook/globals"
import { MapData } from "../data/MapsData"

export default {
  title: "Elements/MapSearchButton",
  component: MapSearch,
  parameters: {
    ...storybookSettings("centered"),
    controls: {
      exclude: [],
    },
  },
  tags: ["autodocs"],
  render: (args) => <MapSearch {...args} />,
}

export const Default = {
  args: { maps: [...MapData], setMaps: fn() },
}

export const Hovered = {
  parameters: { pseudo: { hover: true } },
  args: { maps: [...MapData], setMaps: fn() },
}

export const Clicked = {
  parameters: { pseudo: { hover: true } },
  args: { maps: [...MapData], setMaps: fn(), searchBoxOpen: true },
}