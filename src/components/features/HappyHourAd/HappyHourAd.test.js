import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';

const mockProps = {
    title: "title2",
    description: "Lorem",
}

beforeAll(() => {
    const utilsModule = jest.requireActual('../../../utils/formatTime.js');
    utilsModule.formatTime = jest.fn(seconds => seconds);
  });


describe('Component HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });

  it('should render heading and description', () => {
    const component = shallow(<HappyHourAd />);
    expect(component.exists('.title')).toEqual(true);
    expect(component.exists('.description')).toEqual(true);
  })

  it('correct render title and countdown', () => {

      const component = shallow(<HappyHourAd {...mockProps}/>)
      expect(component.find('.title').text()).toBe(mockProps.title);
  });
});

const trueDate = Date;

const mockDate = customDate => class extends Date {
    constructor(...args) {
        if(args.length){
            super(...args);
        } else {
            super(customDate);
        }
      return this;
    }
    static now(){
        return (new Date(customDate)).getTime();
    }
};
const checkDescriptionAtTime = (time, expectedDescription) => {
    it(`should show correct at ${time}`, () => {
        global.Date = mockDate(`2019-05-11T${time}.135Z`);
    
        const component = shallow(<HappyHourAd {...mockProps} />);
        const renderedTime = component.find('.description').text();
        expect(renderedTime).toEqual(expectedDescription);
    
        global.Date = trueDate;
      });
};

const checkDescriptionAfterTime = (time, delaySeconds, expectedDescription) => {
    it(`should show correct value ${delaySeconds} seconds after ${time}`, () => {
        jest.useFakeTimers();
        global.Date = mockDate(`2019-05-11T${time}.135Z`);
    
        const component = shallow(<HappyHourAd {...mockProps} />);
        const newTime = new Date();
        newTime.setSeconds(newTime.getSeconds() + delaySeconds);
        global.Date = mockDate(newTime.getTime());

        jest.advanceTimersByTime(delaySeconds * 1000);
        const renderedTime = component.find('.description').text();
        expect(renderedTime).toEqual(expectedDescription);
    
        global.Date = trueDate;
        jest.useRealTimers();
      });
};

describe('Component HappyHourAd with mocked Date', () => {
    checkDescriptionAtTime('11:57:58', '122');
    checkDescriptionAtTime('11:59:59', '1');
    checkDescriptionAtTime('13:00:00', 23 * 60 * 60 + '');
  });

  describe('Component HappyHourAd with mocked Date and delay', () => {
    checkDescriptionAfterTime('11:57:58', 2, '120');
    checkDescriptionAfterTime('11:59:58', 1, '1');
    checkDescriptionAfterTime('13:00:00', 60 * 60, 22 * 60 * 60 + '');
  });

  describe('Component HappyHourAd with mockDescription', () => {
    checkDescriptionAtTime('12:30:59', mockProps.description);
    checkDescriptionAtTime('12:10:59', mockProps.description);        
  })

  describe('Component HappyHourAd with mocked Date and delay- test start promo', () => {
    checkDescriptionAfterTime('11:57:58', 130, mockProps.description);
  })