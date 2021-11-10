import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Collapse(props) {
  const { collapsedLabel, expandedLabel, isExpanded } = props;

  const [collapse, setCollapse] = useState(isExpanded);

  const handleCollapse = () => {
    setCollapse(prev => !prev);
  }

  const style = { visibility: 'visible', maxHeight: '500px' };


  return (
    <div className="Collapse">
      <div
        className="Collapse__container"
        style={collapse ? style : null}
      >
        {props.children}
      </div>
      <a className="Collapse__link" href="#collapse" onClick={handleCollapse}>
        {collapse ? expandedLabel : collapsedLabel}
      </a>
    </div>
  );
}

Collapse.propTypes = {
  collapsedLabel: PropTypes.string,
  expandedLabel: PropTypes.string,
  isExpanded: PropTypes.bool,
}

Collapse.defaultProps = {
  collapsedLabel: 'Развернуть',
  expandedLabel: 'Свернуть',
  isExpanded: true,
};