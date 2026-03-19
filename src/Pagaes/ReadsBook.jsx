import React from 'react';
import { Link } from 'react-router';
const ReadsBook = ({singleBook}) => {
       const {bookName,author,image,category,tags,totalPages}=singleBook
    return (
      <Link>
   <div className='flex flex-col gap-16 border items-center rounded-2xl mt-8 p-4 lg:flex-row'>
            <div className=''>
                <div className='bg-base-300 rounded-2xl'>
                <img className='p-16 max-h-100 ' src={image} alt="" />
            </div>
            </div>
            <div className='flex flex-col gap-[24px]'>
               <div className='flex flex-col gap-[16px]'>
                 <h2 className='text-4xl font-bold'>{bookName} <span className='font-normal text-sm rounded-lg px-9 py-2 bg-secondary'>{totalPages}</span></h2>
                <h4 className='text-neutral-400'>Published By : {author}</h4>
               </div>
                <div className='flex flex-col gap-[16px] border-y-1  border-neutral-600 py-[16px] '>
                 <h4 className='flex gap-6'>
                      {
                        category
                    }
                 </h4>
               </div>
        
                <div className='flex flex-col gap-[16px] border-b-1  border-neutral-600 py-[0px_24px] '>
                 <div className='flex gap-6'>
                    <h4>Tag :</h4>
                      {
                         tags.map(tag=><button className='flex  text-green-500'> #{tag}</button>)
                    }
                 </div>
               </div>
               <div>


               </div>
               <div className='flex gap-4'>
    <button className='btn btn-outline px-6'> Mark as Read</button>
    <button className='btn btn-secondary px-6'> Add to Wishlist</button>
</div>
            </div>
        </div>
      </Link>
    );
};


export default ReadsBook;