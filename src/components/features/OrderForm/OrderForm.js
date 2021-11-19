import styles from './OrderForm.module.scss';
import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import {Row, Col} from 'react-flexbox-grid';
import pricing from '../../../data/pricing.json';
import OrderOptions from '../Orderoption/OrderOptions';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import settings from '../../../data/settings';
import Button from '../../common/Button/Button';

const sendOrder = (options, tripCost, tripName, tripId, countryCode) => {

    if(options.name.length > 0 && options.contact.length > 0) {
    const totalCost = formatPrice(calculateTotal(tripCost, options));
  
    const payload = {
      ...options,
      totalCost,
      tripName,
      tripId,
      countryCode,
    };
  
    const url = settings.db.url + '/' + settings.db.endpoint.orders;
  
    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };
  
    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
      window.alert("Success!");
    }
    else{
        window.alert("Lack of name or contact");
    }
  };



const OrderFrom = ({tripCost, options, setOrderOption, tripName, tripId, countryCode}) => (
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
        <Button onClick={() => sendOrder(options, tripCost, tripName, tripId, countryCode)}>Order now!</Button>
    </Row>
)

export default OrderFrom;