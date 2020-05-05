import { connect } from 'react-redux';
import App from '../components/App';

const mapDispatchToProps = dispatch => ({
  init: () => {
    console.log('App rendering');
  },
});

const AppContainer = connect(
  null,
  mapDispatchToProps
)(App);

export default AppContainer;
