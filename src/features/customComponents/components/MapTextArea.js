import "./mapTextArea.css"
import { MapLabel } from "./MapLabel"

export const MapTextArea = ({
  width,
  name,
  value,
  onChange,
  placeholder,
  disabled,
  readonly,
}) => {
  const textAreaProps = {
    ...{
      style: {
        width: `${width ? width : "100%"}`,
        maxWidth: `${width ? width : "100%"}`,
        minWidth: `${width ? width : "100%"}`,
      },
    },
    ...{ type: "text" },
    ...{ className: "mapTextAreaWrapper" },
    ...(name && { name }),
    ...(placeholder && { placeholder }),
    ...(disabled && { disabled }),
    ...(value && { value }),
    ...(onChange && { onChange }),
  }

  const labelProps = {
    ...{ style: { width: `${width ? width : "100%"}` } },
    ...(value && { text: value }),
    ...{ type: "normal" },
  }

  return !!readonly ? (
    <MapLabel {...labelProps} />
  ) : (
    <textarea {...textAreaProps} />
  )
}
