import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, a as space, l as claim_element, m as children, h as detach, c as claim_space, n as attr, b as insert_hydration, H as append_hydration, R as listen, C as noop, o as onMount, v as binding_callbacks } from "../../../chunks/index-acfec45a.js";
function isElement(node) {
  return node != null && node.nodeType === Node.ELEMENT_NODE;
}
function isTextNode(node) {
  return node != null && node.nodeType === Node.TEXT_NODE;
}
function htmlToElement(html) {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = trimWhitespace(html);
  if (wrapper.childNodes.length > 1) {
    return wrapper;
  }
  const element2 = wrapper.firstElementChild;
  if (!isElement(element2)) {
    return wrapper;
  }
  return element2;
}
const MULTIPLE_SPACES_REGEXP = / {2,}/g;
const MULTIPLE_NEWLINES_REGEXP = /\n+/g;
const LEADING_WHITESPACE_REGEXP = /\n {1,}/g;
const TRAILING_WHITESPACE_REGEXP = / {1,}\n/g;
const NEWLINE_REGEXP = /\n/g;
function trimWhitespace(text) {
  return text.replace(MULTIPLE_SPACES_REGEXP, " ").replace(MULTIPLE_NEWLINES_REGEXP, "\n").replace(LEADING_WHITESPACE_REGEXP, "\n").replace(TRAILING_WHITESPACE_REGEXP, "\n").replace(NEWLINE_REGEXP, "").trim();
}
function update(current, nextNodeOrHtml) {
  var _a;
  const isString = typeof nextNodeOrHtml === "string";
  if (nextNodeOrHtml == null || isString && nextNodeOrHtml.length === 0) {
    (_a = current.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(current);
    return;
  }
  const nextNode = isString ? htmlToElement(nextNodeOrHtml) : nextNodeOrHtml;
  return updateNode(current, nextNode);
}
function updateNode(current, next) {
  if (shouldUpdateWholeNode(current, next)) {
    return updateWholeNode(current, next);
  }
  const childrenToAdd = Array.from(next.childNodes).slice(current.childNodes.length);
  const childrenToRemove = [];
  current.childNodes.forEach((currentChild, index) => {
    const nextChild = next.childNodes[index];
    if (!nextChild) {
      return childrenToRemove.push(currentChild);
    }
    if (currentChild.hasChildNodes() || nextChild.hasChildNodes()) {
      updateNode(currentChild, nextChild);
    }
    if (isTextNode(currentChild) && isTextNode(nextChild)) {
      if (currentChild.textContent !== nextChild.textContent) {
        currentChild.textContent = nextChild.textContent;
      }
    }
  });
  childrenToRemove.forEach(current.removeChild.bind(current));
  childrenToAdd.forEach(current.appendChild.bind(current));
  if (isElement(current)) {
    const currentAttributes = getAttributes(current);
    const nextAttributes = getAttributes(next);
    const nextIsElement = isElement(next);
    for (const { key, value } of nextAttributes) {
      if (current.getAttribute(key) !== value) {
        current.setAttribute(key, value);
      }
    }
    for (const { key } of currentAttributes) {
      if (nextIsElement) {
        if (!next.hasAttribute(key)) {
          current.removeAttribute(key);
        }
      }
    }
  }
}
function getAttributes(node) {
  if (!isElement(node))
    return [];
  return node.getAttributeNames().reduce((all, key) => [
    ...all,
    { key, value: node.getAttribute(key) || "" }
  ], []);
}
function shouldUpdateWholeNode(current, next) {
  if (current.nodeType !== next.nodeType) {
    return true;
  }
  if (isElement(current) && isElement(next)) {
    return current.tagName !== next.tagName;
  }
  return current.textContent !== next.textContent;
}
function updateWholeNode(current, next) {
  if (isElement(current)) {
    current.replaceWith(next);
  } else if (isTextNode(current) && isTextNode(next)) {
    current.textContent = next.textContent;
  } else if (isTextNode(current) && isElement(next)) {
    if (current.parentElement) {
      current.parentElement.replaceChild(next, current);
    } else {
      console.warn(`Unexpected case, missing parentElement: ${current}`);
    }
  } else {
    console.warn([
      "Unexpected case:",
      `isElement(current): ${isElement(current)}`,
      `isTextNode(current): ${isTextNode(current)}`,
      `isElement(next): ${isElement(next)}`,
      `isTextNode(next): ${isTextNode(next)}`
    ].join(" "));
  }
}
const _page_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let div1;
  let style;
  let t;
  let div0;
  let mounted;
  let dispose;
  return {
    c() {
      div1 = element("div");
      style = element("style");
      t = space();
      div0 = element("div");
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", {
        id: true,
        "data-state": true,
        class: true
      });
      var div1_nodes = children(div1);
      style = claim_element(div1_nodes, "STYLE", {});
      var style_nodes = children(style);
      style_nodes.forEach(detach);
      t = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {});
      children(div0).forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div1, "id", "sandbox-wrapper");
      attr(
        div1,
        "data-state",
        /*state*/
        ctx[0]
      );
      attr(div1, "class", "svelte-13fpvwq");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, style);
      ctx[3](style);
      append_hydration(div1, t);
      append_hydration(div1, div0);
      ctx[4](div0);
      if (!mounted) {
        dispose = listen(
          window,
          "message",
          /*onMessage*/
          ctx[2]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*state*/
      1) {
        attr(
          div1,
          "data-state",
          /*state*/
          ctx2[0]
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div1);
      ctx[3](null);
      ctx[4](null);
      mounted = false;
      dispose();
    }
  };
}
function debugChanges(expected, actual) {
  const expectedOuterHTML = expected.outerHTML.replace(/\n/g, "");
  const actualOuterHTML = actual.outerHTML.replace(/\n/g, "");
  if (expectedOuterHTML !== actualOuterHTML) {
    console.warn("DOM changes do not match", { actualOuterHTML, expectedOuterHTML });
  }
}
function instance($$self, $$props, $$invalidate) {
  let state = "";
  onMount(() => {
    $$invalidate(0, state = "sandbox-ready");
  });
  const refs = {};
  function onMessage(message) {
    const { type, value } = message.data;
    switch (type) {
      case "CONTENT_CHANGE":
        if (refs == null ? void 0 : refs.root) {
          const wrapper = document.createElement("div");
          wrapper.innerHTML = value;
          try {
            update(refs.root, wrapper);
          } catch (_) {
          }
          debugChanges(wrapper, refs.root);
        }
        break;
      case "STYLE_CHANGE":
        if (refs == null ? void 0 : refs.styles) {
          const withoutTags = value.replace("<style>", "").replace("</style>", "");
          $$invalidate(1, refs.styles.innerHTML = withoutTags, refs);
        }
        break;
      default:
        console.error("Unknown event caught", { type, value });
    }
  }
  function style_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      refs.styles = $$value;
      $$invalidate(1, refs);
    });
  }
  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      refs.root = $$value;
      $$invalidate(1, refs);
    });
  }
  return [state, refs, onMessage, style_binding, div0_binding];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
