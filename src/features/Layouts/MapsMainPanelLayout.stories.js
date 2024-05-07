import { storybookSettings } from "./storybook/globals"
import { MapsMainPanelLayout } from "./MapsMainPanelLayout"

export default {
  title: "Layouts/Maps Main Panel Layout",
  component: MapsMainPanelLayout,
  parameters: {
    ...storybookSettings("centered"),
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          boxSizing: "border-box",
          width: "400px",
          height: "500px",
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
      <MapsMainPanelLayout>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          The Content
        </div>
      </MapsMainPanelLayout>
    </>
  ),
}

export const Default = {
  args: {},
}
