# ☠v3-directives

![screenshot](https://cdn.jsdelivr.net/gh/ileostar/picx-images/local/5465730512d71722380d1ecd6d7db6ae.png)

☠Vue3 directives 自定义指令库: <a href="https://v3-directives.netlify.app/">📖 在线文档</a>

![Static Badge](https://img.shields.io/npm/v/@ileostar/v3-directives?color=409eff)
![Static Badge](https://img.shields.io/github/stars/ileostar/v3-directives?style=social)

## 🕹Usage

1. Install package （安装依赖）

```bash
npm install @ileostar/v3-directives --save
```

1. Registration Directive （注册指令）

```typescript
import VueDirectives from "@ileostar/v3-directives";
const app = createApp(App);
app.use(router).mount("#app");
app.use(VueDirectives);
```

## 🧩Directives

<table>
	<thead >
		<tr>
			<th>Directive</th>
			<th style="width: 80%">Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<a href="https://v3-directives.netlify.app/zh/directives/v-backtop.html">v-backtop</a>
			</td>
			<td>Add a return to top function for an element</td>
		</tr>
		<tr>
			<td>
				<a href="https://v3-directives.netlify.app/zh/directives/v-clickOutside.html">v-clickOutside</a>
			</td>
			<td>Event when clicking outside the element triggers</td>
		</tr>
		<tr>
			<td>
				<a href="https://v3-directives.netlify.app/zh/directives/v-copy.html">v-copy</a>
			</td>
			<td>Copy the passed value to the clipboard</td>
		</tr>
		<tr>
			<td>
				<a href="https://v3-directives.netlify.app/zh/directives/v-debounce.html">v-debounce</a>
			</td>
			<td>Anti-shaking function</td>
		</tr>
		<tr>
			<td>
				<a href="https://v3-directives.netlify.app/zh/directives/v-doubleClick.html">v-doubleClick</a>
			</td>
			<td>Trigger an event on double-click</td>
		</tr>
		<tr>
			<td>
				<a href="https://v3-directives.netlify.app/zh/directives/v-draggable.html">v-draggable</a>
			</td>
			<td>Makes elements draggable</td>
		</tr>
		<tr>
			<td>
				<a href="https://v3-directives.netlify.app/zh/directives/v-ellipsis.html">v-ellipsis</a>
			</td>
			<td>Omit excess text</td>
		</tr>
		<tr>
			<td>
				<a href="https://v3-directives.netlify.app/zh/directives/v-emoji.html">v-emoji</a>
			</td>
			<td>Prohibit emoji input</td>
		</tr>
		<tr>
			<td>
				<a href="https://v3-directives.netlify.app/zh/directives/v-empty.html">v-empty</a>
			</td>
			<td>Used to display empty status</td>
		</tr>
		<tr>
			<td>
				<a href="https://v3-directives.netlify.app/zh/directives/v-flicker.html">v-flicker</a>
			</td>
			<td>Element flicker</td>
		</tr>
		<tr>
			<td>
				<a href="https://v3-directives.netlify.app/zh/directives/v-focus.html">v-focus</a>
			</td>
			<td>Input box autofocus</td>
		</tr>
		<tr>
			<td>
				<a href="https://v3-directives.netlify.app/zh/directives/v-highlight.html">v-highlight</a>
			</td>
			<td>Text highlighting</td>
		</tr>
		<tr>
			<td>
				<a href="https://v3-directives.netlify.app/zh/directives/v-hover.html">v-hover</a>
			</td>
			<td>Triggers a callback after the element</td>
		</tr>
		<tr>
			<td>
				<a href="https://v3-directives.netlify.app/zh/directives/v-input.html">v-input</a>
			</td>
			<td>Input formatting</td>
		</tr>
		<tr>
			<td>
				<a href="https://v3-directives.netlify.app/zh/directives/v-lazyImg.html">v-lazyImg</a>
			</td>
			<td>Lazy image loading</td>
		</tr>
		<tr>
			<td>
				<a href="https://v3-directives.netlify.app/zh/directives/v-loading.html">v-loading</a>
			</td>
			<td>Add loading animation</td>
		</tr>
		<tr>
			<td>
				<a href="https://v3-directives.netlify.app/zh/directives/v-longpress.html">v-longpress</a>
			</td>
			<td>Trigger event when long pressing an element</td>
		</tr>
		<tr>
			<td>
				<a href="https://v3-directives.netlify.app/zh/directives/v-money.html">v-money</a>
			</td>
			<td>Format numbers into money format</td>
		</tr>
		<tr>
			<td>
				<a href="https://v3-directives.netlify.app/zh/directives/v-onOnce.html">v-onOnce</a>
			</td>
			<td>Only one callback is triggered</td>
		</tr>
		<tr>
			<td>
				<a href="https://v3-directives.netlify.app/zh/directives/v-permission.html">v-permission</a>
			</td>
			<td>Rapid realization of authentication</td>
		</tr>
		<tr>
			<td>
				<a href="https://v3-directives.netlify.app/zh/directives/v-resize.html">v-resize</a>
			</td>
			<td>Response to resize the element</td>
		</tr>
		<tr>
			<td>
				<a href="https://v3-directives.netlify.app/zh/directives/v-ripple.html">v-ripple</a>
			</td>
			<td>Add ripple dynamic effects to the clicked element</td>
		</tr>
		<tr>
			<td>
				<a href="https://v3-directives.netlify.app/zh/directives/v-slideIn.html">v-slideIn</a>
			</td>
			<td>Add entry animation</td>
		</tr>
		<tr>
			<td>
				<a href="https://v3-directives.netlify.app/zh/directives/v-throttle.html">v-throttle</a>
			</td>
			<td>Throttling function</td>
		</tr>
		<tr>
			<td>
				<a href="https://v3-directives.netlify.app/zh/directives/v-waterMarker.html">v-waterMarker</a>
			</td>
			<td>Add custom watermark</td>
		</tr>
	</tbody>
</table>

## 💖Contributors

Contributions are welcome, PR is welcome, More references [Participate in Open source](https://v3-directives.netlify.app/en/about/contribution.html)
