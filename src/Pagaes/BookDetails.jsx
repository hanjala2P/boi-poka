import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../Utlilities/addToDB.JS';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const BookDetails = () => {
    const {id} =useParams();
    const bookId =parseInt(id)
    const data =useLoaderData();
     const singleBook= data.find(book=>book.bookId === bookId);
  const {bookName,image,category,rating,publisher,review,tags,yearOfPublishing,totalPages,author}=singleBook;
  const handleMarkAsRead = id =>{
    // store data in local storage
    // data is array type Collection || checked data if it already in store 
    MySwal.fire({
  title: "Done",
  icon: "success",
  draggable: true
})
    addToStoreDB(id);
  }
    return (
        <div className='flex flex-col items-center gap-6 lg:flex-row'>
            <div className='w-1/2'>
                <div className='p-12 bg-base-200 rounded-2xl'>
                <img className='w-full h-full' src={image} alt="" />
            </div>
            </div>
            <div className='flex flex-col gap-[24px] w-1/2'>
               <div className='flex flex-col gap-[16px]'>
                 <h2 className='text-4xl font-bold'>{bookName}</h2>
                <h4 className='text-neutral-400'>Published By : {author}</h4>
               </div>
                <div className='flex flex-col gap-[16px] border-y-1  border-neutral-600 py-[16px] '>
                 <h4 className='flex gap-6'>
                      {
                        category
                    }
                 </h4>
               </div>
               
               <div className='flex flex-col gap-[16px]'>
                 <h2 className='text-neutral-300'><span className='font-bold'>Review : </span>{review}</h2>
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
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>Number of Pages</td>
        <td>{totalPages}</td>
      </tr>
      {/* row 2 */}
      <tr>
      
        <td>Publisher</td>
        <td>{publisher}</td>
      </tr>
      {/* row 3 */}
      <tr>
        <td>Year of Publishing</td>
        <td>{yearOfPublishing}</td>
      </tr>
      <tr>
        <td>Rating</td>
        <td>{rating}</td>
      </tr>
    </tbody>
  </table>
</div>


               </div>
               <div className='flex gap-4'>
    <button onClick={()=>handleMarkAsRead(id)} className='btn btn-outline px-6'> Mark as Read</button>
    <button className='btn btn-secondary px-6'> Add to Wishlist</button>
</div>
            </div>
        </div>
      
    );
};

export default BookDetails;