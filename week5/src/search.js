import React, { useState } from 'react';

const Search = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const submit = () => {
    window.location.href = `https://search.naver.com/search.naver?query=${inputValue}`;
  };

  return (
      <div>
          <input type="text"
                 value={inputValue}
                 onChange={handleChange}
                 placeholder="Search..."
          />
          <button onClick={submit}>Search</button>
      </div>

  );
}

export default Search;