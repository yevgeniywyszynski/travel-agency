import { shallow } from "enzyme";
import React from 'react';
import DaysToSummer from './DaysToSummer';

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

describe('Component DaysToSummaer', () => {
    it('create commponent', () => {
        const component = shallow(<DaysToSummer />);
        expect(component).toBeTruthy();
    })

    it('check summer days if there is already summer', () => {
        global.Date = mockDate(`2019-07-11T11:22:23.135Z`);
    
        const component = shallow(<DaysToSummer />);
        const renderedTime = component.find('.title').text();
        expect(renderedTime).toEqual('');
    
        global.Date = trueDate;
      });

    it('check summer days in 1st Dec', () => {
        global.Date = mockDate(`2019-12-01T11:22:23.135Z`);
    
        const component = shallow(<DaysToSummer />);
        const renderedTime = component.find('.title').text();
        expect(renderedTime).toEqual('202 days to summer');
    
        global.Date = trueDate;
      });

      it('check summer days in 2nd Dec', () => {
        global.Date = mockDate(`2019-12-02T11:22:23.135Z`);
    
        const component = shallow(<DaysToSummer />);
        const renderedTime = component.find('.title').text();
        expect(renderedTime).toEqual('201 days to summer');
    
        global.Date = trueDate;
      });

      it('check summer days in 3rd Dec', () => {
        global.Date = mockDate(`2019-12-03T11:22:23.135Z`);
    
        const component = shallow(<DaysToSummer />);
        const renderedTime = component.find('.title').text();
        expect(renderedTime).toEqual('200 days to summer');
    
        global.Date = trueDate;
      });
});