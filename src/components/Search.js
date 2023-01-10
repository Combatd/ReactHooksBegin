import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Search = () => {
  const [value, setValue] = useState('');

  useEffect((value) => {
    if (value) {
      const {data} = axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: value
        }
      });

      console.log(data)
    }
  }, [value])

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div className='ui form'>
      <form>
        <input 
          type='text' 
          placeholder='Search wikipedia'
          value={value}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Search;