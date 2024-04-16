import "./mapTextField.css"
import { MapLabel } from "./MapLabel"

export const MapTextField = ({
  width,
  name,
  value,
  onChange,
  placeholder,
  disabled,
  readonly,
}) => {
  const textFieldProps = {
    ...{ style: { width: `${width ? width : "100%"}` } },
    ...{ type: "text" },
    ...{ className: "mapTextFieldWrapper" },
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
    <input {...textFieldProps} />
  )
}
