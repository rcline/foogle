import { connect } from 'react-redux';

import Form from './Form';

import {
  responses,
} from '../../store/actions';

function mapStateToProps(state) {
  const { forms, questions } = state;
  return {
    forms,
    questions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleAddResponse(response) {
      return dispatch(responses.addResponse(response));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
