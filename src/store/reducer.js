const INITIAL_STATE = {
//    student : {
//        dept:"CS"
//    },
    name:'Umair',
    age:"10"

}

const reducer = (state = INITIAL_STATE,action) => {
   switch(action.type){
       case "UPDATE_DATA":
            
       
        return({
        ...state,
        age:action.name
        
    });
    case "ADD_DATA":
           return({
        ...state,
        age:action.age+1
        
    });
    default:
        return state;

   }
}

export default reducer;