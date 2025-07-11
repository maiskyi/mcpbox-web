'use client';

import { FC, Fragment } from 'react';

import { Icon, Nav } from '@core/uikit';
import { Link, useRoute } from '@core/navigation';
import { RoutePath } from '@common/constants';
import { useTranslations } from '@core/i18n';

interface ServerTabsProps {
  slug: string;
}

export const ServerTabs: FC<ServerTabsProps> = ({ slug }) => {
  const t = useTranslations();
  const [{ segment }] = useRoute();

  return (
    <Fragment>
      <Nav
        variant="tabs"
        className="mt-4 border-top nav-tabs-custom card-header-tabs"
      >
        <Nav.Item>
          <Nav.Link
            as={Link}
            pathname={RoutePath.ServerDetails}
            params={{ slug }}
            value={RoutePath.ServerDetails}
            active={!segment}
            className="d-flex"
          >
            <Icon.Bx name="info-circle" size={20} className="me-2" />
            {t('nav.overview')}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={Link}
            pathname={RoutePath.ServerDetailsTools}
            params={{ slug }}
            value={RoutePath.ServerDetailsTools}
            active={segment === 'tools'}
            className="d-flex"
          >
            <Icon.Bx name="cog" size={20} className="me-2" />
            {t('nav.tools')}
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Fragment>
  );
};
