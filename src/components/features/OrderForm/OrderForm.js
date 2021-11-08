import styles from './OrderForm.module.scss';
import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import {Row, Col} from 'react-flexbox-grid';
import pricing from '../../../data/pricing.json';
import OrderOptions from '../Orderoption/OrderOptions';

const OrderFrom = ({tripCost, options, setOrderOption}) => (
    <Row>
        {pricing.map(priceData => (
            <Col key={priceData.id} md={4}>
                <OrderOptions setOrderOption={setOrderOption} currentValue={options[priceData.id]} {...priceData}/>
            </Col>
        )
        )}
        <Col xs={12}>
            <OrderSummary tripCost={tripCost} options={options} />
        </Col>
    </Row>
)

export default OrderFrom;