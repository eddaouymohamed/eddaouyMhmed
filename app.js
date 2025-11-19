import { configureStore } from "@reduxjs/toolkit";
import conatcMeReducer from './src/features/contact/contactSlice';

const store=configureStore({
    reducer:{
        contact:conatcMeReducer
    }

})
export default store;




// import {configureStore} from '@reduxjs/toolkit';
// import productReducer from './features/products/productsSlice';
// import userReducer from './features/user/userSlice';
// import cartReducer from './features/cart/cartSlice';
// import orderReducer from './features/order/orderSlice';
// import adminReducer from './features/admin/adminSlice'; // Importing the admin slice

// // Configure the Redux store with the imported slices
//  const store=configureStore({
// reducer:{
//     product:productReducer,
//     user:userReducer,
//     cart:cartReducer,
//     order:orderReducer,
//     admin:adminReducer
// }
// })
// export default store;
