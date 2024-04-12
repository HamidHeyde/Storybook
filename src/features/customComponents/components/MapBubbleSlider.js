import "./mapBubbleSlider.css"
import React, { useState, useEffect } from "react"
import { Box } from "@mui/system"
import { Slider } from "@mui/base"

export const MapBubbleSlider = ({
  width,
  name,
  defaultValues,
  onChange,
  disabled,
}) => {
  const [value, setValue] = useState([])

  const handleChange = (event, newValue) => {
    var minDistance = 5
    const res = newValue.map((val, idx) => {
      if (idx === 1) {
        if (val < 10) return 10
        if (val > value[2]) return val - minDistance
        return val
      }
      if (idx === 2) {
        if (val > 100 - minDistance) return 100 - minDistance
        if (val < value[1]) return val + minDistance
        return val
      }

      return val
    })
    setValue([...res])
    !!onChange && onChange({ target: { value: [...res], name } })
  }

  const SliderValueLabel = ({ index, children }) => {
    return (
      <span data-index={`${index}`} className="label">{`${children}%`}</span>
    )
  }

  useEffect(() => {
    setValue((!!defaultValues && [...defaultValues]) || [0, 25, 50, 75, 100])
  }, [defaultValues])

  return (
    <Box
      className="bubbleSliderWrapper"
      style={{ ...(width ? { width } : { width: "100%" }) }}
    >
      <Slider
        className={["bubbleSlider"].join(" ")}
        name={name}
        value={value}
        onChange={handleChange}
        getAriaLabel={() => "Temperature range"}
        min={0}
        max={100}
        slots={{ valueLabel: SliderValueLabel }}
        disabled={!!disabled}
      />
    </Box>
  )
}
