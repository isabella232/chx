# chx

A wrapper on top of JSX to make outputting text on a terminal
with [chalk](https://github.com/chalk/chalk) a HTML-like experience.

## How to use

<img src="https://cldup.com/RYJLRgVr7s.png" width="400" align="right" />

```jsx
/** @jsx chx */
import chx from 'chx';

console.log(<p>
  Welcome to the <b>future</b>.<br />
  What's your <cyan>name</cyan>?<br />
  Hope you enjoy your <bg color="yellow">time here</bg>.
  More at <u>https://github.com/zeit/chx</u>.<br />
  <red>H</red><yellow>a</yellow><blue>v</blue><green>e</green>{' '}
  <cyan>f</cyan><white>u</white><magenta>n</magenta><bgRed>!</bgRed>
</p>);
```

and make sure the babel transform [`react-jsx`](https://www.npmjs.com/package/babel-plugin-transform-react-jsx) is in place.

## Built ins

- All the colors, modifiers and bgColors from `chalk` are available as 
  tags. For example: `<bgRed>`, `<blue>` and `<italic`>
- The HTML shorthands are exposed when available:
  - `<b>` (bold)
  - `<i>` (italic)
  - `<u>` (underline)
  - `<strike>` (strikethrough)
- A special `<bg color>` element is available as a shorthand.
- `<br />` as an alternative for `{'\n'}`
- To wrap, we expose a few noop elements. Use whichever you like most:
  - `<p>`
  - `<chx>`
  - `<span>`

For more advanced terminal UI needs,
check out [react-blessed](https://github.com/Yomguithereal/react-blessed).
