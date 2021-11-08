import {connect} from 'react-redux';
import { getOrderOptions, setOrderOption } from '../../../redux/orderRedux';
import OrderForm from './OrderForm';

const mapStateToProps = (state, props) => ({
    options: getOrderOptions(state),
});

const mapDispatchToProps = dispatch => ({
    setOrderOption: option => dispatch(setOrderOption(option)),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);