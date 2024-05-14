import { Link } from "react-router-dom";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90p]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-y-6 py-8">
          {/* logo */}
          <Link to={"/"}>
            <img
              src={"/logo.svg"}
              width={220}
              height={48}
              alt={"logo"}
            />
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
