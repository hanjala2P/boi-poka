import React from 'react';
import { Link } from 'react-router';
const Book = ({singleBook}) => {
    const {bookName,bookId,image,category,rating,publisher,tags,yearOfPublishing}=singleBook
    return (
      <Link to={`/bookDetails/${bookId}`}>
                <div className='flex items-center justify-center mt-2'>
          <div className="card bg-base-100 w-96 shadow-sm border p-3 border-[#3f3f3fd3]">
  <figure className='p-6 bg-[#4b4b4b23]'>
    <img
     className='h-40'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='flex gap-5 text-green-500'>
        {
          tags.map(tag=><button className=''>{tag}</button>)
        }
    </div>
    <h2 className="card-title">
     {bookName}
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
    <p>By : {publisher}</p>
    <p className='border border-dashed border-1 border-[#cfcfcf48] mt-2'></p>
    <div className='flex gap-5 text-[#a1a1a1]'>
        <h2>{category}</h2>
        <h2>{rating}</h2>
    </div>
  </div>
</div>
        </div>
      </Link>
    );
};

export default Book;