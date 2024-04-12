import "./mapColorSlider.css"
import React, { useState, useEffect } from "react"
import { Box } from "@mui/system"
import { Slider } from "@mui/base"

export const MapColorSlider = ({
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
    setValue((!!defaultValues && [...defaultValues]) || [0, 35, 100])
  }, [defaultValues])

  return (
    <Box
      className="colorSliderWrapper"
      style={{ ...(width ? { width } : { width: "100%" }) }}
    >
      <Slider
        className="colorSlider"
        name={name}
        value={value}
        onChange={handleChange}
        getAriaLabel={() => "Temperature range"}
        min={0}
        max={100}
        slots={{ valueLabel: SliderValueLabel }}
        disabled={!!disabled}
        slotProps={{
          rail: {
            style: {
              background: [
                `linear-gradient(to right`,
                `rgb(84, 159, 245) 0%`,
                `rgb(84, 159, 245) ${value[0]}%`,
                `rgb(29, 190, 29) ${value[0]}%`,
                `rgb(29, 190, 29) ${value[1]}%`,
                `rgb(253, 215, 26) ${value[1]}%`,
                `rgb(253, 215, 26) ${value[2]}%`,
                `rgb(237, 28, 36) ${value[2]}%`,
                `rgb(237, 28, 36) 100%)`,
              ].join(","),
            },
          }
        }}
      />
    </Box>
  )
}
