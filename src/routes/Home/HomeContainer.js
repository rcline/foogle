import { connect } from 'react-redux';

import Home from './Home';

function mapStateToProps(state) {
  const { forms } = state;
  return {
    forms,
  };
}

export default connect(
  mapStateToProps,
)(Home);
