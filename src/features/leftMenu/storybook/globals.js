import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
  ArgTypes,
} from "@storybook/blocks"

export const storybookSettings = (componentPosition) => ({
  layout: componentPosition,
  backgrounds: {
    values: [
      { name: "white", value: "#fff" },
      { name: "gray", value: "#ccc" },
      { name: "dark", value: "#777" },
      { name: "black", value: "#000" },
    ],
  },
  docs: {
    page: () => (
      <>
        <Title />
        <Subtitle />
        <Description />
        {/* <Primary />
          <Controls /> */}
        <Stories />
        {/* <ArgTypes /> */}
        <Controls />
      </>
    ),
  },
})
