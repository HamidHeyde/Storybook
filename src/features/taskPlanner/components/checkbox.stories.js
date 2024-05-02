import { fn } from "@storybook/test"
import { Checkbox } from "./Checkbox"
import { storybookSettings } from "../storybook/globals"

export default {
  title: "1Elements/Checkbox",
  component: Checkbox,
  parameters: {
    ...storybookSettings("centered")
  },
  tags: ["autodocs"],
  render: (args) => <Checkbox {...args} />,
}

export const Default = {
  args: {
    id: 1,
    label: "",
    onClick: fn(),
    defaultChecked: false,
  },
}

export const Checked = {
  args: {
    id: 1,
    label: "",
    onClick: fn(),
    defaultChecked: true,
  },
}

export const WithLabel = {
  args: {
    id: 1,
    label: "Checkbox with label",
    onClick: fn(),
    defaultChecked: false,
  },
  parameters: {
    controls: {
      exclude: ["defaultChecked"],
    },
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", gap: "1.5rem", flexDirection: "column" }}>
        <Checkbox {...args} />
        <Checkbox {...args} defaultChecked={true} />
      </div>
    )
  },
}