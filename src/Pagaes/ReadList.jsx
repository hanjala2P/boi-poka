import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../Utlilities/addToDB.JS';
import Book from './Book';
import ReadsBook from './ReadsBook';
const ReadList = () => {
    const [sort,setSort]=useState([]);

    const [readList,setReadList]=useState([]);
    const data =useLoaderData();
    const handleSort=(type)=>{
        setSort(type);
        if(type==="Pages"){
          const sortedByPages = [...readList].sort((a,b)=>a.totalPages - b.totalPages);
          setReadList(sortedByPages);
        }
        if(type =="Ratings"){
          const sortedByRatings =[...readList].sort((a,b)=>a.rating - b.rating);
          setReadList(sortedByRatings)
        }
    }
   
    useEffect(()=>{
        const storedBookedData =getStoredBook();
        console.log(storedBookedData);
        const covertedStoredBooks =storedBookedData.map(id=>parseInt(id));
         console.log(covertedStoredBooks);
        const myReadlist =data.filter(book => covertedStoredBooks.includes(book.bookId));
        setReadList(myReadlist);

    },[]);

    return (
       
        <div>
            <div className="dropdown dropdown-start flex justify-center my-16">
  <div tabIndex={0} role="button" className="btn m-1">Sort by : { sort?sort:"" }</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort("Pages")}>Pages</a></li>
    <li><a onClick={()=>handleSort("Ratings")}>Ratings</a></li>
    
  </ul>
</div>
             <Tabs>
    <TabList>
      <Tab>Read Book List</Tab>
      <Tab>My Wishlist</Tab>
    </TabList>

    <TabPanel>
      <h2>Book i Read ( {readList.length} )</h2>

      {
        readList.map(b=><ReadsBook key={b.bookId} singleBook={b}></ReadsBook>)
      }
    </TabPanel>
    <TabPanel>
      <h2>My Whistlist</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;