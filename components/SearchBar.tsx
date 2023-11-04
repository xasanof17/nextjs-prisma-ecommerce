import { Search } from "lucide-react";
type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div>
      <div className="flex items-center rounded-full bg-gray-100 px-3 py-2 max-md:hidden">
        <button>
          <Search size={20} className="opacity-50" />
        </button>
        <input
          type="text"
          className="ml-2 bg-transparent text-base font-medium caret-blue-500 outline-none placeholder:font-normal placeholder:text-gray-600"
          placeholder="Search..."
          autoComplete="false"
        />
      </div>
    </div>
  );
};

export default SearchBar;
