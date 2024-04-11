import React, { useState, useEffect } from "react"
import { MapLabel } from "./MapLabel"
import SearchIcon from "@mui/icons-material/Search"
import ArrowDropUPIcon from "@mui/icons-material/ArrowDropUp"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"

/**
 * Sample Code 
 
const [fields, setFields] = useState({
  auto1: { text: undefined, value: undefined, index: undefined }, <== ** Default value **
})

const setFieldValue = (name, value) => {
  setFields({
      ...fields,
      [`${name}`]: value
  })
}

 <HMapAutoComplete
    width={'30%'}
    selectedOption={fields.auto1}
    setSelectedOption={setFieldValue}
    name={'auto1'} <== ** name equals to the one on the field mentioned above **
    options={[
        {value: 'value 0', text: 'text 0', index: 0},
        {value: 'value 1', text: 'text 1', index: 1},
        {value: 'value 2', text: 'text 2', index: 2},
        {value: 'value 3', text: 'text 3', index: 3},
        {value: 'value 4', text: 'text 4', index: 4},
        {value: 'value 5', text: 'text 5', index: 5},
    ]}
    readonly={true}
/>

 */
export const MapAutoComplete = ({
  width,
  options,
  name,
  selectedOption,
  setSelectedOption,
  readonly,
  onChange,
}) => {
  const [settings, setSettings] = useState({
    selectedItem: { text: undefined, value: undefined, index: undefined },
    selectedIndex: 0,
    filteredOptions: (options && [...options]) || [],
    open: false,
    inputValue: "",
  })

  useEffect(() => {
    const selectedItem =
      selectedOption &&
      options.filter(
        (item) => item.text.toLowerCase() === selectedOption.text.toLowerCase()
      )

    if (selectedItem && selectedItem.length) {
      setSettings({
        ...settings,
        selectedItem: { ...selectedItem },
        inputValue: selectedOption.text,
        filteredOptions: options.filter((item) =>
          item.text.toLowerCase().includes(selectedOption.text.toLowerCase())
        ),
      })
    }
  }, [])

  const handleChange = (e) => {
    const val = e.target.value

    const res = !!val
      ? options.filter((item) =>
          item.text.toLowerCase().includes(val.toLowerCase())
        )
      : [...options]
    setSettings({
      ...settings,
      filteredOptions: res,
      open: !!val,
      inputValue: val,
    })
  }

  const handleOnClick = (e) => {
    const idx = e.target.getAttribute("data-index")
    // console.log(idx)
    setSettings({
      ...settings,
      filteredOptions: [{ ...options[idx] }],
      selectedIndex: idx,
      selectedItem: { ...options[idx] },
      open: false,
      inputValue: options[idx].text,
    })

    !!setSelectedOption && setSelectedOption(name, { ...options[idx] })

    !!onChange && onChange({ target: { ...options[idx], name } })
  }

  const handleOnKeyDown = (e) => {
    if (e.keyCode === 13) {
      const val = e.target.value
      const theItem = settings.filteredOptions[0]

      if (!!val && theItem) {
        setSettings({
          ...settings,
          filteredOptions: [{ ...theItem }],
          selectedIndex: theItem.index,
          selectedItem: { ...theItem },
          open: false,
          inputValue: theItem.text,
        })

        !!setSelectedOption && setSelectedOption(name, { ...theItem })

        !!onChange && onChange({ target: { ...theItem, name } })
      } else {
        setSettings({
          ...settings,
          open: false,
          inputValue: "",
          filteredOptions: [...options],
        })

        !!setSelectedOption &&
          setSelectedOption(name, {
            ...{ text: undefined, value: undefined, index: undefined },
          })

        !!onChange &&
          onChange({
            target: {
              text: undefined,
              value: undefined,
              index: undefined,
              name,
            },
          })
      }
    }
  }

  const handleBlur = (e) => {
    const val = e.target.value

    if (!val) {
      setSettings({
        ...settings,
        open: false,
        inputValue: "",
        filteredOptions: [...options],
      })

      !!setSelectedOption &&
        setSelectedOption(name, {
          ...{ text: undefined, value: undefined, index: undefined },
        })

      !!onChange &&
        onChange({
          target: {
            text: undefined,
            value: undefined,
            index: undefined,
            name,
          },
        })
    }
  }

  return (
    <div
      name={`${name}AutoComplete`}
      className="autoCompWrapper"
      style={{ width }}
    >
      {!!readonly ? (
        <MapLabel
          type={"normal"}
          width={"100%"}
          text={(selectedOption && selectedOption.text)}
        />
      ) : (
        <>
          <div className="selectWrapper">
            <SearchIcon className="iconButton" />
            <input
              type="text"
              name={`${name}SearchBox`}
              className="searchBox"
              onChange={handleChange}
              value={settings.inputValue}
              onKeyDown={handleOnKeyDown}
              onBlur={handleBlur}
            />
            {settings.open ? (
              <ArrowDropUPIcon
                className="iconButton"
                onClick={() => {
                  setSettings({
                    ...settings,
                    open: false,
                  })
                }}
              />
            ) : (
              <ArrowDropDownIcon
                className="iconButton"
                onClick={() => {
                  setSettings({
                    ...settings,
                    open: true,
                  })
                }}
              />
            )}
          </div>
          <div className="optionsWrapper">
            {settings.open &&
              settings.filteredOptions.map((item) => {
                return (
                  <div
                    key={`${item.value || item.index}_${item.index}`}
                    name={`${name}Option${item.index}`}
                    data-index={item.index}
                    value={`${item.value || item.index}`}
                    className="option"
                    onClick={handleOnClick}
                  >
                    {item.text}
                  </div>
                )
              })}
          </div>
        </>
      )}
    </div>
  )
}
