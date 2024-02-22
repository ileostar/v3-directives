import { isRef as se, watch as ut, defineComponent as $e, resolveComponent as he, openBlock as H, createElementBlock as ee, normalizeClass as Ze, normalizeStyle as re, withKeys as ht, createElementVNode as L, Fragment as ct, renderSlot as ft, createBlock as et, createCommentVNode as Ee, pushScopeId as mt, popScopeId as vt, mergeProps as gt, withCtx as Ce, createVNode as wt, toDisplayString as yt, ref as ce, createApp as _t, h as $t } from "vue";
import { getOverflowAncestors as Se, offset as bt, autoPlacement as Tt, shift as Et, flip as Ct, arrow as St, size as Lt, computePosition as Nt } from "@floating-ui/dom";
const kt = {
  mounted(e, t) {
    const i = t.arg ? document.getElementById(t.arg) : window;
    e.addEventListener("click", () => {
      i.scrollTo({
        behavior: "smooth",
        top: 0
      });
    });
    const n = () => {
      const o = i.scrollTop < t.value;
      e.style.visibility = o ? "hidden" : "unset";
    };
    i.scrollTop < t.value && (e.style.visibility = "hidden"), i.addEventListener("scroll", n);
  },
  unmounted(e, t) {
    const i = t.arg ? document.getElementById(t.arg) : window, n = () => {
      const o = i.scrollTop < t.value;
      e.style.visibility = o ? "hidden" : "unset";
    };
    i.removeEventListener("scroll", n), e.removeEventListener("click", n);
  },
  updated(e, t) {
    const i = t.arg ? document.getElementById(t.arg) : window, n = () => {
      const o = i.scrollTop < t.value;
      e.style.visibility = o ? "hidden" : "unset";
    };
    t.value !== void 0 ? i.addEventListener("scroll", n) : i.removeEventListener("scroll", n);
  }
}, S = /* @__PURE__ */ new WeakMap();
function Le(e, t) {
  const i = (n) => {
    if (e.contains(n.target))
      return;
    const { value: o } = t;
    o();
  };
  window.addEventListener("click", i), S.set(e, i);
}
const Pt = {
  beforeUnmount(e) {
    if (S.has(e)) {
      const t = S.get(e);
      t && window.removeEventListener("click", t), S.delete(e);
    }
  },
  mounted(e, t) {
    Le(e, t);
  },
  updated(e, t) {
    if (S.has(e)) {
      const i = S.get(e);
      i && window.removeEventListener("click", i), S.delete(e);
    }
    Le(e, t);
  }
};
function Mt(e, t) {
  const { value: i } = t;
  e.setAttribute("copyValue", String(i));
  const n = () => {
    navigator.clipboard.writeText(e.getAttribute("copyValue") || "").then(() => {
      window.alert("复制成功！");
    }).catch(() => {
      window.alert("复制失败！");
    });
  };
  e.addEventListener("click", n);
}
const Ht = {
  mounted(e, t) {
    Mt(e, t);
  },
  updated(e, t) {
    const { value: i } = t;
    e.setAttribute("copyValue", String(i));
  }
};
function ae(e) {
  return typeof e == "boolean";
}
function z(e) {
  return typeof e == "function";
}
const zt = `
<svg width="57" height="57" viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
    <g fill="none" fill-rule="evenodd">
        <g transform="translate(1 1)" stroke-width="2">
            <circle cx="5" cy="50" r="5">
                <animate attributeName="cy"
                     begin="0s" dur="2.2s"
                     values="50;5;50;50"
                     calcMode="linear"
                     repeatCount="indefinite" />
                <animate attributeName="cx"
                     begin="0s" dur="2.2s"
                     values="5;27;49;5"
                     calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
            <circle cx="27" cy="5" r="5">
                <animate attributeName="cy"
                     begin="0s" dur="2.2s"
                     from="5" to="5"
                     values="5;50;50;5"
                     calcMode="linear"
                     repeatCount="indefinite" />
                <animate attributeName="cx"
                     begin="0s" dur="2.2s"
                     from="27" to="27"
                     values="27;49;5;27"
                     calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
            <circle cx="49" cy="50" r="5">
                <animate attributeName="cy"
                     begin="0s" dur="2.2s"
                     values="50;50;5;50"
                     calcMode="linear"
                     repeatCount="indefinite" />
                <animate attributeName="cx"
                     from="49" to="49"
                     begin="0s" dur="2.2s"
                     values="49;5;27;49"
                     calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
        </g>
    </g>
</svg>
`, x = /* @__PURE__ */ new WeakMap(), q = /* @__PURE__ */ new WeakMap();
function Ne(e, t) {
  const { arg: i, value: n } = t;
  if (!z(n))
    return;
  const o = i ? Number(i.split("-")[1]) : 300, s = i ? i.split("-")[0] : "click";
  let r;
  const a = () => {
    r || (r = window.setTimeout(() => {
      n(), r = void 0;
    }, o));
  };
  x.set(e, a), q.set(e, s), e.addEventListener(s, a);
}
const xt = {
  beforeUnmount(e) {
    x.delete(e), q.delete(e);
  },
  mounted(e, t) {
    Ne(e, t);
  },
  updated(e, t) {
    if (x.has(e)) {
      const i = q.get(e), n = x.get(e);
      n && i && e.removeEventListener(i, n), x.delete(e), q.delete(e);
    }
    Ne(e, t);
  }
}, A = /* @__PURE__ */ new WeakMap();
function ke(e, t) {
  const { arg: i, value: n } = t;
  if (!z(n))
    return;
  let o = 0, s = 0;
  const r = () => {
    o++;
    const a = (/* @__PURE__ */ new Date()).getTime();
    o === 1 && (s = a, setTimeout(
      () => {
        o = 0, s = 0;
      },
      i ? Number(i) : 300
    )), o === 2 && (a - s < (i ? Number(i) : 300) && n(), o = 0, s = 0);
  };
  A.set(e, r), e.addEventListener("click", r);
}
const At = {
  beforeUnmount(e) {
    A.delete(e);
  },
  mounted(e, t) {
    ke(e, t);
  },
  updated(e, t) {
    if (A.has(e)) {
      const i = A.get(e);
      i && e.removeEventListener("click", i), A.delete(e);
    }
    ke(e, t);
  }
}, Ot = {
  mounted(e) {
    let t = 0, i = 0, n = 0, o = 0, s = 0, r = 0;
    e.style.cursor = "move";
    const a = window.getComputedStyle(e).transform.split(",").map((u) => Number.parseInt(u)).slice(4, 6);
    a.length > 1 && (s = a[0], r = a[1]);
    const d = (u) => {
      const { clientX: p, clientY: h } = u, w = p - t + s, y = h - i + r;
      n = w, o = y, e.style.transform = `translate(${w}px, ${y}px)`;
    };
    e.addEventListener("mousedown", (u) => {
      const { clientX: p, clientY: h } = u;
      t = p, i = h, window.addEventListener("mousemove", d);
    }), e.addEventListener("mouseup", () => {
      s = n, r = o, window.removeEventListener("mousemove", d);
    });
  }
};
function Pe(e, t) {
  e.style.overflow = "hidden", e.style.textOverflow = "ellipsis";
  const { arg: i } = t;
  i ? (e.style.display = "-webkit-box", e.style.webkitLineClamp = String(Number(i)), e.style.webkitBoxOrient = "vertical") : e.style.whiteSpace = "nowrap", e.setAttribute("title", e.textContent);
}
const It = {
  mounted(e, t) {
    Pe(e, t);
  },
  updated(e, t) {
    Pe(e, t);
  }
}, Rt = {
  mounted(e, t, i) {
    const n = (o) => {
      const s = o.target, r = s.value, a = r.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEFF]|[\u2600-\u27FF]/g, "");
      a !== r && (s.value = a, s.dispatchEvent(new Event("input", { bubbles: !0 })));
    };
    e.addEventListener("input", n), e.$destroy = () => {
      e.removeEventListener("input", n), delete e.$destroy;
    };
  },
  unmounted(e) {
    e.$destroy && e.$destroy();
  }
};
let de = "", fe = "";
function Bt(e, t, i) {
  const n = i ? `<img src="${i}" style="width: 90%; border-radius: 5px;" />` : "";
  fe = `
    <div style="position: absolute; top: 0; left: 0; z-index: 9999; background: #fff; display: flex; justify-content: center; align-items: center; height: ${e.offsetHeight}px; width: ${e.offsetWidth}px; border-radius: 5px;">
      <div style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
        ${n}
        <div style="color: #000">${t}</div>
      </div>
    </div>
  `, e.innerHTML = fe;
}
const Dt = {
  beforeMount(e, t) {
    de = e.innerHTML;
  },
  mounted(e, t) {
    e.style.position = e.style.position || "relative";
    const { content: i = "暂无数据", img: n, visible: o } = t.value;
    console.log(o, i, n);
    const s = () => {
      e.innerHTML = de;
    }, r = () => {
      (se(o) ? o.value : o) ? Bt(e, i, n) : s();
    };
    se(o) && ut(o, r), r();
  },
  updated(e, t) {
    const { visible: i } = t.value;
    (se(i) ? i.value : i) ? e.innerHTML = fe : e.innerHTML = de.trim();
  }
};
let X = null;
const Ft = `
@keyframes v-flicker {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
`, Wt = {
  mounted(e) {
    X === null && (X = document.createElement("style"), X.innerHTML = Ft, document.head.appendChild(X)), e.style.animation = "v-flicker 1s infinite";
  }
}, Vt = {
  mounted(e) {
    e.focus && e.focus();
  },
  updated(e) {
    e.focus && e.focus();
  }
}, jt = {
  mounted(e, t) {
    const { arg: i } = t;
    e.style.backgroundColor = i || "rgba(255, 255, 0, .8)";
  }
}, O = /* @__PURE__ */ new WeakMap();
function Me(e, t) {
  const { value: i } = t;
  z(i) && (e.addEventListener("mouseenter", i), O.set(e, i));
}
const Ut = {
  beforeUnmount(e) {
    O.delete(e);
  },
  mounted(e, t) {
    Me(e, t);
  },
  updated(e, t) {
    if (O.has(e)) {
      const i = O.get(e);
      i && e.removeEventListener("mouseenter", i), O.delete(e);
    }
    Me(e, t);
  }
};
function Yt(e, t) {
  const i = document.createEvent("HTMLEvents");
  i.initEvent(t, !0, !0), e.dispatchEvent(i);
}
const Xt = {
  mounted(e, t) {
    const i = t.arg, n = t.value || 10, o = ["number", "decimal", "customize"];
    if (!i || !o.includes(i))
      return console.log(`使用v-input指令需要选择特定功能：v-input:type="restrictValue";  type = ${o.join("/")}.`);
    e.$handler = (s) => {
      switch (i) {
        case "number":
          s.value = s.value.replace(/[^\d]/, "");
          break;
        case "decimal":
          s.value = s.value.replace(/[^\d.]/g, ""), s.value = s.value.replace(/\.{2,}/g, "."), s.value = s.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
          const r = new RegExp(`^(-)*(\\d+)\\.(\\d{0,${n}}).*$`);
          s.value = s.value.replace(r, "$1$2.$3"), !s.value.includes(".") && s.value != "" && (s.value = Number.parseFloat(s.value)), s.value.includes(".") && s.value.length === 1 && (s.value = "");
          break;
        case "customize":
          const a = n && new RegExp(n);
          s.value = s.value.replace(a, "");
          break;
      }
      Yt(s, "input");
    }, e.$handler(e);
  },
  updated(e) {
    e.$handler && e.$handler(e);
  }
};
let Gt;
const qt = (e) => {
  e.forEach((t) => {
    if (t.isIntersecting) {
      const i = t.target;
      i.src !== i.dataset.src && (i.src = i.dataset.src || "");
    }
  });
};
let N = null;
const He = (e, t) => {
  if (e.tagName !== "IMG")
    return;
  const { value: i } = t;
  e.setAttribute("data-src", String(i)), N == null || N.observe(e);
}, Kt = {
  beforeUnmount(e) {
    N && N.unobserve(e);
  },
  mounted(e, t) {
    N === null && (N = new IntersectionObserver(qt, Gt)), He(e, t);
  },
  updated(e, t) {
    He(e, t);
  }
}, I = /* @__PURE__ */ new WeakMap(), K = /* @__PURE__ */ new WeakMap();
function ze(e) {
  const t = document.createElement("div"), i = document.createElement("div");
  i.style.position = "absolute", i.style.top = "0", i.style.left = "0", i.style.right = "0", i.style.bottom = "0", i.style.zIndex = "9999", i.style.backgroundColor = "rgba(0, 0, 0, 0.5)", i.style.pointerEvents = "none", t.style.position = "absolute", t.style.top = "50%", t.style.left = "50%", t.style.transform = "translate(-50%, -50%)", t.style.pointerEvents = "none", t.innerHTML = zt, (e.style.position === "static" || e.style.position === "") && (K.set(e, !0), e.style.position = "relative"), i.appendChild(t), I.set(e, i), e.appendChild(i);
}
const Jt = {
  beforeUnmount(e) {
    I.delete(e), K.delete(e);
  },
  mounted(e, t) {
    const { value: i } = t;
    ae(i) && i && ze(e);
  },
  updated(e, t) {
    const { value: i } = t, n = I.has(e), o = K.has(e);
    if (!(i && n) && (i && !n && ze(e), !((!i || !ae(i)) && !n) && (!i || !ae(i)) && n)) {
      o && (e.style.position = "static", K.delete(e));
      const s = I.get(e);
      s && e.removeChild(s), I.delete(e);
    }
  }
}, M = /* @__PURE__ */ new WeakMap(), J = /* @__PURE__ */ new WeakMap();
function xe(e, t) {
  const { arg: i, value: n } = t;
  if (!z(n))
    return;
  let o;
  const s = () => {
    o = window.setTimeout(n, i ? Number(i) : 300);
  }, r = () => {
    clearTimeout(o);
  };
  e.addEventListener("mousedown", s), e.addEventListener("mouseup", r), M.set(e, s), J.set(e, r);
}
const Qt = {
  beforeUnmount(e) {
    M.delete(e), J.delete(e);
  },
  mounted(e, t) {
    xe(e, t);
  },
  updated(e, t) {
    if (M.has(e)) {
      const i = M.get(e);
      i && e.removeEventListener("mousedown", i), M.delete(e);
    }
    if (J.has(e)) {
      const i = M.get(e);
      i && e.removeEventListener("mouseup", i), J.delete(e);
    }
    xe(e, t);
  }
};
function Ae(e, t) {
  const { value: i } = t, n = String(i).split("."), o = Array.from(n[0]).reverse(), s = [];
  for (let a = 0; a < o.length; a++)
    a % 3 === 0 && a !== 0 && s.push(","), s.push(o[a]);
  const r = s.reverse().join("");
  n.length > 1 ? e.innerHTML = `${r}.${n[1]}` : e.innerHTML = r;
}
const Zt = {
  mounted(e, t) {
    Ae(e, t);
  },
  updated(e, t) {
    Ae(e, t);
  }
}, R = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap();
function Oe(e, t) {
  const { arg: i, value: n } = t;
  if (!z(n))
    return;
  const o = i || "click", s = () => {
    n(), e.removeEventListener(o, s);
  };
  R.set(e, s), Q.set(e, o), e.addEventListener(o, s);
}
const ei = {
  beforeUnmount(e) {
    R.delete(e), Q.delete(e);
  },
  mounted(e, t) {
    Oe(e, t);
  },
  updated(e, t) {
    if (R.has(e)) {
      const i = Q.get(e), n = R.get(e);
      n && i && e.removeEventListener(i, n), R.delete(e), Q.delete(e);
    }
    Oe(e, t);
  }
}, ti = {
  mounted(e, t) {
    let i = "add;del", n = [];
    n = i.split(";");
    let o;
    typeof t.value == "string" ? o = t.value : Array.isArray(t.value) ? o = t.value.join(";") : console.log("数据格式不正确，请输入字符串（以分号分隔）或数组");
    let s = o, r = [];
    s || (s = ""), r = s.split(";");
    let a = !1;
    for (let d = 0; d < r.length; d++)
      if (n.includes(r[d])) {
        a = !0;
        break;
      }
    a || e.parentNode && e.parentNode.removeChild(e);
  }
};
function Ie(e) {
  const t = document.createElement("div");
  return t.style.position = "absolute", e === "top" ? t.style.top = "0" : t.style.bottom = "0", t.style.left = "0", t.style.right = "0", t.style.height = "5px", t.style.backgroundColor = "#1890ff", t.style.zIndex = "1", t.style.cursor = "ns-resize", t.style.display = "none", t;
}
function Re(e) {
  const t = document.createElement("div");
  return t.style.position = "absolute", t.style.top = "5px", e === "left" ? t.style.left = "0" : t.style.right = "0", t.style.bottom = "5px", t.style.width = "5px", t.style.backgroundColor = "#1890ff", t.style.zIndex = "1", t.style.cursor = "ew-resize", t.style.display = "none", t.style.transition = "all 0.3s", t;
}
const ii = {
  mounted(e) {
    const t = e.style.position;
    (t === "static" || t === "") && (e.style.position = "relative");
    const i = Ie("top"), n = Ie("bottom"), o = Re("left"), s = Re("right"), r = [i, n], a = [o, s], d = [...r, ...a];
    r.forEach((p) => {
      p.addEventListener("mousedown", (h) => {
        h.stopPropagation();
        const w = h.clientY, g = window.getComputedStyle(e).height, c = ($) => {
          const P = $.clientY - w;
          e.style.height = `${Number.parseInt(g, 10) + P}px`;
        }, v = () => {
          window.removeEventListener("mousemove", c), window.removeEventListener("mouseup", v);
        };
        window.addEventListener("mousemove", c), window.addEventListener("mouseup", v);
      });
    }), a.forEach((p) => {
      p.addEventListener("mousedown", (h) => {
        h.stopPropagation();
        const w = h.clientX, g = window.getComputedStyle(e).width, c = ($) => {
          const P = $.clientX - w;
          e.style.width = `${Number.parseInt(g, 10) + P}px`;
        }, v = () => {
          window.removeEventListener("mousemove", c), window.removeEventListener("mouseup", v);
        };
        window.addEventListener("mousemove", c), window.addEventListener("mouseup", v);
      });
    }), e.addEventListener("click", () => {
      d.forEach((p) => {
        p.style.display = "block";
      });
    });
    const u = (p) => {
      e.contains(p.target) || d.forEach((h) => {
        h.style.display = "none";
      });
    };
    window.addEventListener("click", u), e.appendChild(i), e.appendChild(n), e.appendChild(o), e.appendChild(s);
  }
};
var me = {
  mounted(e, t) {
    const i = {
      event: "mousedown",
      transition: 600
    };
    ni(Object.keys(t.modifiers), i), e.addEventListener(i.event, (r) => {
      s(r, e, t.value);
    });
    const n = t.value || me.color || "rgba(0, 0, 0, 0.35)", o = me.zIndex || "9999";
    function s(r, a) {
      const d = a, u = Number.parseInt(getComputedStyle(d).borderWidth.replace("px", "")), p = d.getBoundingClientRect(), h = p.left, w = p.top, y = d.offsetWidth, g = d.offsetHeight, c = r.clientX - h, v = r.clientY - w, $ = Math.max(c, y - c), P = Math.max(v, g - v), U = window.getComputedStyle(d), Y = Math.sqrt($ * $ + P * P), be = u > 0 ? u : 0, f = document.createElement("div"), m = document.createElement("div");
      m.className = "ripple-container", f.className = "ripple", f.style.marginTop = "0px", f.style.marginLeft = "0px", f.style.width = "1px", f.style.height = "1px", f.style.transition = `all ${i.transition}ms cubic-bezier(0.4, 0, 0.2, 1)`, f.style.borderRadius = "50%", f.style.pointerEvents = "none", f.style.position = "relative", f.style.zIndex = o, f.style.backgroundColor = n, m.style.position = "absolute", m.style.left = `${0 - be}px`, m.style.top = `${0 - be}px`, m.style.height = "0", m.style.width = "0", m.style.pointerEvents = "none", m.style.overflow = "hidden";
      const ie = d.style.position.length > 0 ? d.style.position : getComputedStyle(d).position;
      ie !== "relative" && (d.style.position = "relative"), m.appendChild(f), d.appendChild(m), f.style.marginLeft = `${c}px`, f.style.marginTop = `${v}px`, m.style.width = `${y}px`, m.style.height = `${g}px`, m.style.borderTopLeftRadius = U.borderTopLeftRadius, m.style.borderTopRightRadius = U.borderTopRightRadius, m.style.borderBottomLeftRadius = U.borderBottomLeftRadius, m.style.borderBottomRightRadius = U.borderBottomRightRadius, m.style.direction = "ltr", setTimeout(() => {
        f.style.width = `${Y * 2}px`, f.style.height = `${Y * 2}px`, f.style.marginLeft = `${c - Y}px`, f.style.marginTop = `${v - Y}px`;
      }, 0);
      function ne() {
        setTimeout(() => {
          f.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }, 250), setTimeout(() => {
          m.parentNode.removeChild(m);
        }, 850), a.removeEventListener("mouseup", ne, !1), setTimeout(() => {
          let Te = !0;
          for (let oe = 0; oe < d.childNodes.length; oe++)
            d.childNodes[oe].className === "ripple-container" && (Te = !1);
          Te && (ie !== "static" ? d.style.position = ie : d.style.position = "");
        }, i.transition + 250);
      }
      r.type === "mousedown" ? a.addEventListener("mouseup", ne, !1) : ne();
    }
  }
};
function ni(e, t) {
  e.forEach((i) => {
    isNaN(Number(i)) ? t.event = i : t.transition = i;
  });
}
const tt = 100, oi = 500;
let ve = null, Be = null;
const ge = /* @__PURE__ */ new WeakMap();
function it(e) {
  return e.getBoundingClientRect().top - (ve || tt) > window.innerHeight;
}
function De() {
  document.querySelectorAll("[v-slide-in]").forEach((t) => {
    if (it(t))
      return;
    const i = ge.get(t);
    i && (i.play(), t.removeAttribute("v-slide-in"));
  });
}
const si = {
  mounted(e, t) {
    if (t.value && (ve = t.value.px, Be = t.value.time), !it(e))
      return;
    const i = e.animate(
      [
        {
          opacity: 0,
          transform: `translateY(${ve || tt}px)`
        },
        {
          opacity: 1,
          transform: "translateY(0px)"
        }
      ],
      {
        duration: Be || oi,
        easing: "ease-in-out",
        fill: "forwards"
      }
    );
    i.pause(), ge.set(e, i), e.setAttribute("v-slide-in", ""), window.addEventListener("scroll", De);
  },
  unmounted(e) {
    ge.delete(e), window.removeEventListener("scroll", De);
  }
}, E = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new WeakMap();
function Fe(e, t) {
  const { arg: i, value: n } = t;
  if (!z(n))
    return;
  const o = i ? Number(i.split("-")[1]) : 300, s = i ? i.split("-")[0] : "click";
  let r = 0;
  const a = () => {
    const u = Date.now();
    u - r < o || (r = u, n());
  }, d = E.get(e);
  d && e.removeEventListener(s, d), E.set(e, a), B.set(e, s), e.addEventListener(s, a);
}
const ri = {
  beforeUnmount(e) {
    if (E.has(e)) {
      const t = B.get(e), i = E.get(e);
      i && t && e.removeEventListener(t, i), E.delete(e), B.delete(e);
    }
  },
  mounted(e, t) {
    Fe(e, t);
  },
  updated(e, t) {
    if (E.has(e)) {
      const i = B.get(e), n = E.get(e);
      n && i && e.removeEventListener(i, n), E.delete(e), B.delete(e);
    }
    Fe(e, t);
  }
}, k = {
  // Compute arrow overflow (useful to hide it)
  arrowOverflow: !0,
  // Arrow padding (px)
  arrowPadding: 0,
  /**
   * By default, compute autohide on 'click'.
   */
  autoHideOnMousedown: !1,
  // Element used to compute position and size boundaries
  boundary: void 0,
  // Default container where the tooltip will be appended
  container: "body",
  // Disable popper components
  disabled: !1,
  // Auto destroy tooltip DOM nodes (ms)
  disposeTimeout: 150,
  // Default position offset along main axis (px)
  distance: 5,
  // Flip to the opposite placement if needed
  flip: !0,
  // Skip delay & CSS transitions when another popper is shown, so that the popper appear to instanly move to the new position.
  instantMove: !1,
  // Overflow padding (px)
  overflowPadding: 0,
  // Triggers on the popper itself
  popperTriggers: [],
  // Prevent overflow
  preventOverflow: !0,
  // Shift on the cross axis to prevent the popper from overflowing
  shift: !0,
  // Default position offset along cross axis (px)
  skidding: 0,
  // Positioning strategy
  strategy: "absolute",
  // Themes
  themes: {
    tooltip: {
      // Delay (ms)
      delay: {
        hide: 0,
        show: 200
      },
      // Update popper on content resize
      handleResize: !1,
      // Close tooltip on click on tooltip target
      hideTriggers: (e) => [...e, "click"],
      // Enable HTML content in directive
      html: !1,
      // Displayed when tooltip content is loading
      loadingContent: "...",
      // Default tooltip placement relative to target element
      placement: "top",
      // Default events that trigger the tooltip
      triggers: ["hover", "focus", "touch"]
    }
  }
};
function W(e, t) {
  let i = k.themes[e] || {}, n;
  do
    n = i[t], typeof n > "u" ? i.$extend ? i = k.themes[i.$extend] || {} : (i = null, n = k[t]) : i = null;
  while (i);
  return n;
}
function ai(e) {
  const t = [e];
  let i = k.themes[e] || {};
  do
    i.$extend && !i.$resetCss ? (t.push(i.$extend), i = k.themes[i.$extend] || {}) : i = null;
  while (i);
  return t.map((n) => `v-popper--theme-${n}`);
}
function We(e) {
  const t = [e];
  let i = k.themes[e] || {};
  do
    i.$extend ? (t.push(i.$extend), i = k.themes[i.$extend] || {}) : i = null;
  while (i);
  return t;
}
const nt = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []);
let V = !1;
if (typeof window < "u") {
  V = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        V = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let ot = !1;
typeof window < "u" && typeof navigator < "u" && (ot = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const Ve = {
  click: "click",
  focus: "focus",
  hover: "mouseenter",
  pointer: "pointerdown",
  touch: "touchstart"
}, je = {
  click: "click",
  focus: "blur",
  hover: "mouseleave",
  pointer: "pointerup",
  touch: "touchend"
};
function Ue(e, t) {
  const i = e.indexOf(t);
  i !== -1 && e.splice(i, 1);
}
function le() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const _ = [];
let C = null;
const Ye = {};
function Xe(e) {
  let t = Ye[e];
  return t || (t = Ye[e] = []), t;
}
let we = function() {
};
typeof window < "u" && (we = window.Element);
function l(e) {
  return function(t) {
    return W(t.theme, e);
  };
}
const pe = "__floating-vue__popper";
function di() {
  return $e({
    activated() {
      this.$_autoShowHide();
    },
    beforeUnmount() {
      this.dispose();
    },
    computed: {
      hasPopperShowTriggerHover() {
        var e, t;
        return ((e = this.popperTriggers) == null ? void 0 : e.includes("hover")) || ((t = this.popperShowTriggers) == null ? void 0 : t.includes("hover"));
      },
      parentPopper() {
        var e;
        return (e = this[pe]) == null ? void 0 : e.parentPopper;
      },
      popperId() {
        return this.ariaId != null ? this.ariaId : this.randomId;
      },
      shouldMountContent() {
        return this.eagerMount || this.isMounted;
      },
      slotData() {
        return {
          attrs: this.$attrs,
          autoHide: typeof this.autoHide == "function" ? this.lastAutoHide : this.autoHide,
          classes: {
            ...this.classes,
            popperClass: this.popperClass
          },
          handleResize: this.handleResize,
          hide: this.hide,
          isShown: this.isShown,
          onResize: this.onResize,
          popperId: this.popperId,
          result: this.positioningDisabled ? null : this.result,
          shouldMountContent: this.shouldMountContent,
          show: this.show,
          skipTransition: this.skipTransition
        };
      }
    },
    created() {
      this.autoMinSize && console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'), this.autoMaxSize && console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.");
    },
    data() {
      return {
        classes: {
          hideFrom: !1,
          hideTo: !0,
          showFrom: !1,
          showTo: !1
        },
        containsGlobalTarget: !1,
        isDisposed: !0,
        isMounted: !1,
        isShown: !1,
        lastAutoHide: !0,
        mouseDownContains: !1,
        pendingHide: !1,
        randomId: `popper_${[Math.random(), Date.now()].map((e) => e.toString(36).substring(2, 10)).join("_")}`,
        result: {
          arrow: {
            centerOffset: 0,
            x: 0,
            y: 0
          },
          placement: "",
          strategy: this.strategy,
          transformOrigin: null,
          x: 0,
          y: 0
        },
        shownChildren: /* @__PURE__ */ new Set(),
        skipTransition: !1
      };
    },
    deactivated() {
      this.hide();
    },
    emits: {
      "apply-hide": () => !0,
      "apply-show": () => !0,
      "auto-hide": () => !0,
      "close-directive": () => !0,
      "close-group": () => !0,
      hide: () => !0,
      resize: () => !0,
      show: () => !0,
      "update:shown": (e) => !0
    },
    inject: {
      [pe]: { default: null }
    },
    methods: {
      $_addEventListeners() {
        const e = (i) => {
          this.isShown && !this.$_hideInProgress || (i.usedByTooltip = !0, !this.$_preventShow && this.show({ event: i }));
        };
        this.$_registerTriggerListeners(this.$_targetNodes, Ve, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], Ve, this.popperTriggers, this.popperShowTriggers, e);
        const t = (i) => {
          i.usedByTooltip || this.hide({ event: i });
        };
        this.$_registerTriggerListeners(this.$_targetNodes, je, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], je, this.popperTriggers, this.popperHideTriggers, t);
      },
      $_applyAttrsToTarget(e) {
        for (const t of this.$_targetNodes)
          for (const i in e) {
            const n = e[i];
            n == null ? t.removeAttribute(i) : t.setAttribute(i, n);
          }
      },
      async $_applyHide(e = !1) {
        if (this.shownChildren.size > 0) {
          this.pendingHide = !0, this.$_hideInProgress = !1;
          return;
        }
        if (clearTimeout(this.$_scheduleTimer), !this.isShown)
          return;
        this.skipTransition = e, Ue(_, this), _.length === 0 && document.body.classList.remove("v-popper--some-open");
        for (const i of We(this.theme)) {
          const n = Xe(i);
          Ue(n, this), n.length === 0 && document.body.classList.remove(`v-popper--some-open--${i}`);
        }
        C === this && (C = null), this.isShown = !1, this.$_applyAttrsToTarget({
          "aria-describedby": void 0,
          "data-popper-shown": void 0
        }), clearTimeout(this.$_disposeTimer);
        const t = this.disposeTimeout;
        t !== null && (this.$_disposeTimer = setTimeout(() => {
          this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
        }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await le(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
      },
      async $_applyShow(e = !1) {
        clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await le(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
          ...Se(this.$_referenceNode),
          ...Se(this.$_popperNode)
        ], "scroll", () => {
          this.$_computePosition();
        }));
      },
      async $_applyShowEffect() {
        if (this.$_hideInProgress)
          return;
        if (this.computeTransformOrigin) {
          const t = this.$_referenceNode.getBoundingClientRect(), i = this.$_popperNode.querySelector(".v-popper__wrapper"), n = i.parentNode.getBoundingClientRect(), o = t.x + t.width / 2 - (n.left + i.offsetLeft), s = t.y + t.height / 2 - (n.top + i.offsetTop);
          this.result.transformOrigin = `${o}px ${s}px`;
        }
        this.isShown = !0, this.$_applyAttrsToTarget({
          "aria-describedby": this.popperId,
          "data-popper-shown": ""
        });
        const e = this.showGroup;
        if (e) {
          let t;
          for (let i = 0; i < _.length; i++)
            t = _[i], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
        }
        _.push(this), document.body.classList.add("v-popper--some-open");
        for (const t of We(this.theme))
          Xe(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
        this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await le(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
      },
      $_autoShowHide() {
        this.shown ? this.show() : this.hide();
      },
      $_computeDelay(e) {
        const t = this.delay;
        return Number.parseInt(t && t[e] || t || 0);
      },
      async $_computePosition() {
        if (this.isDisposed || this.positioningDisabled)
          return;
        const e = {
          middleware: [],
          strategy: this.strategy
        };
        (this.distance || this.skidding) && e.middleware.push(bt({
          crossAxis: this.skidding,
          mainAxis: this.distance
        }));
        const t = this.placement.startsWith("auto");
        if (t ? e.middleware.push(Tt({
          alignment: this.placement.split("-")[1] ?? ""
        })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(Et({
          boundary: this.boundary,
          crossAxis: this.shiftCrossAxis,
          padding: this.overflowPadding
        })), !t && this.flip && e.middleware.push(Ct({
          boundary: this.boundary,
          padding: this.overflowPadding
        }))), e.middleware.push(St({
          element: this.$_arrowNode,
          padding: this.arrowPadding
        })), this.arrowOverflow && e.middleware.push({
          fn: ({ middlewareData: n, placement: o, rects: s }) => {
            let r;
            const { centerOffset: a } = n.arrow;
            return o.startsWith("top") || o.startsWith("bottom") ? r = Math.abs(a) > s.reference.width / 2 : r = Math.abs(a) > s.reference.height / 2, {
              data: {
                overflow: r
              }
            };
          },
          name: "arrowOverflow"
        }), this.autoMinSize || this.autoSize) {
          const n = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
          e.middleware.push({
            fn: ({ middlewareData: o, placement: s, rects: r }) => {
              var u;
              if ((u = o.autoSize) != null && u.skip)
                return {};
              let a, d;
              return s.startsWith("top") || s.startsWith("bottom") ? a = r.reference.width : d = r.reference.height, this.$_innerNode.style[n === "min" ? "minWidth" : n === "max" ? "maxWidth" : "width"] = a != null ? `${a}px` : null, this.$_innerNode.style[n === "min" ? "minHeight" : n === "max" ? "maxHeight" : "height"] = d != null ? `${d}px` : null, {
                data: {
                  skip: !0
                },
                reset: {
                  rects: !0
                }
              };
            },
            name: "autoSize"
          });
        }
        (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(Lt({
          apply: ({ availableHeight: n, availableWidth: o }) => {
            this.$_innerNode.style.maxWidth = o != null ? `${o}px` : null, this.$_innerNode.style.maxHeight = n != null ? `${n}px` : null;
          },
          boundary: this.boundary,
          padding: this.overflowPadding
        })));
        const i = await Nt(this.$_referenceNode, this.$_popperNode, e);
        Object.assign(this.result, {
          arrow: {
            ...i.middlewareData.arrow,
            ...i.middlewareData.arrowOverflow
          },
          placement: i.placement,
          strategy: i.strategy,
          x: i.x,
          y: i.y
        });
      },
      $_detachPopperNode() {
        this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
      },
      $_ensureTeleport() {
        if (this.isDisposed)
          return;
        let e = this.container;
        if (typeof e == "string" ? e = window.document.querySelector(e) : e === !1 && (e = this.$_targetNodes[0].parentNode), !e)
          throw new Error(`No container for popover: ${this.container}`);
        e.appendChild(this.$_popperNode), this.isMounted = !0;
      },
      $_handleGlobalClose(e, t = !1) {
        this.$_showFrameLocked || (this.hide({ event: e }), e.closePopover ? this.$emit("close-directive") : this.$emit("auto-hide"), t && (this.$_preventShow = !0, setTimeout(() => {
          this.$_preventShow = !1;
        }, 300)));
      },
      $_isAimingPopper() {
        const e = this.$_referenceNode.getBoundingClientRect();
        if (D >= e.left && D <= e.right && F >= e.top && F <= e.bottom) {
          const t = this.$_popperNode.getBoundingClientRect(), i = D - b, n = F - T, s = t.left + t.width / 2 - b + (t.top + t.height / 2) - T + t.width + t.height, r = b + i * s, a = T + n * s;
          return G(b, T, r, a, t.left, t.top, t.left, t.bottom) || G(b, T, r, a, t.left, t.top, t.right, t.top) || G(b, T, r, a, t.right, t.top, t.right, t.bottom) || G(b, T, r, a, t.left, t.bottom, t.right, t.bottom);
        }
        return !1;
      },
      $_refreshListeners() {
        this.isDisposed || (this.$_removeEventListeners(), this.$_addEventListeners());
      },
      $_registerEventListeners(e, t, i) {
        this.$_events.push({ eventType: t, handler: i, targetNodes: e }), e.forEach((n) => n.addEventListener(t, i, V ? {
          passive: !0
        } : void 0));
      },
      $_registerTriggerListeners(e, t, i, n, o) {
        let s = i;
        n != null && (s = typeof n == "function" ? n(s) : n), s.forEach((r) => {
          const a = t[r];
          a && this.$_registerEventListeners(e, a, o);
        });
      },
      $_removeEventListeners(e) {
        const t = [];
        this.$_events.forEach((i) => {
          const { eventType: n, handler: o, targetNodes: s } = i;
          !e || e === n ? s.forEach((r) => r.removeEventListener(n, o)) : t.push(i);
        }), this.$_events = t;
      },
      $_scheduleHide(e, t = !1) {
        if (this.shownChildren.size > 0) {
          this.pendingHide = !0;
          return;
        }
        this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (C = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
      },
      $_scheduleShow(e, t = !1) {
        if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), C && this.instantMove && C.instantMove && C !== this.parentPopper) {
          C.$_applyHide(!0), this.$_applyShow(!0);
          return;
        }
        t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
      },
      $_swapTargetAttrs(e, t) {
        for (const i of this.$_targetNodes) {
          const n = i.getAttribute(e);
          n && (i.removeAttribute(e), i.setAttribute(t, n));
        }
      },
      $_updateParentShownChildren(e) {
        let t = this.parentPopper;
        for (; t; )
          e ? t.shownChildren.add(this.randomId) : (t.shownChildren.delete(this.randomId), t.pendingHide && t.hide()), t = t.parentPopper;
      },
      dispose() {
        this.isDisposed || (this.isDisposed = !0, this.$_removeEventListeners(), this.hide({ skipDelay: !0 }), this.$_detachPopperNode(), this.isMounted = !1, this.isShown = !1, this.$_updateParentShownChildren(!1), this.$_swapTargetAttrs("data-original-title", "title"));
      },
      hide({ event: e = null, skipDelay: t = !1 } = {}) {
        var i;
        if (!this.$_hideInProgress) {
          if (this.shownChildren.size > 0) {
            this.pendingHide = !0;
            return;
          }
          if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
            this.parentPopper && (this.parentPopper.lockedChild = this, clearTimeout(this.parentPopper.lockedChildTimer), this.parentPopper.lockedChildTimer = setTimeout(() => {
              this.parentPopper.lockedChild === this && (this.parentPopper.lockedChild.hide({ skipDelay: t }), this.parentPopper.lockedChild = null);
            }, 1e3));
            return;
          }
          ((i = this.parentPopper) == null ? void 0 : i.lockedChild) === this && (this.parentPopper.lockedChild = null), this.pendingHide = !1, this.$_scheduleHide(e, t), this.$emit("hide"), this.$emit("update:shown", !1);
        }
      },
      init() {
        var e;
        this.isDisposed && (this.isDisposed = !1, this.isMounted = !1, this.$_events = [], this.$_preventShow = !1, this.$_referenceNode = ((e = this.referenceNode) == null ? void 0 : e.call(this)) ?? this.$el, this.$_targetNodes = this.targetNodes().filter((t) => t.nodeType === t.ELEMENT_NODE), this.$_popperNode = this.popperNode(), this.$_innerNode = this.$_popperNode.querySelector(".v-popper__inner"), this.$_arrowNode = this.$_popperNode.querySelector(".v-popper__arrow-container"), this.$_swapTargetAttrs("title", "data-original-title"), this.$_detachPopperNode(), this.triggers.length && this.$_addEventListeners(), this.shown && this.show());
      },
      async onResize() {
        this.isShown && (await this.$_computePosition(), this.$emit("resize"));
      },
      show({ event: e = null, force: t = !1, skipDelay: i = !1 } = {}) {
        var n, o;
        (n = this.parentPopper) != null && n.lockedChild && this.parentPopper.lockedChild !== this || (this.pendingHide = !1, (t || !this.disabled) && (((o = this.parentPopper) == null ? void 0 : o.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(e, i), this.$emit("show"), this.$_showFrameLocked = !0, requestAnimationFrame(() => {
          this.$_showFrameLocked = !1;
        })), this.$emit("update:shown", !0));
      }
    },
    mounted() {
      this.init(), this.$_detachPopperNode();
    },
    name: "VPopper",
    props: {
      ariaId: {
        default: null
      },
      arrowOverflow: {
        default: l("arrowOverflow"),
        type: Boolean
      },
      arrowPadding: {
        default: l("arrowPadding"),
        type: [Number, String]
      },
      autoBoundaryMaxSize: {
        default: l("autoBoundaryMaxSize"),
        type: Boolean
      },
      autoHide: {
        default: l("autoHide"),
        type: [Boolean, Function]
      },
      /**
       * @deprecated
       */
      autoMaxSize: {
        default: l("autoMaxSize"),
        type: Boolean
      },
      /**
       * @deprecated
       */
      autoMinSize: {
        default: l("autoMinSize"),
        type: Boolean
      },
      autoSize: {
        default: l("autoSize"),
        type: [Boolean, String]
      },
      boundary: {
        default: l("boundary"),
        type: [String, we]
      },
      computeTransformOrigin: {
        default: l("computeTransformOrigin"),
        type: Boolean
      },
      container: {
        default: l("container"),
        type: [String, Object, we, Boolean]
      },
      delay: {
        default: l("delay"),
        type: [String, Number, Object]
      },
      disabled: {
        default: l("disabled"),
        type: Boolean
      },
      disposeTimeout: {
        default: l("disposeTimeout"),
        type: Number
      },
      distance: {
        default: l("distance"),
        type: [Number, String]
      },
      eagerMount: {
        default: l("eagerMount"),
        type: Boolean
      },
      flip: {
        default: l("flip"),
        type: Boolean
      },
      handleResize: {
        default: l("handleResize"),
        type: Boolean
      },
      hideTriggers: {
        default: l("hideTriggers"),
        type: [Array, Function]
      },
      instantMove: {
        default: l("instantMove"),
        type: Boolean
      },
      noAutoFocus: {
        default: l("noAutoFocus"),
        type: Boolean
      },
      overflowPadding: {
        default: l("overflowPadding"),
        type: [Number, String]
      },
      placement: {
        default: l("placement"),
        type: String,
        validator: (e) => nt.includes(e)
      },
      popperClass: {
        default: l("popperClass"),
        type: [String, Array, Object]
      },
      popperHideTriggers: {
        default: l("popperHideTriggers"),
        type: [Array, Function]
      },
      popperNode: {
        required: !0,
        type: Function
      },
      popperShowTriggers: {
        default: l("popperShowTriggers"),
        type: [Array, Function]
      },
      popperTriggers: {
        default: l("popperTriggers"),
        type: Array
      },
      positioningDisabled: {
        default: l("positioningDisabled"),
        type: Boolean
      },
      preventOverflow: {
        default: l("preventOverflow"),
        type: Boolean
      },
      referenceNode: {
        default: null,
        type: Function
      },
      shift: {
        default: l("shift"),
        type: Boolean
      },
      shiftCrossAxis: {
        default: l("shiftCrossAxis"),
        type: Boolean
      },
      showGroup: {
        default: null,
        type: String
      },
      shown: {
        default: !1,
        type: Boolean
      },
      showTriggers: {
        default: l("showTriggers"),
        type: [Array, Function]
      },
      skidding: {
        default: l("skidding"),
        type: [Number, String]
      },
      strategy: {
        default: l("strategy"),
        type: String,
        validator: (e) => ["absolute", "fixed"].includes(e)
      },
      targetNodes: {
        required: !0,
        type: Function
      },
      theme: {
        required: !0,
        type: String
      },
      triggers: {
        default: l("triggers"),
        type: Array
      }
    },
    provide() {
      return {
        [pe]: {
          parentPopper: this
        }
      };
    },
    render() {
      return this.$slots.default(this.slotData);
    },
    watch: {
      async container() {
        this.isShown && (this.$_ensureTeleport(), await this.$_computePosition());
      },
      disabled(e) {
        e ? this.dispose() : this.init();
      },
      positioningDisabled: "$_refreshListeners",
      shown: "$_autoShowHide",
      triggers: {
        deep: !0,
        handler: "$_refreshListeners"
      },
      ...[
        "placement",
        "distance",
        "skidding",
        "boundary",
        "strategy",
        "overflowPadding",
        "arrowPadding",
        "preventOverflow",
        "shift",
        "shiftCrossAxis",
        "flip"
      ].reduce((e, t) => (e[t] = "$_computePosition", e), {})
    }
  });
}
if (typeof document < "u" && typeof window < "u") {
  if (ot) {
    const e = V ? {
      capture: !0,
      passive: !0
    } : !0;
    document.addEventListener("touchstart", (t) => Ge(t), e), document.addEventListener("touchend", (t) => qe(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => Ge(e), !0), window.addEventListener("click", (e) => qe(e, !1), !0);
  window.addEventListener("resize", ui);
}
function Ge(e, t) {
  for (let i = 0; i < _.length; i++) {
    const n = _[i];
    try {
      n.mouseDownContains = n.popperNode().contains(e.target);
    } catch {
    }
  }
}
function qe(e, t) {
  li(e, t);
}
function li(e, t) {
  const i = {};
  for (let n = _.length - 1; n >= 0; n--) {
    const o = _[n];
    try {
      const s = o.containsGlobalTarget = o.mouseDownContains || o.popperNode().contains(e.target);
      o.pendingHide = !1, requestAnimationFrame(() => {
        if (o.pendingHide = !1, !i[o.randomId] && Ke(o, s, e)) {
          if (o.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && s) {
            let a = o.parentPopper;
            for (; a; )
              i[a.randomId] = !0, a = a.parentPopper;
            return;
          }
          let r = o.parentPopper;
          for (; r && Ke(r, r.containsGlobalTarget, e); ) {
            r.$_handleGlobalClose(e, t);
            r = r.parentPopper;
          }
        }
      });
    } catch {
    }
  }
}
function Ke(e, t, i) {
  return i.closeAllPopover || i.closePopover && t || pi(e, i) && !t;
}
function pi(e, t) {
  if (typeof e.autoHide == "function") {
    const i = e.autoHide(t);
    return e.lastAutoHide = i, i;
  }
  return e.autoHide;
}
function ui() {
  for (let e = 0; e < _.length; e++)
    _[e].$_computePosition();
}
let b = 0, T = 0, D = 0, F = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  b = D, T = F, D = e.clientX, F = e.clientY;
}, V ? {
  passive: !0
} : void 0);
function G(e, t, i, n, o, s, r, a) {
  const d = ((r - o) * (t - s) - (a - s) * (e - o)) / ((a - s) * (i - e) - (r - o) * (n - t)), u = ((i - e) * (t - s) - (n - t) * (e - o)) / ((a - s) * (i - e) - (r - o) * (n - t));
  return d >= 0 && d <= 1 && u >= 0 && u <= 1;
}
function hi() {
  var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
  if (t > 0)
    return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var i = e.indexOf("Trident/");
  if (i > 0) {
    var n = e.indexOf("rv:");
    return parseInt(e.substring(n + 3, e.indexOf(".", n)), 10);
  }
  var o = e.indexOf("Edge/");
  return o > 0 ? parseInt(e.substring(o + 5, e.indexOf(".", o)), 10) : -1;
}
var Z;
function ye() {
  ye.init || (ye.init = !0, Z = hi() !== -1);
}
var ci = {
  name: "ResizeObserver",
  props: {
    emitOnMount: {
      type: Boolean,
      default: !1
    },
    ignoreWidth: {
      type: Boolean,
      default: !1
    },
    ignoreHeight: {
      type: Boolean,
      default: !1
    }
  },
  mounted: function() {
    var t = this;
    ye(), this.$nextTick(function() {
      t._w = t.$el.offsetWidth, t._h = t.$el.offsetHeight, t.emitOnMount && t.emitSize();
    });
    var i = document.createElement("object");
    this._resizeObject = i, i.setAttribute("aria-hidden", "true"), i.setAttribute("tabindex", -1), i.onload = this.addResizeHandlers, i.type = "text/html", Z && this.$el.appendChild(i), i.data = "about:blank", Z || this.$el.appendChild(i);
  },
  beforeDestroy: function() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify: function() {
      (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitSize());
    },
    emitSize: function() {
      this.$emit("notify", {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers: function() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
    },
    removeResizeHandlers: function() {
      this._resizeObject && this._resizeObject.onload && (!Z && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
function fi(e, t, i, n, o, s, r, a, d, u) {
  typeof r != "boolean" && (d = a, a = r, r = !1);
  var p = typeof i == "function" ? i.options : i;
  e && e.render && (p.render = e.render, p.staticRenderFns = e.staticRenderFns, p._compiled = !0, o && (p.functional = !0)), n && (p._scopeId = n);
  var h;
  if (s ? (h = function(c) {
    c = c || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !c && typeof __VUE_SSR_CONTEXT__ < "u" && (c = __VUE_SSR_CONTEXT__), t && t.call(this, d(c)), c && c._registeredComponents && c._registeredComponents.add(s);
  }, p._ssrRegister = h) : t && (h = r ? function(g) {
    t.call(this, u(g, this.$root.$options.shadowRoot));
  } : function(g) {
    t.call(this, a(g));
  }), h)
    if (p.functional) {
      var w = p.render;
      p.render = function(c, v) {
        return h.call(v), w(c, v);
      };
    } else {
      var y = p.beforeCreate;
      p.beforeCreate = y ? [].concat(y, h) : [h];
    }
  return i;
}
var mi = ci, st = function() {
  var t = this, i = t.$createElement, n = t._self._c || i;
  return n("div", {
    staticClass: "resize-observer",
    attrs: {
      tabindex: "-1"
    }
  });
}, vi = [];
st._withStripped = !0;
var gi = void 0, wi = "data-v-8859cc6c", yi = void 0, _i = !1, _e = /* @__PURE__ */ fi({
  render: st,
  staticRenderFns: vi
}, gi, mi, wi, _i, yi, !1, void 0, void 0, void 0);
function $i(e) {
  e.component("resize-observer", _e), e.component("ResizeObserver", _e);
}
var bi = {
  // eslint-disable-next-line no-undef
  version: "1.0.1",
  install: $i
}, te = null;
typeof window < "u" ? te = window.Vue : typeof global < "u" && (te = global.Vue);
te && te.use(bi);
const Ti = (e = "theme") => ({
  computed: {
    themeClass() {
      return ai(this[e]);
    }
  }
}), Ei = $e({
  name: "VPopperContent",
  components: {
    ResizeObserver: _e
  },
  mixins: [
    Ti()
  ],
  props: {
    popperId: String,
    theme: String,
    shown: Boolean,
    mounted: Boolean,
    skipTransition: Boolean,
    autoHide: Boolean,
    handleResize: Boolean,
    classes: Object,
    result: Object
  },
  emits: [
    "hide",
    "resize"
  ],
  methods: {
    toPx(e) {
      return e != null && !isNaN(e) ? `${e}px` : null;
    }
  }
});
const rt = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, o] of t)
    i[n] = o;
  return i;
}, at = (e) => (mt("data-v-dbcb13a9"), e = e(), vt(), e), Ci = ["id", "aria-hidden", "tabindex", "data-popper-placement"], Si = {
  ref: "inner",
  class: "v-popper__inner"
}, Li = /* @__PURE__ */ at(() => /* @__PURE__ */ L("div", { class: "v-popper__arrow-outer" }, null, -1)), Ni = /* @__PURE__ */ at(() => /* @__PURE__ */ L("div", { class: "v-popper__arrow-inner" }, null, -1)), ki = [
  Li,
  Ni
];
function Pi(e, t, i, n, o, s) {
  const r = he("ResizeObserver");
  return H(), ee("div", {
    id: e.popperId,
    ref: "popover",
    class: Ze(["v-popper__popper", [
      e.themeClass,
      e.classes.popperClass,
      {
        "v-popper__popper--shown": e.shown,
        "v-popper__popper--hidden": !e.shown,
        "v-popper__popper--show-from": e.classes.showFrom,
        "v-popper__popper--show-to": e.classes.showTo,
        "v-popper__popper--hide-from": e.classes.hideFrom,
        "v-popper__popper--hide-to": e.classes.hideTo,
        "v-popper__popper--skip-transition": e.skipTransition,
        "v-popper__popper--arrow-overflow": e.result && e.result.arrow.overflow,
        "v-popper__popper--no-positioning": !e.result
      }
    ]]),
    style: re(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = ht((a) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    L("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (a) => e.autoHide && e.$emit("hide"))
    }),
    L("div", {
      class: "v-popper__wrapper",
      style: re(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      L("div", Si, [
        e.mounted ? (H(), ee(ct, { key: 0 }, [
          L("div", null, [
            ft(e.$slots, "default", {}, void 0, !0)
          ]),
          e.handleResize ? (H(), et(r, {
            key: 0,
            onNotify: t[1] || (t[1] = (a) => e.$emit("resize", a))
          })) : Ee("", !0)
        ], 64)) : Ee("", !0)
      ], 512),
      L("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: re(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, ki, 4)
    ], 4)
  ], 46, Ci);
}
const Mi = /* @__PURE__ */ rt(Ei, [["render", Pi], ["__scopeId", "data-v-dbcb13a9"]]), Hi = {
  methods: {
    dispose(...e) {
      return this.$refs.popper.dispose(...e);
    },
    hide(...e) {
      return this.$refs.popper.hide(...e);
    },
    onResize(...e) {
      return this.$refs.popper.onResize(...e);
    },
    show(...e) {
      return this.$refs.popper.show(...e);
    }
  }
}, zi = $e({
  name: "VTooltipDirective",
  components: {
    Popper: di(),
    PopperContent: Mi
  },
  mixins: [
    Hi
  ],
  inheritAttrs: !1,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default: (e) => W(e.theme, "html")
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: (e) => W(e.theme, "loadingContent")
    },
    targetNodes: {
      type: Function,
      required: !0
    }
  },
  data() {
    return {
      asyncContent: null
    };
  },
  computed: {
    isContentAsync() {
      return typeof this.content == "function";
    },
    loading() {
      return this.isContentAsync && this.asyncContent == null;
    },
    finalContent() {
      return this.isContentAsync ? this.loading ? this.loadingContent : this.asyncContent : this.content;
    }
  },
  watch: {
    content: {
      handler() {
        this.fetchContent(!0);
      },
      immediate: !0
    },
    async finalContent() {
      await this.$nextTick(), this.$refs.popper.onResize();
    }
  },
  created() {
    this.$_fetchId = 0;
  },
  methods: {
    fetchContent(e) {
      if (typeof this.content == "function" && this.$_isShown && (e || !this.$_loading && this.asyncContent == null)) {
        this.asyncContent = null, this.$_loading = !0;
        const t = ++this.$_fetchId, i = this.content(this);
        i.then ? i.then((n) => this.onResult(t, n)) : this.onResult(t, i);
      }
    },
    onResult(e, t) {
      e === this.$_fetchId && (this.$_loading = !1, this.asyncContent = t);
    },
    onShow() {
      this.$_isShown = !0, this.fetchContent();
    },
    onHide() {
      this.$_isShown = !1;
    }
  }
}), xi = ["innerHTML"], Ai = ["textContent"];
function Oi(e, t, i, n, o, s) {
  const r = he("PopperContent"), a = he("Popper");
  return H(), et(a, gt({ ref: "popper" }, e.$attrs, {
    theme: e.theme,
    "target-nodes": e.targetNodes,
    "popper-node": () => e.$refs.popperContent.$el,
    onApplyShow: e.onShow,
    onApplyHide: e.onHide
  }), {
    default: Ce(({
      popperId: d,
      isShown: u,
      shouldMountContent: p,
      skipTransition: h,
      autoHide: w,
      hide: y,
      handleResize: g,
      onResize: c,
      classes: v,
      result: $
    }) => [
      wt(r, {
        ref: "popperContent",
        class: Ze({
          "v-popper--tooltip-loading": e.loading
        }),
        "popper-id": d,
        theme: e.theme,
        shown: u,
        mounted: p,
        "skip-transition": h,
        "auto-hide": w,
        "handle-resize": g,
        classes: v,
        result: $,
        onHide: y,
        onResize: c
      }, {
        default: Ce(() => [
          e.html ? (H(), ee("div", {
            key: 0,
            innerHTML: e.finalContent
          }, null, 8, xi)) : (H(), ee("div", {
            key: 1,
            textContent: yt(e.finalContent)
          }, null, 8, Ai))
        ]),
        _: 2
      }, 1032, ["class", "popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 1
  }, 16, ["theme", "target-nodes", "popper-node", "onApplyShow", "onApplyHide"]);
}
const Ii = /* @__PURE__ */ rt(zi, [["render", Oi]]), dt = "v-popper--has-tooltip";
function Ri(e, t) {
  let i = e.placement;
  if (!i && t)
    for (const n of nt)
      t[n] && (i = n);
  return i || (i = W(e.theme || "tooltip", "placement")), i;
}
function lt(e, t, i) {
  let n;
  const o = typeof t;
  return o === "string" ? n = { content: t } : t && o === "object" ? n = t : n = { content: !1 }, n.placement = Ri(n, i), n.targetNodes = () => [e], n.referenceNode = () => e, n;
}
let ue, j, Bi = 0;
function Di() {
  if (ue)
    return;
  j = ce([]), ue = _t({
    devtools: {
      hide: !0
    },
    name: "VTooltipDirectiveApp",
    render() {
      return this.directives.map((t) => $t(Ii, {
        ...t.options,
        key: t.id,
        shown: t.shown || t.options.shown
      }));
    },
    setup() {
      return {
        directives: j
      };
    }
  });
  const e = document.createElement("div");
  document.body.appendChild(e), ue.mount(e);
}
function Fi(e, t, i) {
  Di();
  const n = ce(lt(e, t, i)), o = ce(!1), s = {
    id: Bi++,
    options: n,
    shown: o
  };
  return j.value.push(s), e.classList && e.classList.add(dt), e.$_popper = {
    hide() {
      o.value = !1;
    },
    item: s,
    options: n,
    show() {
      o.value = !0;
    }
  };
}
function pt(e) {
  if (e.$_popper) {
    const t = j.value.indexOf(e.$_popper.item);
    t !== -1 && j.value.splice(t, 1), delete e.$_popper, delete e.$_popperOldShown, delete e.$_popperMountTarget;
  }
  e.classList && e.classList.remove(dt);
}
function Je(e, { modifiers: t, value: i }) {
  const n = lt(e, i, t);
  if (!n.content || W(n.theme || "tooltip", "disabled"))
    pt(e);
  else {
    let o;
    e.$_popper ? (o = e.$_popper, o.options.value = n) : o = Fi(e, i, t), typeof i.shown < "u" && i.shown !== e.$_popperOldShown && (e.$_popperOldShown = i.shown, i.shown ? o.show() : o.hide());
  }
}
const Wi = {
  beforeMount: Je,
  beforeUnmount(e) {
    pt(e);
  },
  updated: Je
}, Vi = (e, t, i, n) => {
  const o = document.createElement("canvas");
  t.appendChild(o), o.width = 200, o.height = 150, o.style.display = "none";
  const s = o.getContext("2d");
  s.rotate(-20 * Math.PI / 180), s.font = i || "16px Microsoft JhengHei", s.fillStyle = n || "rgba(180, 180, 180, 0.3)", s.textAlign = "left", s.textBaseline = "Middle", s.fillText(e, o.width / 10, o.height / 2), t.style.backgroundImage = `url(${o.toDataURL("image/png")})`;
}, ji = {
  mounted(e, t) {
    Vi(t.value.text, e, t.value.font, t.value.textColor);
  }
}, Qe = {
  backtop: kt,
  clickOutside: Pt,
  copy: Ht,
  debounce: xt,
  doubleClick: At,
  draggable: Ot,
  ellipsis: It,
  emoji: Rt,
  empty: Dt,
  flicker: Wt,
  focus: Vt,
  highlight: jt,
  hover: Ut,
  input: Xt,
  lazyImg: Kt,
  loading: Jt,
  longpress: Qt,
  money: Zt,
  onOnce: ei,
  permission: ti,
  resize: ii,
  ripple: me,
  slideIn: si,
  throttle: ri,
  tooltip: Wi,
  waterMarker: ji
}, Xi = {
  install(e) {
    Object.keys(Qe).forEach((t) => {
      e.directive(t, Qe[t]);
    });
  }
};
export {
  Xi as default
};
