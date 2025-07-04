import { ButtonHTMLAttributes, FC } from 'react';

import { Icon } from '../Icon';

export interface SearchbarProps {
  name?: string;
  placeholder?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

export const Searchbar: FC<SearchbarProps> = ({
  name,
  type = 'button',
  placeholder,
}) => {
  return (
    <div className="position-relative">
      <input
        type="text"
        name={name}
        className="form-control"
        placeholder={placeholder}
      />
      <button className="btn btn-primary" type={type}>
        <Icon.Fa name="magnifying-glass" size={16} />
      </button>
    </div>
  );
};
