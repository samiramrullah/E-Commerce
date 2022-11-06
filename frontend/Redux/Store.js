import {configureStore} from '@reduxjs/toolkit';
import productReducer  from './ProductSlice';
const store=configureStore({
    reducer:{
       productReducer:productReducer,
    }
});
export default store;