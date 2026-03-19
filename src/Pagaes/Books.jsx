import React, { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { SyncLoader } from 'react-spinners';
import Book from './Book';


const Books = () => {
     const bookData =useLoaderData();
    const [books,setBooks]=useState([]);
    useEffect(()=>{
        fetch("/booksData.json").then(res=>res.json())
        .then(data=>{
          setBooks(data)
        })
    }
)
    return (
        <div>
            <h3 className='text-3xl font-semibold text-center'>Books</h3>
               <Suspense fallback={SyncLoader}></Suspense>
              <div className='grid grid-cols-1 gap-4 mt-12 md:grid-cols-3'>
                 {
                bookData.map((singleBook)=><Book key={singleBook.bookId} singleBook={singleBook}></Book>)
               }
              </div>
        </div>
    );
};

export default Books;