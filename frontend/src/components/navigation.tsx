import { Link } from '@mui/material';
import { type SyntheticEvent } from 'react';
import { NAV_LINKS } from '../constants';

interface NavigationProps {
  onClickLink: (e: SyntheticEvent) => void;
}

const Navigation = ({ onClickLink }: NavigationProps) => {
  const linkValues = Object.values(NAV_LINKS);
  const handleLinkClick = (event: SyntheticEvent) => {
    onClickLink(event);
  };

  return (
    <div className="sidenav">
      {linkValues.map((link, index) => {
        return (
          <Link key={index} href="#" onClick={handleLinkClick}>
            {link}
          </Link>
        );
      })}
    </div>
  );
};

export default Navigation;
