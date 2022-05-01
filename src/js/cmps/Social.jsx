import { Link } from 'react-router-dom';

import { ReactComponent as LinkedIn } from '../../assets/img/social/linkedin.svg';
import { ReactComponent as Facebook } from '../../assets/img/social/facebook.svg';
import { ReactComponent as Github } from '../../assets/img/social/github.svg';

export const Social = () => {
  const socials = [
    {
      title: 'linkedin',
      path: 'https://www.linkedin.com/in/on-chetrit/',
    },
    { title: 'github', path: 'https://github.com/OnChetrit' },
    {
      title: 'facebook',
      path: 'https://www.facebook.com/onchetrit/',
    },
  ];

  const renderSvg = (network) => {
    switch (network) {
      case 'linkedin':
        return <LinkedIn />;
      case 'github':
        return <Github />;
      case 'facebook':
        return <Facebook />;
      default:
    }
  };
  return (
    <div className="links flex auto-center">
      {socials.map(({ path, title }) => {
        return (
          <Link
            to={{ pathname: path }}
            key={title}
            className="ul"
            target="_blank"
          >
            {renderSvg(title)}
          </Link>
        );
      })}
    </div>
  );
};
