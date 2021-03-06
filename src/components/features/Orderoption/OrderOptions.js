import React from 'react';
import styles from './OrderOption.module.scss';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionIcons from './OrderOptionIcons';
import OrderOptionNumber from './OrderOptionNumber';
import OrderOptionCheckboxes from './OrderOptionCheckboxes';
import OrderOptionText from './OrderOptionText';
import OrderOptionDate from './OrderOptionDate';
import PropTypes from 'prop-types';

const optionTypes = {
    dropdown: OrderOptionDropdown,
    icons: OrderOptionIcons,
    checkboxes: OrderOptionCheckboxes,
    number: OrderOptionNumber,
    text: OrderOptionText,
    date: OrderOptionDate,
  };

const OrderOptions = ({name, type, id, setOrderOption, ...otherProps}) => {
  const OptionComponent = optionTypes[type];
  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
        setOptionValue={value => setOrderOption({[id]: value})}
          {...otherProps}
        />
      </div>
    );
  }
};

OrderOptions.propTypes = {
  id: PropTypes.node,
  name: PropTypes.string,
  type: PropTypes.string,
  setOrderOption: PropTypes.func,
};

export default OrderOptions;