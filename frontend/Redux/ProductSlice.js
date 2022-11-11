import {createSlice} from '@reduxjs/toolkit';

export const STATUSES=Object.freeze({
    IDEL:'idel',
    LOADING:'loading',
    ERROR:'error',
});

const productSlice=createSlice({
    name:'products',
    initialState:{
        products:[],
        productFetchStatus:STATUSES.IDEL,
    },
    reducers:{
        setProducts(state,action)
        {
            state.products=action.payload;
        },
        setProductfetchStatus(state,action)
        {
            state.productFetchStatus=(action.payload);
        },
    },
});

export const {setProducts ,setProductfetchStatus}=productSlice.actions;
export default productSlice.reducer;


//Thunk
export const fetchProducts=()=>{
    return async function fetchProductsThunk(dispatch,getstate){
        dispatch(setProductfetchStatus(STATUSES.LOADING));
        try{
            const res=await fetch("https://fakestoreapi.com/products")
            const data = await res.json();
            dispatch(setProducts(data))
            dispatch(setProductfetchStatus(STATUSES.IDEL))
        }
        catch(err){
           dispatch(setProductfetchStatus(STATUSES.ERROR));
        }
    }
}