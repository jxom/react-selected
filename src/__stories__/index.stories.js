import React from 'react';
import { storiesOf } from '@storybook/react';
import Buttons from 'rebul/Button/Buttons';
import Button from 'rebul/Button';
import 'bulma/css/bulma.css';

import Selected from '../index';

storiesOf('Selected', module)
  .add('basic (with buttons)', () => (
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
  ))
  .add('basic (without buttons)', () => (
    <Selected defaultSelectedKey="cat">
      {({ getElementSelectableProps, selectedKey }) => (
        <Buttons>
          <a className={`button ${selectedKey === 'dog' ? 'is-info' : ''}`} {...getElementSelectableProps('dog')}>
            Dog
          </a>
          <a className={`button ${selectedKey === 'cat' ? 'is-info' : ''}`} {...getElementSelectableProps('cat')}>
            Cat
          </a>
          <a className={`button ${selectedKey === 'mouse' ? 'is-info' : ''}`} {...getElementSelectableProps('mouse')}>
            Mouse
          </a>
        </Buttons>
      )}
    </Selected>
  ))
  .add('with onSelect handler', () => (
    <Selected defaultSelectedKey="cat" onSelect={({ key }) => alert(key)}>
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
  ))
  .add('with values', () => (
    <Selected
      defaultSelectedKey="cat"
      onSelect={({ key, value }) => alert(`key: ${key}, value: ${JSON.stringify(value)}`)}
    >
      {({ getSelectableProps, selectedKey }) => (
        <Buttons>
          <Button color={selectedKey === 'dog' ? 'info' : null} {...getSelectableProps('dog', { name: 'Brian' })}>
            Dog
          </Button>
          <Button color={selectedKey === 'cat' ? 'info' : null} {...getSelectableProps('cat', { name: 'Max' })}>
            Cat
          </Button>
          <Button color={selectedKey === 'mouse' ? 'info' : null} {...getSelectableProps('mouse', { name: 'Jake' })}>
            Mouse
          </Button>
        </Buttons>
      )}
    </Selected>
  ))
  .add('override default selectable props', () => (
    <Selected
      defaultSelectedKey="cat"
      onSelect={({ key, value }) => alert(`key: ${key}, value: ${JSON.stringify(value)}`)}
    >
      {({ getSelectableProps, selectedKey }) => (
        <Buttons>
          <Button
            color={selectedKey === 'dog' ? 'info' : null}
            {...getSelectableProps('dog', { name: 'Brian' }, { onClick: () => console.log('dog!') })}
          >
            Dog
          </Button>
          <Button
            color={selectedKey === 'cat' ? 'info' : null}
            {...getSelectableProps('cat', { name: 'Max' }, { onClick: () => console.log('dog!') })}
          >
            Cat
          </Button>
          <Button
            color={selectedKey === 'mouse' ? 'info' : null}
            {...getSelectableProps('mouse', { name: 'Jake' }, { onClick: () => console.log('dog!') })}
          >
            Mouse
          </Button>
        </Buttons>
      )}
    </Selected>
  ));
