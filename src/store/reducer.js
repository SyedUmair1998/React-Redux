const INITIAL_STATE = {
    // user:{
    //     name:'Umair',
    //     email:'syedumairh1998@gmail.com'
    // },
    // car:{
    //     name:'Corolla',
    //     model:2007
    // }
    name:'Umair'

}
const reducer = (state = INITIAL_STATE,action) => {
    console.log(state);
   switch(action.type){
       case "UPDATE_DATA":
           
    return({
        ...state,
        name:action.name
    });
    
    default:
        return state;

   }
}

export default reducer;