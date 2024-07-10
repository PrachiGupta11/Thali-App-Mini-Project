import {createSlice} from '@reduxjs/toolkit';

const initialState={
  thali:[]
};
// const initialState=[];

const ThaliSlice= createSlice({
  name:"thali",
  initialState,
  reducers:{
    addToThali(state, action){
      for(let val of state.thali)
        {
          if(val.id===action.payload.id)
          {
            return
          }
        }
       state.thali.push(action.payload);
    },
    removeFromThali(state,action){
      console.log(action.payload)
      let newData = [...state.thali]
          state.thali=newData.filter((item,ind)=>ind!==action.payload)
    },
  }
})

export const {addToThali, removeFromThali}=ThaliSlice.actions;
export default ThaliSlice.reducer;