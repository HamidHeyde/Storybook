import { fn } from "@storybook/test"
import { MenuItem } from "./MenuItem"
import { storybookSettings } from "../storybook/globals"
import { ReactComponent as Map } from "../../customComponents/assets/map.svg"

export default {
  title: "2Compounds/MenuItem",
  component: MenuItem,
  parameters: {
    ...storybookSettings("centered"),
    controls: {
      exclude: ["selectedMenu"],
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          width: "300px",
          height: "250px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "teal",
        }}
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => <MenuItem {...args} />,
}

const items = [1,2,3,4].map((page) => ({
  name: `Sample Menu Item ${page}`,
  icon: Map,
}))

export const Default = {
  args: {
    item: items[0],
    selectedMenu: undefined,
    menuItemClickHandler: fn(),
  },
}

export const Selected = {
  args: {
    item: items[0],
    selectedMenu: "Sample Menu Item 1",
    menuItemClickHandler: fn(),
  },
}

export const MultipleItems = {
  render: (args) => {
    return (
      <>
        {[...items].map((item, index) => (
          <MenuItem
            key={`${item.name}_${index}`}
            item={item}
            selectedMenu="Sample Menu Item 3"
            menuItemClickHandler={fn()}
          />
        ))}
      </>
    )
  },
}
