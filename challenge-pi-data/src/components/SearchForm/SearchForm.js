import {React,useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {searchByName} from '../../features/character/characterSlice'
import CardItem from '../CardItem/CardItem';
import AddCharacter from '../AddCharacter/AddCharacter'
import CardList from '../CardList/CardList';
export default function SearchForm() {

    const dispatch = useDispatch();
    
    const [searchTerm,setSearchTerm] = useState("");
    const people = useSelector (state => state.character)
    const filteredUsers = useSelector((state) => state.character.filteredUsers);

    console.log(people)


    const changeSearchTerm = (e) =>{
    setSearchTerm(e.target.value);
    }

    useEffect(() => {
        dispatch(searchByName(searchTerm));
    }, [searchTerm, dispatch]);

    return (
        <div className="container-form my-3 col-12">
            <div className="add-and-search">
                <input type="search" placeholder="Search" className="form-control my-2" onChange={changeSearchTerm}/>
                <AddCharacter />
            </div>

            <CardList data={filteredUsers} />
            
        </div>
    )
}
