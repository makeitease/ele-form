import type { Component } from "vue";
import type { ComponentType } from "./types";

import { ElInput,ElRadio,ElCheckbox } from "element-plus";


const componentMap = new Map<ComponentType | string, Component>();

componentMap.set("Input", ElInput);
componentMap.set("radio", ElRadio);
componentMap.set("radioGroup", ElRadio.RadioGroup);
componentMap.set("chekbox", ElCheckbox);
componentMap.set("chekboxGroup", ElCheckbox.CheckboxGroup);

export function add<T extends string, R extends Component>(
  compName: ComponentType | T,
  component: R
) {
  componentMap.set(compName, component);
}

export function del<T extends string>(compName: ComponentType | T) {
  componentMap.delete(compName);
}

export { componentMap };
