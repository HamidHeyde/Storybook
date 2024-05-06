import { TaskPlanner } from "../taskPlanner"
import { CustomComponents as HeatMaps } from "../customComponents"
import { ReactComponent as Map } from "../customComponents/assets/map.svg"
import { ReactComponent as Task } from "../customComponents/assets/todo.svg"
import { TodoListData } from "../taskPlanner/data/TodoListData"

export const HomePageComponents = [
  {
    name: "HeatMaps",
    icon: Map,
    Component: HeatMaps,
    Props: {},
  },
  {
    name: "TaskPlanner",
    icon: Task,
    Component: TaskPlanner,
    Props: { TodoListData },
  },
]
