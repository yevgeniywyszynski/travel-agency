import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('corect generated link', () => {
    const idValue = 'abc';
    const component = shallow(<TripSummary id={idValue} tags={[]} />);
    expect(component.find('.link').prop('to')).toEqual(`/trip/${idValue}`);
  })

  it('if img has correct src and alt', () => {
    const srcVaule = 'image.jpg';
    const altValue = 'name';
    const component = shallow(<TripSummary image={srcVaule} name={altValue} tags={[]} />);
    expect(component.find('img').prop('src')).toEqual(srcVaule);
    expect(component.find('img').prop('alt')).toEqual(altValue);
  })

  it('should correct render name, cost, days', () => {
    const titleValue = 'title.props';
    const costValue = '111,222.33';
    const daysValue = 3;
    const component = shallow(<TripSummary name={titleValue} cost={costValue} days={daysValue} tags={[]} />);
    expect(component.find('.title').text()).toEqual(titleValue);
    expect(component.find('.details > span + span').text()).toEqual(`from ${costValue}`);
    expect(component.find('.details > span:first-child').text()).toEqual(`${daysValue} days`);
  })

  it('generated tags', () => {
    const tagsValue = ['nike', 'puma', 'diadora'];
    const component = shallow(<TripSummary tags={tagsValue} />);
    for (let i=0; i<tagsValue.length; i++){
      expect(component.find('.tags > span').at(i).text()).toEqual(tagsValue[i]);
    }
  })

  it('generated div without tags', () => {
    const tagsValue =[];
    const component = shallow(<TripSummary tags={tagsValue} />);
    expect(component.exists('.tags')).toEqual(false);
  })
})