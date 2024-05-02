import { fn } from "@storybook/test"
import { TaskItem } from "./TaskItem"
import { storybookSettings } from "../storybook/globals"

export default {
  title: "2Compounds/TaskItem",
  component: TaskItem,
  parameters: {
    ...storybookSettings("centered"),
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "500px" }}>
        <Story />
      </div>
    ),
  ],
}

// defaultArgs
const baseTaskItem = {
  id: 1,
  title: "Some task title",
  completed: false,
  favorite: false,
  pinned: false,
}
const baseFuncs = {
  onStarClickHandler: fn(),
  onPinClickHandler: fn(),
  onCheckboxClickHandler: fn(),
}

// States
export const Default = {
  parameters: {
    deepControls: { enabled: true },
    controls: {
      exclude: ["taskItem.id"],
    },
  },
  args: {
    taskItem: baseTaskItem,
    ...baseFuncs,
  },
  render: (args) => <TaskItem {...args} />,
}

// All states in a column
export const AllStates = {
  parameters: {
    controls: {
      exclude: [
        "taskItem",
        "onStarClickHandler",
        "onPinClickHandler",
        "onCheckboxClickHandler",
      ],
    },
  },
  args: {
    taskItem: baseTaskItem,
    ...baseFuncs,
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h4>Task Completed</h4>
        <TaskItem
          taskItem={{ ...baseTaskItem, completed: true }}
          {...baseFuncs}
        />
        <h4>Task Pinned</h4>
        <TaskItem taskItem={{ ...baseTaskItem, pinned: true }} {...baseFuncs} />
        <h4>Task chosen as Favorite</h4>
        <TaskItem
          taskItem={{ ...baseTaskItem, favorite: true }}
          {...baseFuncs}
        />
      </div>
    )
  },
}
