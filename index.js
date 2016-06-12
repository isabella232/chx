import chalk from 'chalk';

class Element {
  constructor (name, props, children) {
    this.tag = name;
    this.props = props;
    this.children = children;
  }

  render () {
    const children = this.children.map((c) => c.toString());
    const { tag } = this;
    const text = children.join('');
    return tag ? chalk[tag](text) : text;
  }

  inspect () {
    return this.render();
  }

  toString () {
    return this.render();
  }
}

export default function create (name, props, ...children) {
  let tag;

  if ('br' === name) {
    children = ['\n'];
    tag = '';
  } else if ('bg' === name) {
    if (!props.color) {
      throw new TypeError('`<bg>` must supply a `color` attribute');
    }
    tag = 'bg' +
      props.color[0].toUpperCase() +
      props.color.substr(1).toLowerCase(), props, children;
  } else {
    tag = map.get(name);
    if (null == tag) {
      throw new TypeError(`Unknown chalk modifier \`${tag}\``);
    }
  }

  return new Element(tag, props, children);
}

const map = new Map([
  ['chx', ''],
  ['p', ''],
  ['span', ''],
  ['b', 'bold'],
  ['bold', 'bold'],
  ['i', 'italic'],
  ['italic', 'italic'],
  ['dim', 'dim'],
  ['u', 'underline'],
  ['underline', 'underline'], /* chalk name*/
  ['inverse', 'inverse'],
  ['hidden', 'hidden'],
  ['strike', 'strikethrough'],
  ['strikethrough', 'strikethrough'], /* chalk name*/
  ['reset', 'reset'],
  ['black', 'black'],
  ['red', 'red'],
  ['green', 'green'],
  ['yellow', 'yellow'],
  ['blue', 'blue'],
  ['magenta', 'magenta'],
  ['cyan', 'cyan'],
  ['white', 'white'],
  ['gray', 'gray'],
  ['bgBlack', 'bgBlack'],
  ['bgRed', 'bgRed'],
  ['bgGreen', 'bgGreen'],
  ['bgYellow', 'bgYellow'],
  ['bgBlue', 'bgBlue'],
  ['bgMagenta', 'bgMagenta'],
  ['bgCyan', 'bgCyan'],
  ['bgWhite', 'bgWhite']
]);
