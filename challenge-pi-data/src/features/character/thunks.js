import { setData } from "./characterSlice";

export const getCharacters = () =>{
    return async (dispatch, getState) =>{
        const response = await fetch(`https://swapi.dev/api/people`);
        const data = await response.json();
        dispatch(setData({data:data.results}))
        
    }


}