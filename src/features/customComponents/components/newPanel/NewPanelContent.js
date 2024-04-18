import "./newPanelContent.css"
import { WSpacer } from "../WSpacer"
import { MapLabel } from "../MapLabel"
import { MapTextField } from "../MapTextField"
import { MapTextArea } from "../MapTextArea"
import { MapAutoComplete } from "../AutoComplete"
import { MapBubbleSlider } from "../MapBubbleSlider"
import { MapColorSlider } from "../MapColorSlider"
import { MapShadowSlider } from "../MapShadowSlider"
import { dynamicFieldsOptions, operationsOptions } from "../utils/utils"

export const NewPanelContent = ({ onChange }) => {
  return (
    <div className="newPanelContentWrapper">
      <div className={["panelRow", "borderBottom"].join(" ")}>
        <MapLabel type={"normal"} width={"35%"} text="Map Name" />
        <MapTextField
          width={"65%"}
          type="text"
          name="name"
          placeholder=""
          onChange={onChange}
          value={undefined}
        />
      </div>
      <div className={["panelRow", "borderBottom"].join(" ")}>
        <MapLabel type={"normal"} width={"35%"} text="Map Description" />
        <MapTextArea
          width={"65%"}
          type="text"
          name="description"
          placeholder=""
          onChange={onChange}
          value={undefined}
        />
      </div>
      {/* Number */}
      <div className={["panelRow", "borderBottom"].join(" ")}>
        <div className="panelRow">
          <MapLabel type={"normal"} width={"20%"} text="Number" />
          <MapAutoComplete
            width={"45%"}
            // selectedOption={fields.numberField}
            // setSelectedOption={setFieldValue}
            name={"numberField"}
            options={dynamicFieldsOptions}
            onChange={onChange}
          />
          <WSpacer width={"5%"} />
          <MapAutoComplete
            width={"30%"}
            // selectedOption={fields.numberClac}
            // setSelectedOption={setFieldValue}
            name={"numberCalc"}
            options={operationsOptions}
            onChange={onChange}
          />
        </div>
      </div>
      {/* Size */}
      <div className={["panelMultiRow", "borderBottom"].join(" ")}>
        <div className="panelRow">
          <MapLabel type={"normal"} width={"20%"} text="Size" />
          <MapAutoComplete
            width={"45%"}
            // selectedOption={fields.sizeField}
            // setSelectedOption={setFieldValue}
            name={"sizeField"}
            options={dynamicFieldsOptions}
            onChange={onChange}
          />
          <WSpacer width={"5%"} />
          <MapAutoComplete
            width={"30%"}
            // selectedOption={fields.sizeClac}
            // setSelectedOption={setFieldValue}
            name={"sizeCalc"}
            options={operationsOptions}
            onChange={onChange}
          />
        </div>
        <div className="panelRow">
          <MapLabel type={"normal"} width={"20%"} text="" />
          <MapBubbleSlider
            width={"80%"}
            name={"sizeSlider"}
            onChange={onChange}
          />
        </div>
      </div>
      {/* Color */}
      <div className={["panelMultiRow", "borderBottom"].join(" ")}>
        <div className="panelRow">
          <MapLabel type={"normal"} width={"20%"} text="Color" />
          <MapAutoComplete
            width={"45%"}
            // selectedOption={fields.colorField}
            // setSelectedOption={setFieldValue}
            name={"colorField"}
            options={dynamicFieldsOptions}
            onChange={onChange}
          />
          <WSpacer width={"5%"} />
          <MapAutoComplete
            width={"30%"}
            // selectedOption={fields.colorClac}
            // setSelectedOption={setFieldValue}
            name={"colorCalc"}
            options={operationsOptions}
            onChange={onChange}
          />
        </div>
        <div className="panelRow">
          <MapLabel type={"normal"} width={"20%"} text="" />
          <MapColorSlider
            width={"80%"}
            name={"colorSlider"}
            onChange={onChange}
          />
        </div>
      </div>
      {/* Shadow */}
      <div className={["panelMultiRow", "borderBottom"].join(" ")}>
        <div className="panelRow">
          <MapLabel type={"normal"} width={"20%"} text="Shadow" />
          <MapAutoComplete
            width={"45%"}
            // selectedOption={fields.shadowField}
            // setSelectedOption={setFieldValue}
            name={"shadowField"}
            options={dynamicFieldsOptions}
            onChange={onChange}
          />
          <WSpacer width={"5%"} />
          <MapAutoComplete
            width={"30%"}
            // selectedOption={fields.shadowClac}
            // setSelectedOption={setFieldValue}
            name={"shadowCalc"}
            options={operationsOptions}
            onChange={onChange}
          />
        </div>
        <div className="panelRow">
          <MapLabel type={"normal"} width={"20%"} text="" />
          <MapShadowSlider
            width={"80%"}
            name={"shadowSlider"}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  )
}
