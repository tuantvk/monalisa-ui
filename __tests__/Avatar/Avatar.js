import React from 'react';
import { Avatar } from '../../src/components/Avatar';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Avatar Componnent', () => {

  it('should render without issues', () => {
    const component = shallow(
      <Avatar
        source={{ uri: 'https://picsum.photos/id/434/200/200' }}
      />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should pass circle props should still work', () => {
    const component = shallow(
      <Avatar
        circle
        source={{ uri: 'https://picsum.photos/id/434/200/200' }}
      />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should pass circle props should still work', () => {
    const component = shallow(
      <Avatar
        rounded
        source={{ uri: 'https://picsum.photos/id/434/200/200' }}
      />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should pass style props should still work', () => {
    const component = shallow(
      <Avatar
        rounded
        style={{ width: 100, height: 100 }}
        source={{ uri: 'https://picsum.photos/id/434/200/200' }}
      />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });


});