import React from 'react';
import PropTypes from 'prop-types';

const ELEMENT_SELECT_TRIGGER_KEYS = ['Enter', ' ']; // Mimics <button> behaviour.

export default class Selected extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    defaultSelectedKey: PropTypes.string,
    onSelect: PropTypes.func,
    selectedKey: PropTypes.string
  };

  static defaultProps = { defaultSelectedKey: null, onSelect: null, selectedKey: null };

  state = { selectedKey: this.props.selectedKey || this.props.defaultSelectedKey };

  componentDidUpdate = prevProps => {
    const { selectedKey } = this.props;
    if (prevProps.selectedKey !== selectedKey) {
      this.setState({ selectedKey });
    }
  };

  getElementSelectableProps = (key, value, props = {}) =>
    this.getSelectableProps(key, value, {
      ...props,
      'aria-pressed': this.state.selectedKey === key,
      onKeyUp: e => {
        props.onKeyUp && props.onKeyUp(e);
        ELEMENT_SELECT_TRIGGER_KEYS.includes(e.key) && this.select(key, value);
      },
      role: 'button',
      tabIndex: '0'
    });

  getSelectableProps = (key, value, props = {}) => ({
    ...props,
    'aria-current': this.state.selectedKey === key,
    onClick: e => {
      props.onClick && props.onClick(e);
      this.select(key, value);
    }
  });

  select = (key, value) => {
    const { onSelect } = this.props;
    this.setState({ selectedKey: key, selectedValue: value });
    onSelect && onSelect({ key, value });
  };

  render = () => {
    const { children } = this.props;
    const { selectedKey, selectedValue } = this.state;
    return (
      <div>
        {children({
          getElementSelectableProps: this.getElementSelectableProps,
          getSelectableProps: this.getSelectableProps,
          select: this.select,
          selectedKey,
          selectedValue
        })}
      </div>
    );
  };
}
