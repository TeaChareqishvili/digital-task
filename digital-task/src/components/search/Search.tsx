import searchIcon from "../../assets/search.png";

type SearchProps = {
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Search({ onSearch }: SearchProps) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by title or text..."
        onChange={onSearch}
        className="search-input"
      />
      <button type="submit" className="search-button">
        <img src={searchIcon} alt="Search" />
      </button>
    </div>
  );
}
