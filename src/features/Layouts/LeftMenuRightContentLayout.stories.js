import { fn } from "@storybook/test"
import { storybookSettings } from "./storybook/globals"
import { LeftMenuRightContentLayout } from "./LeftMenuRightContentLayout"
import { ReactComponent as Map } from "../customComponents/assets/map.svg"

export default {
  title: "Layouts/Left Menu Right Content",
  component: LeftMenuRightContentLayout,
  parameters: {
    ...storybookSettings(""),
    controls: {
      exclude: ["selectedMenu"],
    }
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          boxSizing: "border-box",
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <>
      <LeftMenuRightContentLayout {...args}>
        {"The Content"}
      </LeftMenuRightContentLayout>
    </>
  ),
}

export const Default = {
  args: {
    menuItems: [
      {
        name: `Sample Menu Item 1`,
        icon: Map,
      },
      {
        name: `Sample Menu Item 2`,
        icon: Map,
      },
    ],
    selectedMenu: "Sample Menu Item 2",
    setSelectedMenu: fn(),
  },
}
