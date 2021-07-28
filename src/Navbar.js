import {useSelector,useDispatch} from 'react-redux';
const Home = () =>{
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    const update = () =>{
        dispatch({
            type:"ADD_DATA",
            age:10
        });
    }
    console.log(state);
    return(
        <div>
            <h1>{state.age}</h1>
            <button onClick={update}>Update</button>
        </div>
    )
}
export default Home;