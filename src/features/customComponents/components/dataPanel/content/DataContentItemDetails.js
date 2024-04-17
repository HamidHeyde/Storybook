import "./dataContentItemDetails.css"
import { MapLabel } from "../../MapLabel"
import { WSpacer } from "../../WSpacer"
import { MapAutoComplete } from "../../AutoComplete"
import { MapBubbleSlider } from "../../MapBubbleSlider"
import { MapColorSlider } from "../../MapColorSlider"
import { MapShadowSlider } from "../../MapShadowSlider"
import {
  dynamicFieldsOptions,
  operationsOptions,
  getMetric,
  getOptions,
} from "../../utils/utils"

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
        <div className={"panelRow"}>
          <MapLabel type={"normal"} width={"20%"} text="" />
          <MapBubbleSlider
            width={"80%"}
            disabled={true}
            // onChange={(newValue)=> console.log(newValue)}
            defaultValues={getMetric(mapMetrics, "size", "ranges")}
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
        <div className={"panelRow"}>
          <MapLabel type={"normal"} width={"20%"} text="" />
          <MapColorSlider
            width={"80%"}
            disabled={true}
            // onChange={(newValue)=> console.log(newValue)}
            defaultValues={getMetric(mapMetrics, "color", "ranges")}
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
        <div className={"panelRow"}>
          <MapLabel type={"normal"} width={"20%"} text="" />
          <MapShadowSlider
            width={"80%"}
            disabled={true}
            // onChange={(newValue)=> console.log(newValue)}
            defaultValues={getMetric(mapMetrics, "shadow", "ranges")}
          />
        </div>
      </div>
    </div>
  )
}
