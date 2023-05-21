import { fireEvent, render, screen } from '@testing-library/react';

import Button from './Button';
import { ButtonSize, ButtonVariant, ButtonVariants } from './types';

const variants: ButtonVariant[] = [
  ButtonVariants.PRIMARY,
  ButtonVariants.DANGER,
];
const sizeMap: {size: ButtonSize, height: string}[] = [
  { size: 'small', height: '32px'},
  { size: 'medium', height: '40px'},
  { size: 'large', height: '48px'},
];

describe('Button', () => {
  describe('Basic', () => {
    test('should render successfully', () => {
      render(<Button>Button</Button>);

      expect(screen.getByText('Button')).toBeInTheDocument();
    });
    test('should render successfully without text', () => {
      render(<Button />);

      expect(screen.getByRole('button')).toBeInTheDocument();
    });
    test('should call onClick', () => {
      const onClick = jest.fn();

      render(<Button onClick={onClick}>Button</Button>);
      fireEvent.click(screen.getByText('Button'));

      expect(onClick).toBeCalled();
    });
  });

  variants.forEach(variant => {
    describe(variant, () => {
      test('should render successfully', () => {
        render(<Button variant={variant}>Button</Button>);

        expect(screen.getByText('Button')).toBeInTheDocument();
      });
      test('should render successfully without text', () => {
        render(<Button variant={variant}/>);

        expect(screen.getByRole('button')).toBeInTheDocument();
      });
      test('should call onClick', () => {
        const onClick = jest.fn();

        render(<Button onClick={onClick} variant={variant}>Button</Button>);
        fireEvent.click(screen.getByText('Button'));

        expect(onClick).toBeCalled();
      });
      test.each(sizeMap)('size %s to have an height of %s', ({size, height}) => {
        render(<Button variant={variant} size={size}>Button</Button>);

        expect(screen.getByText('Button')).toHaveStyle({'height': height});
      })
    })
  })
});
