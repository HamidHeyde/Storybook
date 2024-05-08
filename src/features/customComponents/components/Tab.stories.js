import { Tab } from "./Tab"
import { storybookSettings } from "../storybook/globals"
import { red, orange, yellow, green, blue } from "../../theme/ColorPallette"

export default {
  title: "Elements/Tab",
  component: Tab,
  parameters: {
    ...storybookSettings("centered"),
  },
  tags: ["autodocs"],
}

export const Default = {
  args: {
    children: "Some text",
  },
  render: (args) => <Tab {...args} />,
}


export const TextLengthVariety = {
  render: (args) => {
    return (
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        <Tab key={`Tab1`}>Some Text</Tab>
        <Tab key={`Tab2`}>Some Text Text</Tab>
        <Tab key={`Tab3`}>Some Text Text Text</Tab>
        <Tab key={`Tab4`}>Some Text Text Text</Tab>
        <Tab key={`Tab5`}>Some Text Text Text Text</Tab>
      </div>
    )
  },
}


const getTabRow = (color) => (
  <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
    {Object.keys(color).map((variety, index) => (
      <Tab 
        key={`Tab_${variety}_${index}`}
        backgroundColor={color[variety]}
      >Some Text</Tab>
    ))}
  </div>
)

export const ColorVariety = {
  render: (args) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {getTabRow(red)}
        {getTabRow(orange)}
        {getTabRow(yellow)}
        {getTabRow(green)}
        {getTabRow(blue)}
      </div>
    )
  },
}
