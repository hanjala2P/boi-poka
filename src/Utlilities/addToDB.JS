const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem("readlist");
    if (storedBookSTR) {
        // JSON.parse করার সময় ট্রাই-ক্যাচ ব্লক ব্যবহার করা নিরাপদ
        return JSON.parse(storedBookSTR);
    }
    return [];
};

const addToStoreDB = (id) => {
    const storedBookData = getStoredBook();
    
    // টাইপ সেফটি নিশ্চিত করতে String এ কনভার্ট করে চেক করা ভালো
    const isExist = storedBookData.find(bookId => bookId === id);

    if (isExist) {
        alert("This book is already in your read list!");
    } else {
        storedBookData.push(id);
        const dataStr = JSON.stringify(storedBookData);
        localStorage.setItem("readlist", dataStr);
        // ইউজারকে সাকসেস মেসেজ দেখানো ভালো
        console.log("Book added successfully");
    }
};

export { addToStoreDB, getStoredBook };