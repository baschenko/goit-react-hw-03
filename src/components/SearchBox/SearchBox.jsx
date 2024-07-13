const SearchBox = ({ changeFilter, filter }) => {
  const handleChange = e => {
    changeFilter(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={filter} />
    </div>
  );
};

export default SearchBox;
