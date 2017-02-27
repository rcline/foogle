import { connect } from 'react-redux';

import Responses from './Responses';

function mapStateToProps(state) {
  const { responses } = state;
  return {
    responses,
  };
}

export default connect(
  mapStateToProps,
)(Responses);
