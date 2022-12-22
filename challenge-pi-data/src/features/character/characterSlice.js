
import {createSlice} from '@reduxjs/toolkit';
    
    const initialState = {
        characters:[]
    }


 export const  peopleSlice = createSlice({
    name:'people',
    initialState,
    loading: true,
    reducers:{    
        setData:(state,action)=>{
           state.characters = action.payload.data
           state.filteredUsers = action.payload.data

        }, 

        addCharacter:(state,action) =>{
            state.characters.push(action.payload)
            state.filteredUsers.push(action.payload)

        },

        deleteCharacter:(state,action)=>{
            const characterFind = state.characters.find(character => character.name === action.payload.name);
            const characterFindFiltered = state.filteredUsers.find(character => character.name === action.payload.name);

            if(characterFind){
                state.characters.splice(state.characters.indexOf(characterFind),1)
                state.filteredUsers.splice(state.filteredUsers.indexOf(characterFindFiltered),1)
                
            }
           
         },
         
         searchByName: (state, action) => {
            const filteredUsers = state.characters.filter((user) =>
              user.name.toLowerCase().includes(action.payload.toLowerCase())
            );
            return {
              ...state,
              filteredUsers:
                action.payload.length > 0 ? filteredUsers : [...state.characters]
            };
          }
        
    }
})
export const  {addCharacter,deleteCharacter,setData,searchByName}  = peopleSlice.actions;
export default peopleSlice.reducer;
