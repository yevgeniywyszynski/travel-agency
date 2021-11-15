import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
    it('Is link address generated properly', () => {
      const component = shallow(<TripSummary id='abc' tags={[]} />);
      expect(component).toBeTruthy();
      expect(component.find('.link').prop('to')).toEqual('/trip/abc');
    });

    it('if img has correct src and alt', () => {
        const component = shallow(<TripSummary id='abc' name='name' image='image.jpg' tags={[]} />);
        expect(component.find('img').prop('src')).toEqual('image.jpg');
        expect(component.find('img').prop('alt')).toEqual('name');
    });

    it('if correct render props name, cost, days', () => {
      const daysValue = 5;
      const titleValue = 'My title'
      const costValue = '122,283.66'
      const component = shallow(<TripSummary name={titleValue} cost={costValue} days={daysValue} tags={[]} /> );
      expect(component.find('.title').text()).toEqual(titleValue)
      expect(component.find('.details > span + span').text()).toEqual(`from ${costValue}`)
      expect(component.find('.details > span:first-child').text()).toEqual(`${daysValue} days`)
    })

    it('generated tags', () => {
      const tagsValue = ['nike', 'puma', 'diadora'];
      const component = shallow(<TripSummary tags={tagsValue} />);
      for (let i=0; i<tagsValue.length; i++){
        expect(component.find('.tags > span').at(i).text()).toEqual(tagsValue[i]);
      }
    })


    it('generated tags without tags', () => {
      const tagsValue = [];
      const component = shallow(<TripSummary tags={tagsValue} />);
      expect(component.exists('.tags')).toEqual(false);
    })

});