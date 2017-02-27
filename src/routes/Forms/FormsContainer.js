import { connect } from 'react-redux';

import Forms from './Forms';

function mapStateToProps(state) {
  const { forms } = state;
  return {
    forms,
  };
}

export default connect(
  mapStateToProps,
)(Forms);
