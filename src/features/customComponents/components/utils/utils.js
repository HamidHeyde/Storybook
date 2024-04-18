export const dynamicFieldsOptions = [
  {
    value: "50a85cc7-1602-4d8a-872b-40d0a27ad725",
    text: "incident records ",
    index: 0,
  },
  {
    value: "31e63d5c-dbc2-43a0-bb8e-aa57961fecab",
    text: "Production Capacity",
    index: 1,
  },
  {
    value: "21664875-8697-4459-a61f-974aa8f2e845",
    text: "Upgrade Schedule",
    index: 2,
  },
  {
    value: "71675fd5-334c-4add-ae9c-b13432f64fdc",
    text: "Mining Sites",
    index: 3,
  },
  {
    value: "4b1f1e15-58c1-4e39-9b0e-078b758435b7",
    text: "Expenses",
    index: 4,
  },
  {
    value: "3f7aa830-51d5-4462-b9d2-33a1daf9bb4d",
    text: "Revenue",
    index: 5,
  },
  {
    value: "5e7e6990-5280-4be4-ae53-46634637e58f",
    text: "Number of employees",
    index: 6,
  },
  {
    value: "a75c55ac-a01d-447e-aed3-d0d8972e6502",
    text: "Number of Assets",
    index: 7,
  },
]

export const operationsOptions = [
  { value: "count", text: "Count", index: 0 },
  { value: "avg", text: "Average", index: 1 },
  { value: "min", text: "Minimum", index: 2 },
  { value: "max", text: "Maximum", index: 3 },
]

export const getMetric = (metrics, ref, key) => {
  const theMetric = metrics.filter((metric) => metric["ref"] === ref)

  return !!theMetric?.length ? theMetric[0][key] : undefined
}

export const getOptions = (optionsList, metrics, ref, key) => {
  const metricValue = getMetric(metrics, ref, key)
  const optionItem = optionsList.filter(
    (option) =>
      option?.text?.toLowerCase() === metricValue?.toLowerCase() ||
      option?.value?.toLowerCase() === metricValue?.toLowerCase()
  )

  return !!optionItem?.length ? optionItem[0] : undefined
}

const checkName = (name) => (!name ? `Please assign a heatmap name` : false)

const checkAMetric = (fieldName, dynamicfield, calc) => {
  // To allow for less than 4 metrics (in case there are less than 4 numerical dynamicfields)
  if (!dynamicfield && !calc) return `Both Empty`

  // Number
  if (fieldName.includes("number")) {
    if (!dynamicfield) return `Please select pin data for Number`
    if (!calc) return `Please select pin value for Number`

    return false
  }

  // Size
  if (fieldName.includes("size")) {
    if (!dynamicfield) return `Please select pin data for Size`
    if (!calc) return `Please select pin value for Size`

    return false
  }

  // color
  if (fieldName.includes("color")) {
    if (!dynamicfield) return `Please select pin data for color`
    if (!calc) return `Please select pin value for color`

    return false
  }

  // shadow
  if (fieldName.includes("shadow")) {
    if (!dynamicfield) return `Please select pin data for shadow`
    if (!calc) return `Please select pin value for shadow`

    return false
  }

  return false
}

const checkMetrics = (metricsFields) => {
  /**
   * if only one is available,  it is still acceptable(at least 1 metric is required)
   * for each metric either both empty or both selected (dynamicField, calc)
   */

  //  Number
  const numberValidationMessage = checkAMetric(
    "number",
    metricsFields["number"]["field"],
    metricsFields["number"]["calc"]
  )

  // requires all 4 metrics to be available
  // if (numberValidationMessage) return numberValidationMessage

  // To allow for  less than 4 metrics (in case there are less than 4 numerical dynamicfields)
  if (numberValidationMessage && numberValidationMessage !== "Both Empty")
    return numberValidationMessage

  // Size
  const sizeValidationMessage = checkAMetric(
    "size",
    metricsFields["size"]["field"],
    metricsFields["size"]["calc"]
  )

  // requires all 4 metrics to be available
  // if (sizeValidationMessage) return sizeValidationMessage

  // To allow for less than 4 metrics (in case there are less than 4 numerical dynamicfields)
  if (sizeValidationMessage && sizeValidationMessage !== "Both Empty")
    return sizeValidationMessage

  // Color
  const colorValidationMessage = checkAMetric(
    "color",
    metricsFields["color"]["field"],
    metricsFields["color"]["calc"]
  )

  // requires all 4 metrics to be available
  // if (colorValidationMessage) return colorValidationMessage

  // To allow for less than 4 metrics (in case there are less than 4 numerical dynamicfields)
  if (colorValidationMessage && colorValidationMessage !== "Both Empty")
    return colorValidationMessage

  // Shadow
  const shadowValidationMessage = checkAMetric(
    "shadow",
    metricsFields["shadow"]["field"],
    metricsFields["shadow"]["calc"]
  )

  // requires all 4 metrics to be available
  // if (shadowValidationMessage) return shadowValidationMessage

  // To allow for less than 4 metrics (in case there are less than 4 numerical dynamicfields)
  if (shadowValidationMessage && shadowValidationMessage !== "Both Empty")
    return shadowValidationMessage

  /**
   * No Metric
   */
  if (
    numberValidationMessage === "Both Empty" &&
    sizeValidationMessage === "Both Empty" &&
    colorValidationMessage === "Both Empty" &&
    shadowValidationMessage === "Both Empty"
  )
    return "Please Choose at least 1 metric"

  return false
}

const validationFunctions = (formFields) => ({
  name: () => checkName(formFields["name"]),
  metrics: () =>
    checkMetrics({
      number: {
        field: formFields["numberField"],
        calc: formFields["numberCalc"],
      },
      size: {
        field: formFields["sizeField"],
        calc: formFields["sizeCalc"],
      },
      color: {
        field: formFields["colorField"],
        calc: formFields["colorCalc"],
      },
      shadow: {
        field: formFields["shadowField"],
        calc: formFields["shadowCalc"],
      },
    }),
})

export const getFormValidationMessage = (formFields) => {
  const mandatoryFields = ["name", "metrics"]
  const validationFuncs = validationFunctions(formFields)

  for (const field of mandatoryFields) {
    const func = validationFuncs[field]
    const validationMessage = (func && func()) || undefined

    if (validationMessage) return validationMessage
  }

  return false
}

export const getRequestData = (formFields) => ({
  name: formFields["name"],
  description: formFields["description"] || null,
  group_ids: [],
  metrics: ["number", "size", "color", "shadow"]
    .map((item) => {
      return (
        formFields[`${item}Field`] && {
          field_id: formFields[`${item}Field`] || null,
          label: formFields[`${item}FieldLabel`] || "",
          ref: item,
          calc: formFields[`${item}Calc`] || null,
          ranges: formFields[`${item}Slider`] || [],
        }
      )
    })
    .filter((item) => !!item),
})