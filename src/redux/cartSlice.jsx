"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  discount: 0,
  appliedOffer: null, // New state to store the selected offer
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state, action) {
      state.cart = action.payload;
    },
    addToCart(state, action) {
      const isAlreadyInCart = state.cart.filter((ele) => ele.id === action.payload.id);
      if (isAlreadyInCart.length > 0) {
        return;
      } else {
        state.cart.push(action.payload);
        console.log(action.payload);
        
      }
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    editCart(state, action) {
      const index = state.cart.findIndex((item) => item.id === action.payload.id);
      state.cart[index] = action.payload.service
      // console.log(index, action.payload)
    },
    applyOffer(state, action) {
      state.appliedOffer = action.payload; // Store the applied offer object
      state.discount += action.payload.discount_percentage; // Update the discount value
    },
    clearOffer(state) {
      state.appliedOffer = null; // Clear the applied offer
      state.discount = 0; // Reset the discount
    },
  },
});

export const { setCart, addToCart, removeFromCart, applyOffer, clearOffer, editCart } = cartSlice.actions;

export default cartSlice.reducer;
