import Button from "../Button";

const Header = () => {
  const navArray = [
    { id: "1", title: "Home", link: "#home" },
    { id: "2", title: "Info", link: "#info" },
    { id: "3", title: "Contacts", link: "#contacts" },
  ];

  return (
    <header className="h-[116px] bg-gray-800 text-white flex items-center font-Ubuntu">
      <div className="container mx-auto max-w-[937px] flex items-center">
        <div className="text-xl font-bold">
          <a href="#home">Logo</a>
        </div>
        <div className=" container flex justify-end items-center">
          <nav>
            <ul className="flex space-x-20">
              {navArray.map((el) => (
                <li key={el.id}>
                  <a
                    href={el.link}
                    className="relative text-white group font-semibold"
                  >
                    {el.title}
                    <span className="absolute block h-[2px] bg-gray-400 left-0 bottom-0 w-0 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="ml-[40px]">
            <Button text="SignIn" type="DEFAULT" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
