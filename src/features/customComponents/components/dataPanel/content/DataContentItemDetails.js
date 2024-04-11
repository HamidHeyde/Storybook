import "./dataContentItemDetails.css"
import { MapLabel } from "../../MapLabel"
import { WSpacer } from "../../WSpacer"
import { MapAutoComplete } from "../../AutoComplete"

const dynamicFieldsOptions = [
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

const operationsOptions = [
  { value: "count", text: "Count", index: 0 },
  { value: "avg", text: "Average", index: 1 },
  { value: "min", text: "Minimum", index: 2 },
  { value: "max", text: "Maximum", index: 3 },
]

const getMetric = (metrics, ref, key) => {
  const theMetric = metrics.filter((metric) => metric["ref"] === ref)

  return !!theMetric?.length ? theMetric[0][key] : undefined
}

const getOptions = (optionsList, metrics, ref, key) => {
  const metricValue = getMetric(metrics, ref, key)
  const optionItem = optionsList.filter(
    (option) =>
      option?.text?.toLowerCase() === metricValue?.toLowerCase() ||
      option?.value?.toLowerCase() === metricValue?.toLowerCase()
  )

  return !!optionItem?.length ? optionItem[0] : undefined
}

export const DataContentItemDetails = ({ map }) => {
  const mapMetrics = map.metrics

  return (
    <div className="dataContentItemWrapper">
      <div className={["panelRow", "borderBottom"].join(" ")}>
        <MapLabel type={"title"} width={"20%"} text="Pin Style" />
        <MapLabel type={"title"} width={"50%"} text="1.Select Pin Data" />
        <MapLabel type={"title"} width={"30%"} text="2.Pin Value" />
      </div>
      {/* Number */}
      <div className={["panelMultiRow", "borderBottom"].join(" ")}>
        <div className={"panelRow"}>
          <MapLabel type={"title"} width={"20%"} text="Number" />
          <MapAutoComplete
            width={"45%"}
            selectedOption={getOptions(
              dynamicFieldsOptions,
              mapMetrics,
              "number",
              "label"
            )}
            // setSelectedOption={setFieldValue}
            name={"numberField"}
            options={dynamicFieldsOptions}
            readonly={true}
          />
          <WSpacer width={"5%"} />
          <MapAutoComplete
            width={"30%"}
            selectedOption={getOptions(
              operationsOptions,
              mapMetrics,
              "number",
              "calc"
            )}
            // setSelectedOption={setFieldValue}
            name={"numberCalc"}
            options={operationsOptions}
            readonly={true}
          />
        </div>
      </div>
      {/* Size */}
      <div className={["panelMultiRow", "borderBottom"].join(" ")}>
        <div className={"panelRow"}>
          <MapLabel type={"title"} width={"20%"} text="Size" />
          <MapAutoComplete
            width={"45%"}
            selectedOption={getOptions(
              dynamicFieldsOptions,
              mapMetrics,
              "size",
              "label"
            )}
            // setSelectedOption={setFieldValue}
            name={"sizeField"}
            options={dynamicFieldsOptions}
            readonly={true}
          />
          <WSpacer width={"5%"} />
          <MapAutoComplete
            width={"30%"}
            selectedOption={getOptions(
              operationsOptions,
              mapMetrics,
              "size",
              "calc"
            )}
            // setSelectedOption={setFieldValue}
            name={"sizeCalc"}
            options={operationsOptions}
            readonly={true}
          />
        </div>
      </div>
      {/* Color */}
      <div className={["panelMultiRow", "borderBottom"].join(" ")}>
        <div className={"panelRow"}>
          <MapLabel type={"title"} width={"20%"} text="Color" />
          <MapAutoComplete
            width={"45%"}
            selectedOption={getOptions(
              dynamicFieldsOptions,
              mapMetrics,
              "color",
              "label"
            )}
            // setSelectedOption={setFieldValue}
            name={"colorField"}
            options={dynamicFieldsOptions}
            readonly={true}
          />
          <WSpacer width={"5%"} />
          <MapAutoComplete
            width={"30%"}
            selectedOption={getOptions(
              operationsOptions,
              mapMetrics,
              "color",
              "calc"
            )}
            // setSelectedOption={setFieldValue}
            name={"colorCalc"}
            options={operationsOptions}
            readonly={true}
          />
        </div>
      </div>
      {/* Shadow */}
      <div className={["panelMultiRow", "borderBottom"].join(" ")}>
        <div className={"panelRow"}>
          <MapLabel type={"title"} width={"20%"} text="Shadow" />
          <MapAutoComplete
            width={"45%"}
            selectedOption={getOptions(
              dynamicFieldsOptions,
              mapMetrics,
              "shadow",
              "label"
            )}
            // setSelectedOption={setFieldValue}
            name={"shadowField"}
            options={dynamicFieldsOptions}
            readonly={true}
          />
          <WSpacer width={"5%"} />
          <MapAutoComplete
            width={"30%"}
            selectedOption={getOptions(
              operationsOptions,
              mapMetrics,
              "shadow",
              "calc"
            )}
            // setSelectedOption={setFieldValue}
            name={"shadowCalc"}
            options={operationsOptions}
            readonly={true}
          />
        </div>
      </div>
    </div>
  )
}
