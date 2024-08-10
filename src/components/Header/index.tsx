const Header = () => {
  const navArray = [
    { id: "1", title: "Home", link: "#home" },
    { id: "2", title: "Info", link: "#info" },
    { id: "3", title: "Contacts", link: "#contacts" },
  ];

  return (
    <header className="h-[60px] bg-gray-800 text-white flex items-center">
      <div className="container mx-auto flex max-w-[1000px] justify-between items-center">
        <div className="text-xl font-bold">
          <a href="#home">Logo</a>
        </div>
        <nav>
          <ul className="flex space-x-10">
            {navArray.map((el) => (
              <li key={el.id}>
                <a href={el.link} className="relative text-white group">
                  {el.title}
                  <span className="absolute block h-[2px] bg-gray-400 left-0 bottom-0 w-0 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
