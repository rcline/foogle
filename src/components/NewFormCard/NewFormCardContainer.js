import { connect } from 'react-redux';

import NewFormCard from './NewFormCard';

import {
  forms,
} from '../../store/actions';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    handleAddForm() {
      return dispatch(forms.addForm({
        name: 'Untitled',
        description: 'description...',
      }));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewFormCard);
