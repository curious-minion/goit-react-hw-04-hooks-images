import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar, SearchForm, SearchForm_button, SearchForm_button_label, SearchForm_input} from './SearchBar.module.css';

const SearchBar = ({onSubmit}) => {
  const [searchRequest, setSearchRequest] = useState('');
  
  const handleRequestChange = event => {
    setSearchRequest(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchRequest.trim() === '') {
      toast.error('Type in your search request');
      return;
    }
    
   onSubmit(searchRequest);
  setSearchRequest('');

  };

  
    
    return (
      <header className={Searchbar}>
      <form onSubmit={handleSubmit} className={SearchForm}>
        <button type="submit" className={SearchForm_button}>
          <span className={SearchForm_button_label}>Search</span>
        </button>

        <input
          className={SearchForm_input}
            type="text"
            name="searchRequest"
            value={searchRequest}
            onChange={handleRequestChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>);
  

}

export default SearchBar;