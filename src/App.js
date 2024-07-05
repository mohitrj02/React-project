import React from 'react';
import Stories from './Stories';
import Pagination from './Pagination';
import Search from './Search';
import { useGlobalContext } from './context';

const App = () => {

  const data = useGlobalContext();

  return (
    <>
    <div><h1>Welcome to the Project {data}</h1></div>
    <Stories />
    <Pagination />
    <Search />
      </> 
    );
};

export default App;