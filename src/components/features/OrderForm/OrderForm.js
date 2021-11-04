import styles from './OrderForm.module.scss';
import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import {Row, Col} from 'react-flexbox-grid';

const OrderFrom = ({tripCost, options}) => (
    <Row>
        <Col xs={12}>
            <OrderSummary tripCost={tripCost} options={options} />
        </Col>
    </Row>
)

export default OrderFrom;