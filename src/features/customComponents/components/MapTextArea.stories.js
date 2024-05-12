import { fn } from "@storybook/test"
import { MapTextArea } from "./MapTextArea"
import { storybookSettings } from "../storybook/globals"

export default {
  title: "Elements/MapTextArea",
  component: MapTextArea,
  parameters: {
    ...storybookSettings("centered"),
    controls: {
      exclude: ["name"],
    },
  },
  tags: ["autodocs"],
  render: (args) => <MapTextArea {...args} />,
}

const textArgs = {
  width: "300px",
  name: "Default",
  value: "",
  placeholder: "",
  disabled: false,
  readonly: false,
  onChange: fn(),
}

export const Default = {
  args: {
    ...textArgs,
  },
}

export const WithValue = {
  args: {
    ...textArgs,
    value: "This is a value",
  },
}

export const WithPlaceholder = {
  args: {
    ...textArgs,
    placeholder: "This is a Placeholder",
  },
}

export const Disabled = {
  args: {
    ...textArgs,
    value: "This is a Disabled",
    disabled: true,
  },
}

export const Readonly = {
  args: {
    ...textArgs,
    value: "This is a Readonly",
    readonly: true,
  },
}

export const SizeVariety = {
  parameters: {
    controls: {
      exclude: [
        "width",
        "name",
        "value",
        "onChange",
        "placeholder",
        "disabled",
        "readonly",
      ],
    },
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <MapTextArea {...textArgs} width={"50px"} />
        <MapTextArea {...textArgs} width={"100px"} />
        <MapTextArea {...textArgs} width={"200px"} />
        <MapTextArea {...textArgs} width={"300px"} />
        <MapTextArea {...textArgs} width={"400px"} />
        <MapTextArea {...textArgs} width={"500px"} />
      </div>
    )
  },
}
