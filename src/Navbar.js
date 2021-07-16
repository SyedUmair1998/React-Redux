import {useSelector,useDispatch} from 'react-redux';
const Home = () =>{
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    const update = () =>{
        dispatch({
            type:"UPDATE_DATA",
            name:'Kaka'
        });
    }
    console.log(state);
    return(
        <div>
            <h1>{state.name}</h1>
            <button onClick={update}>Update</button>
        </div>
    )
}
export default Home;