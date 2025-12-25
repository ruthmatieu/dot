import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'delete';

// extend button native props
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: ButtonVariant;
};

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary: 'bg-blue-200 hover:bg-blue-300',
  secondary: 'bg-green-200',
  delete: 'bg-red-200',
};

// default variant and type if accidentally omitted
const Button = ({
  children,
  className,
  variant = 'primary',
  type = 'button',
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${VARIANT_STYLES[variant]} cursor-pointer rounded px-4 py-1 font-semibold ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
