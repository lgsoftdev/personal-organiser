const Navigation = () => {
  const NAV_LINKS = ['To Do', 'Link', 'Link'];

  return (
    <div className="sidenav">
      {NAV_LINKS.map((link, index) => {
        return (
          <a key={index} href="#">
            {link}
          </a>
        );
      })}
    </div>
  );
};

export default Navigation;
