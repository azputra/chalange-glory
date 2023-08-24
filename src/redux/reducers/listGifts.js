const initialState = {
    meta: null,
    data: [],
    tempDataGift: [],
    detailGift: {}
};

const listGiftsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUCCESS_GET_LIST_GIFTS':
            return {
                ...state,
                meta: action.payload.meta,
                data: [...state.data, ...action.payload.data],
                tempDataGift: [...state.data, ...action.payload.data]
            };
        case "SET_LIST_GIFTS":
            return { ...state, data: action.payload };
        case "SET_LIST_TEMP_GIFTS":
            return { ...state, tempDataGift: action.payload };
        case "SET_META":
            return { ...state, meta: action.payload };
        case "SET_DETAIL_GIFT":
            return { ...state, detailGift: action.payload };
        default:
            return state;
    }
};

export default listGiftsReducer;