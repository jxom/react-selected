# React Selected

> WAI-ARIA compliant React component to build selectable buttons and elements.

Listen to [Belinda Carlisle - Summer Rain](https://www.youtube.com/watch?v=wssIZOBV9i4) while reading these docs - it will increase comprehensibility by 120%. [This](https://youtu.be/R_TcZ-ATihY?t=5m10s) will increase it by 420%.

<p align="center"><img src="./react-selected.png" width="400px"></img></p>

## Why should I use this?

React Selected has control over select logic and state meaning that you don't have to do much! It also has the ability to add WAI-ARIA compliant and other accessibility attributes to the selectable components.

## Install

`npm install react-selected`

## Example

```jsx
import Selected from 'react-selected';

<Selected defaultSelectedKey="cat">
  {({ getSelectableProps, selectedKey }) => (
    <Buttons>
      <Button color={selectedKey === 'dog' ? 'info' : null} {...getSelectableProps('dog')}>
        Dog
      </Button>
      <Button color={selectedKey === 'cat' ? 'info' : null} {...getSelectableProps('cat')}>
        Cat
      </Button>
      <Button color={selectedKey === 'mouse' ? 'info' : null} {...getSelectableProps('mouse')}>
        Mouse
      </Button>
    </Buttons>
  )}
</Selected>
```

### More examples

- [Storybook](https://jxom.github.io/react-selected/)
- [Storybook Stories](https://github.com/jxom/react-selected/blob/master/src/__stories__/index.stories.js)

## Props

### defaultSelectedKey

Type: `string`

The key of the component that should be selected by default.

### onSelect

Type: `function({ key, value })`

Function to invoke when a component is selected.

### selectedKey

Type: `string`

React Selected manages select logic and state internally, but if you wish to have your own, you can control the value of `selectedKey`.

### Render props

#### getSelectableProps

Type: `function(key, value, props)` **(`key` is required)**

Returns the props to apply to the button element you render. 
Includes `aria-` attributes.

#### getElementSelectableProps

Type: `function(key, value, props)` **(`key` is required)**

Returns the props to apply to the element you render. Use this for any element other than a <code>&lt;button&gt;</code>. 
Includes <code>aria-</code> attributes.

#### select

Type: `function(key, value)`

Sets `selectedKey` to `key` and sets `selectedValue` to `value`.

#### selectedKey

Type: `string`

The key of the current selected component.

#### selectedValue

Type: `string`

The value of the current selected component.

## Inspiration

- [Downshift](https://github.com/paypal/downshift)
- [React Toggled](https://github.com/kentcdodds/react-toggled)

## License

MIT © [jxom](http://jxom.io)
