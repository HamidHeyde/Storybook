import { fn } from "@storybook/test"
import { SortButton } from "./SortButton"
import { storybookSettings } from "../storybook/globals"
import { MapData } from "../data/MapsData"

export default {
  title: "Elements/MapSortButton",
  component: SortButton,
  parameters: {
    ...storybookSettings("centered"),
    controls: {
      exclude: [],
    },
  },
  tags: ["autodocs"],
  render: (args) => <SortButton {...args} />,
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
  args: { maps: [...MapData], setMaps: fn(), sortOptionsActive: true },
}


