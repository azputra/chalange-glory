import axios from "axios";
import Swal from "sweetalert2";

export const getListGifts = (page, pageSize) => {
    return async function (dispatch) {
        dispatch({type:'LOADING', payload: true})
        const config = {
            method: 'get',
            url: `${process.env.REACT_APP_URL_BE}/gifts?page[number]=${page}&page[size]=${pageSize}`,
        };
        await axios(config)
        .then(({data}) => {
            dispatch({type:'SUCCESS_GET_LIST_GIFTS', payload: data})
            dispatch({type:'LOADING', payload: false})
        }).catch((err) => {
            dispatch({type:'LOADING', payload: false})
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        });
    }
}

export const getDetailGift = (id) => {
    return async function (dispatch) {
        dispatch({type:'LOADING', payload: true})
        const config = {
            method: 'get',
            url: `${process.env.REACT_APP_URL_BE}/gifts/${id}`,
        };
        await axios(config)
        .then(({data}) => {
            dispatch({type:'SET_DETAIL_GIFT', payload: data.data})
            dispatch({type:'LOADING', payload: false})
        }).catch((err) => {
            dispatch({type:'LOADING', payload: false})
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        });
    }
}

export const setWishlistUser = (id, page) => {
    return async function (dispatch) {
        dispatch({type:'LOADING', payload: true})
        const config = {
            method: 'post',
            url: `${process.env.REACT_APP_URL_BE}/gifts/${id}/wishlist`,
        };
        await axios(config)
        .then(() => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Success Update Wishlist',
                showConfirmButton: false,
                timer: 1000
            })
            dispatch({type:'SET_LIST_GIFTS', payload: []})
            dispatch({type:'SET_LIST_TEMP_GIFTS', payload: []})
            dispatch({type:'SET_META', payload: {}})
            dispatch({type:'LOADING', payload: false})
            if (page === 'home') dispatch(getListGifts(1, 6))
            else dispatch(getDetailGift(id))
        }).catch((err) => {
            dispatch({type:'LOADING', payload: false})
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        });
    }
}