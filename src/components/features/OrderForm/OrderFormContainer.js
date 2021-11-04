import {connect} from 'react-redux';
import { getOrderOptions } from '../../../redux/orderRedux';
import OrderForm from './OrderForm';

const mapStateToProps = (state, props) => ({
    options: getOrderOptions(state),
});

export default connect(mapStateToProps)(OrderForm);