const defaultState = {
    valueCity='',
    valueOfPoint=''
};

const locReducer =(state=defaultState, action)=>{
    switch (action.type) {
        case LOC_CHANGE_CITY_TEXT:
            return {
                ...state,
                valueCity: action.payload
            };
        case LOC_CHANGE_CITYPOINT_TEXT:
            return {
                ...state,
                valueOfPoint: action.payload
            };
    
        
    }
    return state;
}
