import React from 'react';
import { ArticleCard } from '../../src/components/ArticleCard';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { render } from 'react-native-testing-library';

const datas = {
  img: 'http://lorempixel.com/640/480/abstract',
  title: 'Et saepe in aut voluptates illum eum laudantium ipsam similique.',
  category: 'Aut voluptatem dicta',
  author: 'Dr. Ida Marvin',
  time: '21 min ago',
};

describe('ArticleCard Componnent', () => {

  it('should render without issues', () => {
    const component = shallow(
      <ArticleCard
        {...datas}
      />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should pass img', () => {
    const component = shallow(
      <ArticleCard img='http://lorempixel.com/640/480/abstract' />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should pass title, category props should still work', () => {
    const { queryByText } = render(
      <ArticleCard title="foo" category="bar" />
    );
    expect(queryByText('foo')).not.toBeNull();
    expect(queryByText('bar')).not.toBeNull();
  });


});