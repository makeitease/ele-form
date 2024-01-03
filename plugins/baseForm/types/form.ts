import { ButtonProps, RowProps } from "element-plus";
import { ColEx } from "./index";
import { CSSProperties } from "vue";
export interface FormSchema {
  //布局相关的字段
  colProps?: Partial<ColEx>;
  //赋值相关的字段
  field: string; //标签的key(单个)
  fields?: string[]; //标签的key( 数组形式
  //  以下是 FormItem 相关的参数
  label: string; //标签文本
  labelWidth: string; //表单域标签的的宽度
  required: boolean; //是否必填，如不设置，则会根据校验规则自动生成
  rules: object; //表单验证规则
  error: string; //表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息
  showMessage: boolean; //是否显示校验错误信息
  inlineMessage: boolean; //	以行内形式展示校验信息
  size: boolean; //用于控制该表单域下组件的尺寸
  //   下面是FormItem中输入组件的配置项
  componentProps: any; //输入组件相关的组件
  component: string; //组件名
}
export interface FormProps {
  name?: string;
  layout?: "vertical" | "inline" | "horizontal";
  // 表单绑定的值
  model?: Recordable;
  // The width of all items in the entire form
  labelWidth?: number | string;
  // alignment
  labelAlign?: "left" | "right";
  // Row configuration for the entire form
  rowProps?: RowProps;
  // Submit form on reset
  submitOnReset?: boolean;
  // Submit form on form changing
  submitOnChange?: boolean;
  // Col configuration for the entire form
  labelCol?: Partial<ColEx>;
  // Col configuration for the entire form
  wrapperCol?: Partial<ColEx>;

  // General row style
  baseRowStyle?: CSSProperties;

  // General col configuration
  baseColProps?: Partial<ColEx>;

  // Form configuration rules
  schemas?: FormSchema[];
  // Function values used to merge into dynamic control form items
  mergeDynamicData?: Recordable;
  // Compact mode for search forms
  compact?: boolean;
  // Blank line span
  emptySpan?: number | Partial<ColEx>;
  // Internal component size of the form
  size?: "default" | "small" | "large";
  // Whether to disable
  disabled?: boolean;
  // Whether to readonly
  readonly?: boolean;
  // Time interval fields are mapped into multiple
  fieldMapToTime?: FieldMapToTime;
  // Placeholder is set automatically
  autoSetPlaceHolder?: boolean;
  // Auto submit on press enter on input
  autoSubmitOnEnter?: boolean;
  // Check whether the information is added to the label
  rulesMessageJoinLabel?: boolean;
  // Whether to show collapse and expand buttons
  showAdvancedButton?: boolean;
  // Whether to focus on the first input box, only works when the first form item is input
  autoFocusFirstItem?: boolean;
  // Automatically collapse over the specified number of rows
  autoAdvancedLine?: number;
  // Always show lines
  alwaysShowLines?: number;
  // Whether to show the operation button
  showActionButtonGroup?: boolean;

  // Reset button configuration
  resetButtonOptions?: Partial<ButtonProps>;

  // Confirm button configuration
  submitButtonOptions?: Partial<ButtonProps>;

  // Operation column configuration
  actionColOptions?: Partial<ColEx>;

  // Show reset button
  showResetButton?: boolean;
  // Show confirmation button
  showSubmitButton?: boolean;

  resetFunc?: () => Promise<void>;
  submitFunc?: () => Promise<void>;
  transformDateFunc?: (date: any) => string;
  colon?: boolean;
}
