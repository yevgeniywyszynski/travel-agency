import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('component TripSummary', () => {

  it('correct generated link', () => {
    const idValue = 'abc';

    const component = shallow(<TripSummary id={idValue} tags={[]} />)
    expect(component.find('.link').prop('to')).toEqual(`/trip/${idValue}`);
  });

  it('check correct src and alt for img', () => {
    const srcValue = 'image.jpg';
    const altValue = 'book';

    const component = shallow(<TripSummary image={srcValue} name={altValue} tags={[]} />);
    expect(component.find('img').prop('src')).toEqual(srcValue);
    expect(component.find('img').prop('alt')).toEqual(altValue);
  });

  it('correct generated props name, cost, days', () => {
    const titleValue = 'title';
    const cosValue = '222,333.11';
    const days = 4;

    const component = shallow(<TripSummary name={titleValue} cost={cosValue} days={days} tags={[]} />);
    expect(component.find('.title').text()).toEqual(titleValue);
    expect(component.find('.details > span + span').text()).toEqual(`from ${cosValue}`);
    expect(component.find('.details > span:first-child').text()).toEqual(`${days} days`);
  })

  it('generated tags', () => {
    const tagsValue = ['iphone', 'samsunf', 'nokia'];

    const component = shallow(<TripSummary tags={tagsValue} />);
    for(let i=0; i<tagsValue.length; i++){
      expect(component.find('.tags > span').at(i).text()).toEqual(tagsValue[i]);
    }
  })

  it('generated div without tags', () => {
    const tagsValue = [];

    const component = shallow(<TripSummary tags={tagsValue} />)
    expect(component.exists('.tags')).toEqual(false);
  })
})