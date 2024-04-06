import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-green-200  shadow-md">
      <div className="flex justify-between items-center max-w-6xl p-3 mx-auto">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-green-700">RJ</span>
            <span className="text-green-900">Housing</span>
          </h1>
        </Link>
        <form className="bg-green-100 p-3 rounded-lg flex">
          <input
            type="text"
            placeholder="search"
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-green-600" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="text-green-700 hover:underline hidden sm:inline">
              Home
            </li>
          </Link>
          <Link to="/About">
            <li className="text-green-700 hover:underline hidden sm:inline">
              About
            </li>
          </Link>
          <Link to="/Signin">
            <li className="text-green-700 hover:underline ">Signin</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
