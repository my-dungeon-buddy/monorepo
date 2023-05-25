import { render, screen } from '@testing-library/react';
import { getAliasColorValue } from '../../tokens/colors';
import React from 'react';

import { Heading, Text } from '.';

describe('Text', () => {
  it('should render correctly without size', () => {
    const content = 'Foo';

    render(<Text>{content}</Text>);

    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it('should render correctly truncated', () => {
    const content = 'Very long text that should be truncated';

    render(<Text truncate>{content}</Text>);

    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it('should render correctly with wrong type', () => {
    const content = 'Foo';

    render(<Text type="wrong">{content}</Text>);

    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it('should render correctly as heading', () => {
    const content = 'Foo';

    render(
      <Text as="h1" size="2xl" type="heading">
        {content}
      </Text>
    );

    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it('should render correctly as <Heading />', () => {
    const content = 'Foo';

    render(
      <Heading forwardedAs="h1" size="2xl">
        {content}
      </Heading>
    );

    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it('should render correctly as text', () => {
    const content = 'Foo';

    render(
      <Text modifier="bold" size="s" type="text">
        {content}
      </Text>
    );

    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it('should render correctly with color as ColorAlias', () => {
    const content = 'Foo';
    const color = 'primary-100';

    render(<Text color={color}>{content}</Text>);

    expect(screen.getByText(content)).toBeInTheDocument();
    expect(screen.getByText(content)).toHaveStyle({'color': getAliasColorValue(color)});
  });

  it('should render even if it matches no type / size / modifier / colors', () => {
    const content = 'Foo';

    render(
      // @ts-expect-error unknown properties values on purpose
      <Text color="unknown" modifier="baz" size="bar" type="foo">
        {content}
      </Text>
    );

    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it('should throw warnings for invalid typography aliases', () => {
    // Silence expect warn log
    const warn = jest.fn();
    jest.spyOn(console, 'warn').mockImplementation(warn);

    render(
      <Text size="2xl" type="text">
        Foo
      </Text>
    );

    expect(warn).toHaveBeenCalledWith(
      'Typography alias text-2xl does not exist'
    );
  });
});
