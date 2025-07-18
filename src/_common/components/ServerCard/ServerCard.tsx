import { FC } from 'react';
import classNames from 'classnames';

import { RoutePath } from '../../constants';

import styles from './ServerCard.module.scss';

import { Link } from '@core/navigation';
import { Card, Row, Avatar, Icon, Tooltip } from '@core/uikit';
import { Image } from '@network/strapi';
import { DTO } from '@network/strapi';
import { getTranslations } from '@core/i18n';

interface ServerCardProps {
  className?: string;
  server: DTO.ServerCardFragment | null;
}

export const ServerCard: FC<ServerCardProps> = async ({
  className,
  server,
}) => {
  const t = await getTranslations();

  const slug = server?.Slug;
  const title = server?.Title;
  const description = server?.Description;
  const logo = server?.Logo?.url;
  const icon = server?.Category?.Icon;
  const owner = server?.GitHubOwner || '';
  const isOfficial = server?.IsOfficial;

  const avatar = (() => {
    if (logo) return <Image src={logo} alt={title} className={styles.logo} />;

    if (icon)
      return (
        <Icon.Svg
          size={20}
          icon={icon.iconData}
          width={icon.width}
          height={icon.height}
        />
      );

    return null;
  })();

  return (
    <Card
      as={Link}
      pathname={RoutePath.ServerDetails}
      params={{ slug }}
      className={classNames(styles.root, className)}
    >
      <Card.Body className="px-3 py-3">
        <Row className="gx-3 flex-nowrap">
          <Row.Col xs="auto">
            <Avatar>{avatar}</Avatar>
          </Row.Col>
          <Row.Col xs>
            <Card.Title className="mb-1">
              {title}
              {isOfficial && (
                <Tooltip content={t('forms.officialVendor')} className="ms-1">
                  <Icon.Bx
                    name="solid-badge-check"
                    className="text-primary"
                    size={18}
                  />
                </Tooltip>
              )}
            </Card.Title>
            <Card.Subtitle className="mb-1">
              {t('values.byOwner', { value: owner })}
            </Card.Subtitle>
            <Card.Text truncate={3}>{description}</Card.Text>
          </Row.Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
