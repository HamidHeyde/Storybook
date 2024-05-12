import "./mapTextArea.css"
import { MapLabel } from "./MapLabel"
import propTypes from "prop-types"

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

// propTypes
MapTextArea.propTypes = {
  width: propTypes.string,
  name: propTypes.string,
  value: propTypes.string,
  placeholder: propTypes.string,
  disabled: propTypes.bool,
  readonly: propTypes.bool,
  onChange: propTypes.func,
}