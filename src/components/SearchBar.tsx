import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Input } from './ui/input';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search...", onSearch }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className="relative w-full max-w-sm">
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
      <Input
        type="text"
        placeholder={placeholder}
        className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
