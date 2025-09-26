/*
 * @author wuchuheng<root@wuchuheng.com>
 * @date   2021/4/13
 * @listen MIT
 */

// Import utility functions from their new locations
export { fileToBase64 } from "./utils/file";
export { obj2Query, query2Obj } from "./utils/url";
export { copyStringToClipboard } from "./utils/clipboard";
export { getHash } from "./utils/crypto";
export { debounce, throttling } from "./utils/function";
export { sleep } from "./utils/async";

export {
  ResizableWrapper,
  type ResizableWrapperProps,
} from "./react/ResizeWrapper/ResizeWrapper";

export {
  VisibleAreaReporter,
  type VisibleAreaInput,
} from "./react/VisibleAreaReporter/VisibleAreaReporter";

export {
  ContextMenu,
  type ContextMenuAction,
} from "./react/ContextMenu/ContextMenu";

export { waitElementPromise, waitAllElementPromise } from "./utils/dom.helper";

export { colorText } from "./utils/colorText";
