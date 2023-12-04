import "./style.scss";
const Navbar = () => {
  const navigations = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Courses",
      link: "#",
    },
    {
      name: "About",
      link: "#",
    },
    {
      name: "Blog",
      link: "#",
    },
  ];

  return (
    <nav>
      <a href="#" className="logo">
        Sound <span>DZign</span>
      </a>

      <ul>
        {navigations.map((nav, index) => (
          <li key={index}>
            <a href={nav.link}>{nav.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
