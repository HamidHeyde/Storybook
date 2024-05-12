import { MapLabel } from "./MapLabel"
import { storybookSettings } from "../storybook/globals"

const Decoration = ({ children }) => (
  <div
    style={{
      width: "300px",
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
  title: "Elements/MapLabel",
  component: MapLabel,
  parameters: {
    ...storybookSettings("centered"),
    controls: {
      exclude: ["name"],
    },
  },
  tags: ["autodocs"],
  ArgTypes: {
    type: {
      control: {
        type: "select",
        options: ["normal", "title"],
      },
    },
  },
  render: (args) => <MapLabel {...args} />,
}

export const Normal = {
  args: {
    width: "190px",
    type: "normal",
    text: "This is a Sample Normal text",
  },
  decorators: [
    (Story) => (
      <Decoration>
        <Story />
      </Decoration>
    ),
  ],
}

export const Title = {
  args: {
    width: "190px",
    type: "title",
    text: "This is a Sample Title text",
  },
  decorators: [
    (Story) => (
      <Decoration>
        <Story />
      </Decoration>
    ),
  ],
}

export const SizeVariety = {
  parameters: {
    controls: {
      exclude: [
        "width",
        "type",
        "text"
      ],
    },
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <MapLabel type={"title"} width={"100px"} text={"Title text"} />
        <MapLabel type={"normal"} width={"100px"} text={"Normal text"} />
        <MapLabel
          type={"title"}
          width={"200px"}
          text={"This is a Sample Title text"}
        />
        <MapLabel
          type={"normal"}
          width={"200px"}
          text={"This is a Sample Normal text"}
        />
        <MapLabel
          type={"title"}
          width={"300px"}
          text={"This is a Sample long long Title text"}
        />
        <MapLabel
          type={"normal"}
          width={"300px"}
          text={"This is a Sample long long Normal text"}
        />
        <MapLabel
          type={"title"}
          width={"400px"}
          text={"This is a Sample long long long long Title text"}
        />
        <MapLabel
          type={"normal"}
          width={"400px"}
          text={"This is a Sample long long long long Normal text"}
        />
      </div>
    )
  },
}
