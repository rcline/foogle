import { connect } from 'react-redux';

import FormCard from './FormCard';

import {
  forms,
} from '../../store/actions';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    handleDeleteForm(id) {
      return dispatch(forms.deleteForm(id));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormCard);
