import { S as SvelteComponent, i as init, s as safe_not_equal, D as create_slot, J as assign, k as element, l as claim_element, m as children, h as detach, n as attr, K as set_attributes, L as toggle_class, b as insert_hydration, H as append_hydration, M as listen, E as update_slot_base, F as get_all_dirty_from_scope, G as get_slot_changes, N as get_spread_update, f as transition_in, t as transition_out, O as exclude_internal_props, P as bubble, Q as svg_element, R as claim_svg_element, T as set_svg_attributes, C as noop, a as space, c as claim_space, g as group_outros, d as check_outros, o as onMount, U as createEventDispatcher, x as create_component, y as claim_component, z as mount_component, A as destroy_component, v as binding_callbacks, e as empty, V as update_keyed_each, W as bind, X as add_flush_callback, Y as outro_and_destroy_block, q as text, r as claim_text, Z as src_url_equal } from "../../chunks/index-ce1bfe31.js";
import { b as base } from "../../chunks/paths-275c07e6.js";
import { _ as __vitePreload } from "../../chunks/preload-helper-f8376bb0.js";
const IconButton_svelte_svelte_type_style_lang = "";
function create_fragment$a(ctx) {
  let button;
  let div;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[2].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[1],
    null
  );
  let button_levels = [
    /*$$props*/
    ctx[0]
  ];
  let button_data = {};
  for (let i = 0; i < button_levels.length; i += 1) {
    button_data = assign(button_data, button_levels[i]);
  }
  return {
    c() {
      button = element("button");
      div = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", {});
      var button_nodes = children(button);
      div = claim_element(button_nodes, "DIV", { "aria-hidden": true, class: true });
      var div_nodes = children(div);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "aria-hidden", "true");
      attr(div, "class", "icon-wrapper svelte-q07j84");
      set_attributes(button, button_data);
      toggle_class(button, "svelte-q07j84", true);
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, div);
      if (default_slot) {
        default_slot.m(div, null);
      }
      if (button.autofocus)
        button.focus();
      current = true;
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler*/
          ctx[3]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        2)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[1],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[1]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[1],
              dirty,
              null
            ),
            null
          );
        }
      }
      set_attributes(button, button_data = get_spread_update(button_levels, [dirty & /*$$props*/
      1 && /*$$props*/
      ctx2[0]]));
      toggle_class(button, "svelte-q07j84", true);
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(button);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function instance$a($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("$$scope" in $$new_props)
      $$invalidate(1, $$scope = $$new_props.$$scope);
  };
  $$props = exclude_internal_props($$props);
  return [$$props, $$scope, slots, click_handler];
}
class IconButton extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$a, create_fragment$a, safe_not_equal, {});
  }
}
function create_fragment$9(ctx) {
  let svg;
  let g;
  let path;
  let svg_levels = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 24 24" },
    /*$$props*/
    ctx[0]
  ];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign(svg_data, svg_levels[i]);
  }
  return {
    c() {
      svg = svg_element("svg");
      g = svg_element("g");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", { xmlns: true, viewBox: true });
      var svg_nodes = children(svg);
      g = claim_svg_element(svg_nodes, "g", { "data-name": true });
      var g_nodes = children(g);
      path = claim_svg_element(g_nodes, "path", { d: true, "data-name": true });
      children(path).forEach(detach);
      g_nodes.forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "d", "m13.41 12 4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z");
      attr(path, "data-name", "close");
      attr(g, "data-name", "Layer 2");
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, g);
      append_hydration(g, path);
    },
    p(ctx2, [dirty]) {
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { viewBox: "0 0 24 24" },
        dirty & /*$$props*/
        1 && /*$$props*/
        ctx2[0]
      ]));
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function instance$9($$self, $$props, $$invalidate) {
  $$self.$$set = ($$new_props) => {
    $$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
  };
  $$props = exclude_internal_props($$props);
  return [$$props];
}
class Close extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$9, create_fragment$9, safe_not_equal, {});
  }
}
const CodeMirror_svelte_svelte_type_style_lang = "";
function create_if_block$1(ctx) {
  let iconbutton;
  let current;
  iconbutton = new IconButton({
    props: {
      "aria-label": "Remove editor",
      title: "Remove editor",
      class: "remove",
      $$slots: { default: [create_default_slot$2] },
      $$scope: { ctx }
    }
  });
  iconbutton.$on(
    "click",
    /*onRemove*/
    ctx[4]
  );
  return {
    c() {
      create_component(iconbutton.$$.fragment);
    },
    l(nodes) {
      claim_component(iconbutton.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(iconbutton, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const iconbutton_changes = {};
      if (dirty & /*$$scope*/
      256) {
        iconbutton_changes.$$scope = { dirty, ctx: ctx2 };
      }
      iconbutton.$set(iconbutton_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(iconbutton.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(iconbutton.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(iconbutton, detaching);
    }
  };
}
function create_default_slot$2(ctx) {
  let close;
  let current;
  close = new Close({});
  return {
    c() {
      create_component(close.$$.fragment);
    },
    l(nodes) {
      claim_component(close.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(close, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(close.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(close.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(close, detaching);
    }
  };
}
function create_fragment$8(ctx) {
  let div;
  let textarea;
  let t;
  let current;
  let if_block = (
    /*canBeRemoved*/
    ctx[2] && create_if_block$1(ctx)
  );
  return {
    c() {
      div = element("div");
      textarea = element("textarea");
      t = space();
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      textarea = claim_element(div_nodes, "TEXTAREA", { class: true });
      children(textarea).forEach(detach);
      t = claim_space(div_nodes);
      if (if_block)
        if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      textarea.value = /*code*/
      ctx[0];
      attr(textarea, "class", "svelte-1bj68yz");
      attr(div, "class", "codemirror-container svelte-1bj68yz");
      toggle_class(
        div,
        "active",
        /*active*/
        ctx[1]
      );
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, textarea);
      ctx[6](textarea);
      append_hydration(div, t);
      if (if_block)
        if_block.m(div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & /*code*/
      1) {
        textarea.value = /*code*/
        ctx2[0];
      }
      if (
        /*canBeRemoved*/
        ctx2[2]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*canBeRemoved*/
          4) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$1(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (!current || dirty & /*active*/
      2) {
        toggle_class(
          div,
          "active",
          /*active*/
          ctx2[1]
        );
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      ctx[6](null);
      if (if_block)
        if_block.d();
    }
  };
}
function instance$8($$self, $$props, $$invalidate) {
  let { code = "" } = $$props;
  let { editorId } = $$props;
  let { active = false } = $$props;
  let { canBeRemoved = true } = $$props;
  let ref;
  onMount(async () => {
    if (!ref) {
      throw new Error("Missing ref to textarea");
    }
    const { default: CodeMirror2 } = await __vitePreload(() => import("../../chunks/codemirror-49fd538a.js"), true ? ["../../chunks/codemirror-49fd538a.js","../../assets/codemirror-eb494ea9.css"] : void 0, import.meta.url);
    const editor = CodeMirror2.fromTextArea(ref, {
      lineNumbers: true,
      lineWrapping: true,
      mode: "htmlmixed",
      autoCloseBrackets: true,
      autoCloseTags: true,
      value: code,
      theme: "cobalt"
    });
    editor.on("change", (instance2) => {
      $$invalidate(0, code = instance2.getValue());
      dispatch("change", { value: code, editorId });
    });
  });
  const dispatch = createEventDispatcher();
  function onRemove() {
    dispatch("remove", { editorId });
  }
  function textarea_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      ref = $$value;
      $$invalidate(3, ref);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("code" in $$props2)
      $$invalidate(0, code = $$props2.code);
    if ("editorId" in $$props2)
      $$invalidate(5, editorId = $$props2.editorId);
    if ("active" in $$props2)
      $$invalidate(1, active = $$props2.active);
    if ("canBeRemoved" in $$props2)
      $$invalidate(2, canBeRemoved = $$props2.canBeRemoved);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*active, code, editorId*/
    35) {
      if (active) {
        dispatch("change", { value: code, editorId });
      }
    }
  };
  return [code, active, canBeRemoved, ref, onRemove, editorId, textarea_binding];
}
class CodeMirror extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$8, create_fragment$8, safe_not_equal, {
      code: 0,
      editorId: 5,
      active: 1,
      canBeRemoved: 2
    });
  }
}
function create_fragment$7(ctx) {
  let svg;
  let g1;
  let g0;
  let path0;
  let path1;
  let svg_levels = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 24 24" },
    /*$$props*/
    ctx[0]
  ];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign(svg_data, svg_levels[i]);
  }
  return {
    c() {
      svg = svg_element("svg");
      g1 = svg_element("g");
      g0 = svg_element("g");
      path0 = svg_element("path");
      path1 = svg_element("path");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", { xmlns: true, viewBox: true });
      var svg_nodes = children(svg);
      g1 = claim_svg_element(svg_nodes, "g", { "data-name": true });
      var g1_nodes = children(g1);
      g0 = claim_svg_element(g1_nodes, "g", { "data-name": true });
      var g0_nodes = children(g0);
      path0 = claim_svg_element(g0_nodes, "path", { d: true });
      children(path0).forEach(detach);
      path1 = claim_svg_element(g0_nodes, "path", { d: true });
      children(path1).forEach(detach);
      g0_nodes.forEach(detach);
      g1_nodes.forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path0, "d", "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z");
      attr(path1, "d", "M12.34 7.45a1.7 1.7 0 0 0-1.85-.3 1.6 1.6 0 0 0-1 1.48v6.74a1.6 1.6 0 0 0 1 1.48 1.68 1.68 0 0 0 .69.15 1.74 1.74 0 0 0 1.16-.45L16 13.18a1.6 1.6 0 0 0 0-2.36zm-.84 7.15V9.4l2.81 2.6z");
      attr(g0, "data-name", "play-circle");
      attr(g1, "data-name", "Layer 2");
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, g1);
      append_hydration(g1, g0);
      append_hydration(g0, path0);
      append_hydration(g0, path1);
    },
    p(ctx2, [dirty]) {
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { viewBox: "0 0 24 24" },
        dirty & /*$$props*/
        1 && /*$$props*/
        ctx2[0]
      ]));
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function instance$7($$self, $$props, $$invalidate) {
  $$self.$$set = ($$new_props) => {
    $$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
  };
  $$props = exclude_internal_props($$props);
  return [$$props];
}
class Play extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$7, safe_not_equal, {});
  }
}
function create_fragment$6(ctx) {
  let svg;
  let g1;
  let g0;
  let path0;
  let path1;
  let svg_levels = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 24 24" },
    /*$$props*/
    ctx[0]
  ];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign(svg_data, svg_levels[i]);
  }
  return {
    c() {
      svg = svg_element("svg");
      g1 = svg_element("g");
      g0 = svg_element("g");
      path0 = svg_element("path");
      path1 = svg_element("path");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", { xmlns: true, viewBox: true });
      var svg_nodes = children(svg);
      g1 = claim_svg_element(svg_nodes, "g", { "data-name": true });
      var g1_nodes = children(g1);
      g0 = claim_svg_element(g1_nodes, "g", { "data-name": true });
      var g0_nodes = children(g0);
      path0 = claim_svg_element(g0_nodes, "path", { d: true });
      children(path0).forEach(detach);
      path1 = claim_svg_element(g0_nodes, "path", { d: true });
      children(path1).forEach(detach);
      g0_nodes.forEach(detach);
      g1_nodes.forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path0, "d", "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z");
      attr(path1, "d", "M15 8a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1zM9 8a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z");
      attr(g0, "data-name", "pause-circle");
      attr(g1, "data-name", "Layer 2");
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, g1);
      append_hydration(g1, g0);
      append_hydration(g0, path0);
      append_hydration(g0, path1);
    },
    p(ctx2, [dirty]) {
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { viewBox: "0 0 24 24" },
        dirty & /*$$props*/
        1 && /*$$props*/
        ctx2[0]
      ]));
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function instance$6($$self, $$props, $$invalidate) {
  $$self.$$set = ($$new_props) => {
    $$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
  };
  $$props = exclude_internal_props($$props);
  return [$$props];
}
class Pause extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$6, create_fragment$6, safe_not_equal, {});
  }
}
function create_fragment$5(ctx) {
  let svg;
  let g1;
  let g0;
  let path0;
  let path1;
  let svg_levels = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 24 24" },
    /*$$props*/
    ctx[0]
  ];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign(svg_data, svg_levels[i]);
  }
  return {
    c() {
      svg = svg_element("svg");
      g1 = svg_element("g");
      g0 = svg_element("g");
      path0 = svg_element("path");
      path1 = svg_element("path");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", { xmlns: true, viewBox: true });
      var svg_nodes = children(svg);
      g1 = claim_svg_element(svg_nodes, "g", { "data-name": true });
      var g1_nodes = children(g1);
      g0 = claim_svg_element(g1_nodes, "g", { "data-name": true });
      var g0_nodes = children(g0);
      path0 = claim_svg_element(g0_nodes, "path", { d: true });
      children(path0).forEach(detach);
      path1 = claim_svg_element(g0_nodes, "path", { d: true });
      children(path1).forEach(detach);
      g0_nodes.forEach(detach);
      g1_nodes.forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path0, "d", "M17 12v-.09a.88.88 0 0 0-.06-.28.72.72 0 0 0-.11-.19 1 1 0 0 0-.09-.13l-2.86-3a1 1 0 0 0-1.45 1.38L13.66 11H8a1 1 0 0 0 0 2h5.59l-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 .21-.32A1 1 0 0 0 17 12z");
      attr(path1, "d", "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z");
      attr(g0, "data-name", "arrow-circle-right");
      attr(g1, "data-name", "Layer 2");
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, g1);
      append_hydration(g1, g0);
      append_hydration(g0, path0);
      append_hydration(g0, path1);
    },
    p(ctx2, [dirty]) {
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { viewBox: "0 0 24 24" },
        dirty & /*$$props*/
        1 && /*$$props*/
        ctx2[0]
      ]));
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function instance$5($$self, $$props, $$invalidate) {
  $$self.$$set = ($$new_props) => {
    $$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
  };
  $$props = exclude_internal_props($$props);
  return [$$props];
}
class Next extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, safe_not_equal, {});
  }
}
function create_fragment$4(ctx) {
  let svg;
  let g1;
  let g0;
  let path0;
  let path1;
  let svg_levels = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 24 24" },
    /*$$props*/
    ctx[0]
  ];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign(svg_data, svg_levels[i]);
  }
  return {
    c() {
      svg = svg_element("svg");
      g1 = svg_element("g");
      g0 = svg_element("g");
      path0 = svg_element("path");
      path1 = svg_element("path");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", { xmlns: true, viewBox: true });
      var svg_nodes = children(svg);
      g1 = claim_svg_element(svg_nodes, "g", { "data-name": true });
      var g1_nodes = children(g1);
      g0 = claim_svg_element(g1_nodes, "g", { "data-name": true });
      var g0_nodes = children(g0);
      path0 = claim_svg_element(g0_nodes, "path", { d: true });
      children(path0).forEach(detach);
      path1 = claim_svg_element(g0_nodes, "path", { d: true });
      children(path1).forEach(detach);
      g0_nodes.forEach(detach);
      g1_nodes.forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path0, "d", "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z");
      attr(path1, "d", "M15 11h-2V9a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2z");
      attr(g0, "data-name", "plus-circle");
      attr(g1, "data-name", "Layer 2");
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, g1);
      append_hydration(g1, g0);
      append_hydration(g0, path0);
      append_hydration(g0, path1);
    },
    p(ctx2, [dirty]) {
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { viewBox: "0 0 24 24" },
        dirty & /*$$props*/
        1 && /*$$props*/
        ctx2[0]
      ]));
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  $$self.$$set = ($$new_props) => {
    $$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
  };
  $$props = exclude_internal_props($$props);
  return [$$props];
}
class Plus extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, {});
  }
}
const CodeEditors_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[14] = list[i];
  child_ctx[15] = list;
  child_ctx[16] = i;
  return child_ctx;
}
function create_default_slot_3(ctx) {
  let play_1;
  let current;
  play_1 = new Play({});
  return {
    c() {
      create_component(play_1.$$.fragment);
    },
    l(nodes) {
      claim_component(play_1.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(play_1, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(play_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(play_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(play_1, detaching);
    }
  };
}
function create_default_slot_2(ctx) {
  let pause_1;
  let current;
  pause_1 = new Pause({});
  return {
    c() {
      create_component(pause_1.$$.fragment);
    },
    l(nodes) {
      claim_component(pause_1.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(pause_1, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(pause_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(pause_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(pause_1, detaching);
    }
  };
}
function create_default_slot_1$1(ctx) {
  let next;
  let current;
  next = new Next({});
  return {
    c() {
      create_component(next.$$.fragment);
    },
    l(nodes) {
      claim_component(next.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(next, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(next.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(next.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(next, detaching);
    }
  };
}
function create_default_slot$1(ctx) {
  let plus;
  let current;
  plus = new Plus({});
  return {
    c() {
      create_component(plus.$$.fragment);
    },
    l(nodes) {
      claim_component(plus.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(plus, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(plus.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(plus.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(plus, detaching);
    }
  };
}
function create_each_block(key_1, ctx) {
  let first;
  let codemirror;
  let updating_code;
  let current;
  function codemirror_code_binding(value) {
    ctx[10](
      value,
      /*editor*/
      ctx[14]
    );
  }
  let codemirror_props = {
    canBeRemoved: (
      /*editor*/
      ctx[14].id !== DEFAULT_EDITOR_ID
    ),
    active: (
      /*editor*/
      ctx[14].id === /*activeEditorId*/
      ctx[1]
    ),
    editorId: (
      /*editor*/
      ctx[14].id
    )
  };
  if (
    /*editor*/
    ctx[14].code !== void 0
  ) {
    codemirror_props.code = /*editor*/
    ctx[14].code;
  }
  codemirror = new CodeMirror({ props: codemirror_props });
  binding_callbacks.push(() => bind(codemirror, "code", codemirror_code_binding));
  codemirror.$on(
    "change",
    /*changed*/
    ctx[8]
  );
  codemirror.$on(
    "remove",
    /*removeEditor*/
    ctx[4]
  );
  return {
    key: key_1,
    first: null,
    c() {
      first = empty();
      create_component(codemirror.$$.fragment);
      this.h();
    },
    l(nodes) {
      first = empty();
      claim_component(codemirror.$$.fragment, nodes);
      this.h();
    },
    h() {
      this.first = first;
    },
    m(target, anchor) {
      insert_hydration(target, first, anchor);
      mount_component(codemirror, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const codemirror_changes = {};
      if (dirty & /*editors*/
      1)
        codemirror_changes.canBeRemoved = /*editor*/
        ctx[14].id !== DEFAULT_EDITOR_ID;
      if (dirty & /*editors, activeEditorId*/
      3)
        codemirror_changes.active = /*editor*/
        ctx[14].id === /*activeEditorId*/
        ctx[1];
      if (dirty & /*editors*/
      1)
        codemirror_changes.editorId = /*editor*/
        ctx[14].id;
      if (!updating_code && dirty & /*editors*/
      1) {
        updating_code = true;
        codemirror_changes.code = /*editor*/
        ctx[14].code;
        add_flush_callback(() => updating_code = false);
      }
      codemirror.$set(codemirror_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(codemirror.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(codemirror.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(first);
      destroy_component(codemirror, detaching);
    }
  };
}
function create_fragment$3(ctx) {
  let div;
  let iconbutton0;
  let t0;
  let iconbutton1;
  let t1;
  let iconbutton2;
  let t2;
  let iconbutton3;
  let t3;
  let t4;
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let each_1_anchor;
  let current;
  iconbutton0 = new IconButton({
    props: {
      "aria-label": "Loop states",
      title: "Loop states",
      disabled: (
        /*cycleCleanup*/
        ctx[2] != null
      ),
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  iconbutton0.$on(
    "click",
    /*play*/
    ctx[6]
  );
  iconbutton1 = new IconButton({
    props: {
      "aria-label": "Pause state looping",
      title: "Pause state looping",
      disabled: (
        /*cycleCleanup*/
        ctx[2] == null
      ),
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  iconbutton1.$on(
    "click",
    /*pause*/
    ctx[7]
  );
  iconbutton2 = new IconButton({
    props: {
      "aria-label": "Next state",
      title: "Next state",
      $$slots: { default: [create_default_slot_1$1] },
      $$scope: { ctx }
    }
  });
  iconbutton2.$on(
    "click",
    /*toggleState*/
    ctx[5]
  );
  iconbutton3 = new IconButton({
    props: {
      "aria-label": "Add editor",
      title: "Add editor",
      $$slots: { default: [create_default_slot$1] },
      $$scope: { ctx }
    }
  });
  iconbutton3.$on(
    "click",
    /*addEditor*/
    ctx[3]
  );
  const default_slot_template = (
    /*#slots*/
    ctx[9].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[11],
    null
  );
  let each_value = (
    /*editors*/
    ctx[0]
  );
  const get_key = (ctx2) => (
    /*editor*/
    ctx2[14].id
  );
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }
  return {
    c() {
      div = element("div");
      create_component(iconbutton0.$$.fragment);
      t0 = space();
      create_component(iconbutton1.$$.fragment);
      t1 = space();
      create_component(iconbutton2.$$.fragment);
      t2 = space();
      create_component(iconbutton3.$$.fragment);
      t3 = space();
      if (default_slot)
        default_slot.c();
      t4 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(iconbutton0.$$.fragment, div_nodes);
      t0 = claim_space(div_nodes);
      claim_component(iconbutton1.$$.fragment, div_nodes);
      t1 = claim_space(div_nodes);
      claim_component(iconbutton2.$$.fragment, div_nodes);
      t2 = claim_space(div_nodes);
      claim_component(iconbutton3.$$.fragment, div_nodes);
      t3 = claim_space(div_nodes);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      t4 = claim_space(nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
      this.h();
    },
    h() {
      attr(div, "class", "controls svelte-12kzv88");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(iconbutton0, div, null);
      append_hydration(div, t0);
      mount_component(iconbutton1, div, null);
      append_hydration(div, t1);
      mount_component(iconbutton2, div, null);
      append_hydration(div, t2);
      mount_component(iconbutton3, div, null);
      append_hydration(div, t3);
      if (default_slot) {
        default_slot.m(div, null);
      }
      insert_hydration(target, t4, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const iconbutton0_changes = {};
      if (dirty & /*cycleCleanup*/
      4)
        iconbutton0_changes.disabled = /*cycleCleanup*/
        ctx2[2] != null;
      if (dirty & /*$$scope*/
      2048) {
        iconbutton0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      iconbutton0.$set(iconbutton0_changes);
      const iconbutton1_changes = {};
      if (dirty & /*cycleCleanup*/
      4)
        iconbutton1_changes.disabled = /*cycleCleanup*/
        ctx2[2] == null;
      if (dirty & /*$$scope*/
      2048) {
        iconbutton1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      iconbutton1.$set(iconbutton1_changes);
      const iconbutton2_changes = {};
      if (dirty & /*$$scope*/
      2048) {
        iconbutton2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      iconbutton2.$set(iconbutton2_changes);
      const iconbutton3_changes = {};
      if (dirty & /*$$scope*/
      2048) {
        iconbutton3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      iconbutton3.$set(iconbutton3_changes);
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        2048)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[11],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[11]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[11],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (dirty & /*editors, DEFAULT_EDITOR_ID, activeEditorId, changed, removeEditor*/
      275) {
        each_value = /*editors*/
        ctx2[0];
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block, each_1_anchor, get_each_context);
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(iconbutton0.$$.fragment, local);
      transition_in(iconbutton1.$$.fragment, local);
      transition_in(iconbutton2.$$.fragment, local);
      transition_in(iconbutton3.$$.fragment, local);
      transition_in(default_slot, local);
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      transition_out(iconbutton0.$$.fragment, local);
      transition_out(iconbutton1.$$.fragment, local);
      transition_out(iconbutton2.$$.fragment, local);
      transition_out(iconbutton3.$$.fragment, local);
      transition_out(default_slot, local);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(iconbutton0);
      destroy_component(iconbutton1);
      destroy_component(iconbutton2);
      destroy_component(iconbutton3);
      if (default_slot)
        default_slot.d(detaching);
      if (detaching)
        detach(t4);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d(detaching);
      }
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
const DEFAULT_EDITOR_ID = 1;
function instance$3($$self, $$props, $$invalidate) {
  var _a;
  let currentMaxId;
  let { $$slots: slots = {}, $$scope } = $$props;
  const dispatch = createEventDispatcher();
  let { editors = [{ id: DEFAULT_EDITOR_ID, code: "" }] } = $$props;
  let activeEditorId = ((_a = editors[0]) == null ? void 0 : _a.id) || DEFAULT_EDITOR_ID;
  let cycleCleanup;
  function addEditor() {
    var _a2;
    const code = ((_a2 = editors.find((e) => e.id === currentMaxId)) == null ? void 0 : _a2.code) || "\n\n";
    $$invalidate(0, editors = [...editors, { id: 1 + currentMaxId, code }]);
  }
  function removeEditor(event) {
    const { editorId } = event.detail;
    if (activeEditorId === editorId) {
      const index = editors.findIndex((e) => e.id === editorId);
      const nextEditor = editors[index - 1];
      $$invalidate(1, activeEditorId = (nextEditor == null ? void 0 : nextEditor.id) || DEFAULT_EDITOR_ID);
    }
    $$invalidate(0, editors = editors.filter((e) => e.id !== editorId));
  }
  function toggleState() {
    const editorIds = editors.map((e) => e.id);
    if (activeEditorId === currentMaxId) {
      $$invalidate(1, activeEditorId = Math.min(...editorIds));
      return;
    }
    const currentIndex = editorIds.indexOf(activeEditorId);
    $$invalidate(1, activeEditorId = editorIds[1 + currentIndex]);
  }
  function play() {
    if (!cycleCleanup) {
      const id = setInterval(toggleState, 2e3);
      $$invalidate(2, cycleCleanup = () => clearInterval(id));
    }
  }
  function pause() {
    if (cycleCleanup) {
      cycleCleanup();
      $$invalidate(2, cycleCleanup = null);
    }
  }
  function changed(event) {
    const { value, editorId } = event.detail;
    if (editorId === activeEditorId) {
      dispatch("change", { value });
    }
  }
  function codemirror_code_binding(value, editor) {
    if ($$self.$$.not_equal(editor.code, value)) {
      editor.code = value;
      $$invalidate(0, editors);
    }
  }
  $$self.$$set = ($$props2) => {
    if ("editors" in $$props2)
      $$invalidate(0, editors = $$props2.editors);
    if ("$$scope" in $$props2)
      $$invalidate(11, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*editors*/
    1) {
      currentMaxId = Math.max(...editors.map((e) => e.id));
    }
  };
  return [
    editors,
    activeEditorId,
    cycleCleanup,
    addEditor,
    removeEditor,
    toggleState,
    play,
    pause,
    changed,
    slots,
    codemirror_code_binding,
    $$scope
  ];
}
class CodeEditors extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { editors: 0 });
  }
}
function create_fragment$2(ctx) {
  let codemirror;
  let updating_code;
  let current;
  function codemirror_code_binding(value) {
    ctx[1](value);
  }
  let codemirror_props = { editorId: 0, canBeRemoved: false };
  if (
    /*code*/
    ctx[0] !== void 0
  ) {
    codemirror_props.code = /*code*/
    ctx[0];
  }
  codemirror = new CodeMirror({ props: codemirror_props });
  binding_callbacks.push(() => bind(codemirror, "code", codemirror_code_binding));
  codemirror.$on(
    "change",
    /*change_handler*/
    ctx[2]
  );
  return {
    c() {
      create_component(codemirror.$$.fragment);
    },
    l(nodes) {
      claim_component(codemirror.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(codemirror, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const codemirror_changes = {};
      if (!updating_code && dirty & /*code*/
      1) {
        updating_code = true;
        codemirror_changes.code = /*code*/
        ctx2[0];
        add_flush_callback(() => updating_code = false);
      }
      codemirror.$set(codemirror_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(codemirror.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(codemirror.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(codemirror, detaching);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let { code = "" } = $$props;
  function codemirror_code_binding(value) {
    code = value;
    $$invalidate(0, code);
  }
  function change_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$props2) => {
    if ("code" in $$props2)
      $$invalidate(0, code = $$props2.code);
  };
  return [code, codemirror_code_binding, change_handler];
}
class StyleEditor extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { code: 0 });
  }
}
var LZString = function() {
  function o(o2, r2) {
    if (!t[o2]) {
      t[o2] = {};
      for (var n = 0; n < o2.length; n++)
        t[o2][o2.charAt(n)] = n;
    }
    return t[o2][r2];
  }
  var r = String.fromCharCode, e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", t = {}, i = {
    compressToEncodedURIComponent: function(o2) {
      return null == o2 ? "" : i._compress(o2, 6, function(o3) {
        return e.charAt(o3);
      });
    },
    decompressFromEncodedURIComponent: function(r2) {
      return null == r2 ? "" : "" == r2 ? null : (r2 = r2.replace(/ /g, "+"), i._decompress(r2.length, 32, function(n) {
        return o(e, r2.charAt(n));
      }));
    },
    _compress: function(o2, r2, n) {
      if (null == o2)
        return "";
      var e2, t2, i2, s = {}, p = {}, u = "", c = "", a = "", l = 2, f = 3, h = 2, d = [], m = 0, v = 0;
      for (i2 = 0; i2 < o2.length; i2 += 1)
        if (u = o2.charAt(i2), Object.prototype.hasOwnProperty.call(s, u) || (s[u] = f++, p[u] = true), c = a + u, Object.prototype.hasOwnProperty.call(s, c))
          a = c;
        else {
          if (Object.prototype.hasOwnProperty.call(p, a)) {
            if (a.charCodeAt(0) < 256) {
              for (e2 = 0; h > e2; e2++)
                m <<= 1, v == r2 - 1 ? (v = 0, d.push(n(m)), m = 0) : v++;
              for (t2 = a.charCodeAt(0), e2 = 0; 8 > e2; e2++)
                m = m << 1 | 1 & t2, v == r2 - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t2 >>= 1;
            } else {
              for (t2 = 1, e2 = 0; h > e2; e2++)
                m = m << 1 | t2, v == r2 - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t2 = 0;
              for (t2 = a.charCodeAt(0), e2 = 0; 16 > e2; e2++)
                m = m << 1 | 1 & t2, v == r2 - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t2 >>= 1;
            }
            l--, 0 == l && (l = Math.pow(2, h), h++), delete p[a];
          } else
            for (t2 = s[a], e2 = 0; h > e2; e2++)
              m = m << 1 | 1 & t2, v == r2 - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t2 >>= 1;
          l--, 0 == l && (l = Math.pow(2, h), h++), s[c] = f++, a = String(u);
        }
      if ("" !== a) {
        if (Object.prototype.hasOwnProperty.call(p, a)) {
          if (a.charCodeAt(0) < 256) {
            for (e2 = 0; h > e2; e2++)
              m <<= 1, v == r2 - 1 ? (v = 0, d.push(n(m)), m = 0) : v++;
            for (t2 = a.charCodeAt(0), e2 = 0; 8 > e2; e2++)
              m = m << 1 | 1 & t2, v == r2 - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t2 >>= 1;
          } else {
            for (t2 = 1, e2 = 0; h > e2; e2++)
              m = m << 1 | t2, v == r2 - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t2 = 0;
            for (t2 = a.charCodeAt(0), e2 = 0; 16 > e2; e2++)
              m = m << 1 | 1 & t2, v == r2 - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t2 >>= 1;
          }
          l--, 0 == l && (l = Math.pow(2, h), h++), delete p[a];
        } else
          for (t2 = s[a], e2 = 0; h > e2; e2++)
            m = m << 1 | 1 & t2, v == r2 - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t2 >>= 1;
        l--, 0 == l && (l = Math.pow(2, h), h++);
      }
      for (t2 = 2, e2 = 0; h > e2; e2++)
        m = m << 1 | 1 & t2, v == r2 - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t2 >>= 1;
      for (; ; ) {
        if (m <<= 1, v == r2 - 1) {
          d.push(n(m));
          break;
        }
        v++;
      }
      return d.join("");
    },
    _decompress: function(o2, n, e2) {
      var i2, s, p, u, c, a, l, f = [], h = 4, d = 4, m = 3, v = "", w = [], A = { val: e2(0), position: n, index: 1 };
      for (i2 = 0; 3 > i2; i2 += 1)
        f[i2] = i2;
      for (p = 0, c = Math.pow(2, 2), a = 1; a != c; )
        u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e2(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1;
      switch (p) {
        case 0:
          for (p = 0, c = Math.pow(2, 8), a = 1; a != c; )
            u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e2(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1;
          l = r(p);
          break;
        case 1:
          for (p = 0, c = Math.pow(2, 16), a = 1; a != c; )
            u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e2(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1;
          l = r(p);
          break;
        case 2:
          return "";
      }
      for (f[3] = l, s = l, w.push(l); ; ) {
        if (A.index > o2)
          return "";
        for (p = 0, c = Math.pow(2, m), a = 1; a != c; )
          u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e2(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1;
        switch (l = p) {
          case 0:
            for (p = 0, c = Math.pow(2, 8), a = 1; a != c; )
              u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e2(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1;
            f[d++] = r(p), l = d - 1, h--;
            break;
          case 1:
            for (p = 0, c = Math.pow(2, 16), a = 1; a != c; )
              u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e2(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1;
            f[d++] = r(p), l = d - 1, h--;
            break;
          case 2:
            return w.join("");
        }
        if (0 == h && (h = Math.pow(2, m), m++), f[l])
          v = f[l];
        else {
          if (l !== d)
            return null;
          v = s + s.charAt(0);
        }
        w.push(v), f[d++] = s + v.charAt(0), h--, s = v, 0 == h && (h = Math.pow(2, m), m++);
      }
    }
  };
  return i;
}();
const decompressFromEncodedURIComponent = LZString.decompressFromEncodedURIComponent;
const compressToEncodedURIComponent = LZString.compressToEncodedURIComponent;
function initializeFromUrlSearchParams() {
  const defaultValues = {
    editors: [{ id: 1, code: "\n\n\n\n" }],
    // Svelte seems to break if style tag is written in string directly, sveltejs/svelte#6923
    style: `<style>
  
</style>`
  };
  const encoded = new URLSearchParams(document.location.search).get("code");
  let json;
  if (encoded) {
    try {
      const decoded = decompressFromEncodedURIComponent(encoded);
      json = JSON.parse(decoded);
    } catch (e) {
      console.error("Unable to parse url search parameters", e);
    }
  }
  if (hasProp(json, "style") && typeof json.style === "string") {
    if (hasProp(json, "editors") && Array.isArray(json.editors)) {
      if (json.editors.every(isEditor)) {
        return { style: json.style, editors: json.editors };
      }
    }
  }
  return defaultValues;
}
function buildStatefulUrl(state) {
  const encoded = compressToEncodedURIComponent(JSON.stringify(state));
  const url = new URL(base, window.location.origin);
  url.searchParams.set("code", encoded);
  return url;
}
function isEditor(editor) {
  return hasProp(editor, "id") && typeof editor.id === "number" && hasProp(editor, "code") && typeof editor.code === "string";
}
function hasProp(obj, key) {
  if (!obj)
    return false;
  return key in obj;
}
function create_fragment$1(ctx) {
  let svg;
  let g;
  let path;
  let svg_levels = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 24 24" },
    /*$$props*/
    ctx[0]
  ];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign(svg_data, svg_levels[i]);
  }
  return {
    c() {
      svg = svg_element("svg");
      g = svg_element("g");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", { xmlns: true, viewBox: true });
      var svg_nodes = children(svg);
      g = claim_svg_element(svg_nodes, "g", { "data-name": true });
      var g_nodes = children(g);
      path = claim_svg_element(g_nodes, "path", { d: true, "data-name": true });
      children(path).forEach(detach);
      g_nodes.forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "d", "M18 15a3 3 0 0 0-2.1.86L8 12.34v-.67l7.9-3.53A3 3 0 1 0 15 6v.34L7.1 9.86a3 3 0 1 0 0 4.28l7.9 3.53V18a3 3 0 1 0 3-3zm0-10a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM5 13a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm13 6a1 1 0 1 1 1-1 1 1 0 0 1-1 1z");
      attr(path, "data-name", "share");
      attr(g, "data-name", "Layer 2");
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, g);
      append_hydration(g, path);
    },
    p(ctx2, [dirty]) {
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { viewBox: "0 0 24 24" },
        dirty & /*$$props*/
        1 && /*$$props*/
        ctx2[0]
      ]));
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  $$self.$$set = ($$new_props) => {
    $$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
  };
  $$props = exclude_internal_props($$props);
  return [$$props];
}
class Share extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
  }
}
const _page_svelte_svelte_type_style_lang = "";
function create_default_slot_1(ctx) {
  let share;
  let current;
  share = new Share({});
  return {
    c() {
      create_component(share.$$.fragment);
    },
    l(nodes) {
      claim_component(share.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(share, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(share.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(share.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(share, detaching);
    }
  };
}
function create_if_block(ctx) {
  let t;
  return {
    c() {
      t = text("URL copied to clipboard!");
    },
    l(nodes) {
      t = claim_text(nodes, "URL copied to clipboard!");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot(ctx) {
  let iconbutton;
  let t;
  let span;
  let current;
  iconbutton = new IconButton({
    props: {
      "aria-label": "Share",
      title: "Share",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  iconbutton.$on(
    "click",
    /*onExport*/
    ctx[5]
  );
  let if_block = (
    /*exportUrl*/
    ctx[2] && create_if_block()
  );
  return {
    c() {
      create_component(iconbutton.$$.fragment);
      t = space();
      span = element("span");
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      claim_component(iconbutton.$$.fragment, nodes);
      t = claim_space(nodes);
      span = claim_element(nodes, "SPAN", { "aria-live": true });
      var span_nodes = children(span);
      if (if_block)
        if_block.l(span_nodes);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "aria-live", "polite");
    },
    m(target, anchor) {
      mount_component(iconbutton, target, anchor);
      insert_hydration(target, t, anchor);
      insert_hydration(target, span, anchor);
      if (if_block)
        if_block.m(span, null);
      current = true;
    },
    p(ctx2, dirty) {
      const iconbutton_changes = {};
      if (dirty & /*$$scope*/
      1024) {
        iconbutton_changes.$$scope = { dirty, ctx: ctx2 };
      }
      iconbutton.$set(iconbutton_changes);
      if (
        /*exportUrl*/
        ctx2[2]
      ) {
        if (if_block)
          ;
        else {
          if_block = create_if_block();
          if_block.c();
          if_block.m(span, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(iconbutton.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(iconbutton.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(iconbutton, detaching);
      if (detaching)
        detach(t);
      if (detaching)
        detach(span);
      if (if_block)
        if_block.d();
    }
  };
}
function create_fragment(ctx) {
  let main;
  let h1;
  let t0;
  let t1;
  let p;
  let t2;
  let a;
  let t3;
  let t4;
  let t5;
  let iframe;
  let iframe_src_value;
  let t6;
  let codeeditors;
  let updating_editors;
  let t7;
  let styleeditor;
  let updating_code;
  let current;
  function codeeditors_editors_binding(value) {
    ctx[7](value);
  }
  let codeeditors_props = {
    $$slots: { default: [create_default_slot] },
    $$scope: { ctx }
  };
  if (
    /*editors*/
    ctx[3] !== void 0
  ) {
    codeeditors_props.editors = /*editors*/
    ctx[3];
  }
  codeeditors = new CodeEditors({ props: codeeditors_props });
  binding_callbacks.push(() => bind(codeeditors, "editors", codeeditors_editors_binding));
  codeeditors.$on(
    "change",
    /*domTreeChanged*/
    ctx[4]
  );
  function styleeditor_code_binding(value) {
    ctx[8](value);
  }
  let styleeditor_props = {};
  if (
    /*style*/
    ctx[0] !== void 0
  ) {
    styleeditor_props.code = /*style*/
    ctx[0];
  }
  styleeditor = new StyleEditor({ props: styleeditor_props });
  binding_callbacks.push(() => bind(styleeditor, "code", styleeditor_code_binding));
  return {
    c() {
      main = element("main");
      h1 = element("h1");
      t0 = text("HTML Preview");
      t1 = space();
      p = element("p");
      t2 = text("Test and share snippets of HTML and state tranformations with others.\n        ");
      a = element("a");
      t3 = text("For insipiration see ARIA-live region example.");
      t4 = text("\n\n        Remember to click play to see state transformations.");
      t5 = space();
      iframe = element("iframe");
      t6 = space();
      create_component(codeeditors.$$.fragment);
      t7 = space();
      create_component(styleeditor.$$.fragment);
      this.h();
    },
    l(nodes) {
      main = claim_element(nodes, "MAIN", { class: true });
      var main_nodes = children(main);
      h1 = claim_element(main_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "HTML Preview");
      h1_nodes.forEach(detach);
      t1 = claim_space(main_nodes);
      p = claim_element(main_nodes, "P", {});
      var p_nodes = children(p);
      t2 = claim_text(p_nodes, "Test and share snippets of HTML and state tranformations with others.\n        ");
      a = claim_element(p_nodes, "A", { rel: true, href: true, class: true });
      var a_nodes = children(a);
      t3 = claim_text(a_nodes, "For insipiration see ARIA-live region example.");
      a_nodes.forEach(detach);
      t4 = claim_text(p_nodes, "\n\n        Remember to click play to see state transformations.");
      p_nodes.forEach(detach);
      t5 = claim_space(main_nodes);
      iframe = claim_element(main_nodes, "IFRAME", {
        class: true,
        security: true,
        src: true,
        title: true
      });
      children(iframe).forEach(detach);
      t6 = claim_space(main_nodes);
      claim_component(codeeditors.$$.fragment, main_nodes);
      t7 = claim_space(main_nodes);
      claim_component(styleeditor.$$.fragment, main_nodes);
      main_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "rel", "external");
      attr(a, "href", base + "/?code=N4IgzgLgngNgpiAXCAPJWcB8AdAdgAnwAd9g9DCAzAe1wgFowBLALzkXwEYA6AJgCc4AWwDc5fAF9xAbX7V4AXmzgIAQwgBXMMoC6pcYQDG86vw4ALahCJNcAazEEKNOo1bt8A4Y8JTcKAHp0eEwQABoQOAATJghTMCRpUCYopE4I4yiEZBQiHCcAYRgmQztiGFUofDj8MDg4fGKANwbBAHMmWnwNIij1ODxAvMGYpvw5RWVIdS1lfMJBgNHQiTDk1MReDOospFRhwuLS8srq6lr6xqYW8bgOrp6%2BiAH-AIOUUfH5OCUVGe0QPN8AAJOAwGDnADuphgUUWyxAEh0EiAA");
      attr(a, "class", "svelte-1y53fgs");
      attr(iframe, "class", "sandbox svelte-1y53fgs");
      attr(iframe, "security", "restricted");
      if (!src_url_equal(iframe.src, iframe_src_value = base + "/sandbox"))
        attr(iframe, "src", iframe_src_value);
      attr(iframe, "title", "Sandbox");
      attr(main, "class", "wrapper svelte-1y53fgs");
    },
    m(target, anchor) {
      insert_hydration(target, main, anchor);
      append_hydration(main, h1);
      append_hydration(h1, t0);
      append_hydration(main, t1);
      append_hydration(main, p);
      append_hydration(p, t2);
      append_hydration(p, a);
      append_hydration(a, t3);
      append_hydration(p, t4);
      append_hydration(main, t5);
      append_hydration(main, iframe);
      ctx[6](iframe);
      append_hydration(main, t6);
      mount_component(codeeditors, main, null);
      append_hydration(main, t7);
      mount_component(styleeditor, main, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const codeeditors_changes = {};
      if (dirty & /*$$scope, exportUrl*/
      1028) {
        codeeditors_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_editors && dirty & /*editors*/
      8) {
        updating_editors = true;
        codeeditors_changes.editors = /*editors*/
        ctx2[3];
        add_flush_callback(() => updating_editors = false);
      }
      codeeditors.$set(codeeditors_changes);
      const styleeditor_changes = {};
      if (!updating_code && dirty & /*style*/
      1) {
        updating_code = true;
        styleeditor_changes.code = /*style*/
        ctx2[0];
        add_flush_callback(() => updating_code = false);
      }
      styleeditor.$set(styleeditor_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(codeeditors.$$.fragment, local);
      transition_in(styleeditor.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(codeeditors.$$.fragment, local);
      transition_out(styleeditor.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(main);
      ctx[6](null);
      destroy_component(codeeditors);
      destroy_component(styleeditor);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  const refs = {};
  let exportUrl;
  let { editors, style } = initializeFromUrlSearchParams();
  onMount(() => {
    postSandboxMessage({
      type: "CONTENT_CHANGE",
      value: editors[0].code
    });
  });
  function postSandboxMessage(message, retries = 20) {
    var _a, _b;
    const contentWindow = (_a = refs.sandbox) == null ? void 0 : _a.contentWindow;
    const contentDocument = (_b = refs.sandbox) == null ? void 0 : _b.contentDocument;
    const isReady = (contentDocument == null ? void 0 : contentDocument.querySelector('[data-state="sandbox-ready"]')) != null;
    if (isReady && contentWindow) {
      contentWindow.postMessage(message);
    } else if (retries > 0) {
      setTimeout(() => postSandboxMessage(message, retries - 1), 500);
    }
  }
  function domTreeChanged(event) {
    postSandboxMessage({
      type: "CONTENT_CHANGE",
      value: event.detail.value
    });
  }
  function onExport() {
    const url = buildStatefulUrl({ style, editors });
    window.history.pushState({}, "", url);
    $$invalidate(2, exportUrl = url.toString());
    navigator.clipboard.writeText(exportUrl).then(() => {
      setTimeout(
        () => {
          $$invalidate(2, exportUrl = "");
        },
        3e3
      );
    });
  }
  function iframe_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      refs.sandbox = $$value;
      $$invalidate(1, refs);
    });
  }
  function codeeditors_editors_binding(value) {
    editors = value;
    $$invalidate(3, editors);
  }
  function styleeditor_code_binding(value) {
    style = value;
    $$invalidate(0, style);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*style*/
    1) {
      postSandboxMessage({ type: "STYLE_CHANGE", value: style });
    }
  };
  return [
    style,
    refs,
    exportUrl,
    editors,
    domTreeChanged,
    onExport,
    iframe_binding,
    codeeditors_editors_binding,
    styleeditor_code_binding
  ];
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
