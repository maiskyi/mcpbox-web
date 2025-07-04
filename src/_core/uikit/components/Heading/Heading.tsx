import { PropsWithChildren, ReactElement } from 'react';

import { HeadingTitle } from './HeadingTitle';
import { HeadingBreadcrumb } from './HeadingBreadcrumb';
import { base64Chevron } from './Heading.utils';

export type HeadingProps = PropsWithChildren;

interface HeadingComponent {
  (props: HeadingProps): ReactElement;
  Title: typeof HeadingTitle;
  Breadcrumb: typeof HeadingBreadcrumb;
}

export const Heading: HeadingComponent = ({ children }) => {
  return (
    <div className="row">
      <div
        className="col-12"
        style={
          {
            '--bs-breadcrumb-divider': `url("${base64Chevron}")`,
          } as React.CSSProperties
        }
      >
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
          {children}
        </div>
      </div>
    </div>
  );
};

Heading.Title = HeadingTitle;
Heading.Breadcrumb = HeadingBreadcrumb;
