import React, { useEffect, useState } from 'react';
import FilterPanel from '../../components/Home/FilterPanel';
import List from '../../components/Home/List';
import SearchBar from '../../components/Home/SearchBar';
import { dataList } from '../../constants';
import './styles.css';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);

  const [list, setList] = useState(dataList);
  const [resultsFound, setResultsFound] = useState(true);
  

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);
  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  const applyFilters = () => {
    let updatedList = dataList;
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    setList(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [ selectedCategory, selectedPrice]);

  return (
    <div className='home'>
      <SearchBar
        
      />
     
      <div className='home_panelList-wrap'>
   
        <div className='home_panel-wrap'>
          <FilterPanel
            selectedCategory={selectedCategory}
            selectCategory={handleSelectCategory}
            selectedPrice={selectedPrice}
            changePrice={handleChangePrice}
          />
        </div>
      
        <div className='home_list-wrap'>
          {resultsFound ? <List list={list} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Home;
