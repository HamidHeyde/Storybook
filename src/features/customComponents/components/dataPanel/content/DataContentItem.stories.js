import { fn } from "@storybook/test"
import { DataContentItem } from "./DataContentItem"
import { storybookSettings } from "../../../storybook/globals"
import { MapData } from "../../../data/MapsData"

export default {
  title: "Compounds/DataContentItem",
  component: DataContentItem,
  parameters: {
    ...storybookSettings("centered"),
    controls: {
      exclude: ["map", "children"],
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          width: "465px",
          height: "100px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => <DataContentItem {...args} />,
}

const map = {
  ...MapData[0],
  favorite: false,
  pin: false,
}

const TheChild = () => (
  <div
    style={{
      width: "100%",
      height: "100px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    }}
  >
    Detail info
  </div>
)

export const Default = {
  args: {
    children: <TheChild />,
    map,
    starClickHandler: fn(),
    pinClickHandler: fn(),
  },
}

export const Favorite = {
  args: {
    children: <TheChild />,
    map: { ...map, favorite: true },
    starClickHandler: fn(),
    pinClickHandler: fn(),
  },
}

export const Pinned = {
  args: {
    children: <TheChild />,
    map: { ...map, pin: true },
    starClickHandler: fn(),
    pinClickHandler: fn(),
  },
}

export const AllSates = {
  args: {
    children: <TheChild />,
    map: map,
    starClickHandler: fn(),
    pinClickHandler: fn(),
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <DataContentItem {...args} map={{ ...args.map, name: "Normal map" }} />
      <DataContentItem
        {...args}
        map={{ ...Pinned.args.map, name: "Pinned map" }}
      />
      <DataContentItem
        {...args}
        map={{ ...Favorite.args.map, name: "Favorite map" }}
      />
    </div>
  ),
}
