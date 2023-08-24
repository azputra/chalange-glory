import React, {useState, useEffect} from "react";
import CardList from "../components/CardList";
import {getListGifts} from "../redux/action/gifts"
import { useDispatch, useSelector } from "react-redux";


export default function Homepage() {
    const dispatch = useDispatch();
    const {data, meta, tempDataGift} = useSelector(state => state.gifts);
    const loading = useSelector(state => state.globalReducer.loading);
    const [selectedOption, setSelectedOption] = useState('terbaru');
    const [filter, setFilter] = useState({rating4Teratas:false, stockTersedia:false});
    useEffect(() => {
        dispatch({type:'SET_LIST_GIFTS', payload: []})
        dispatch({type:'SET_LIST_TEMP_GIFTS', payload: []})
        dispatch({type:'SET_META', payload: {}})
        dispatch(getListGifts(1, 6));
    }, [dispatch]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const bodyHeight = document.body.scrollHeight;
        if (scrollY + windowHeight >= bodyHeight - 100) {
            if (meta.currentPage >= meta.totalPages || loading) return
            dispatch(getListGifts(meta.currentPage + 1, 6));
            setFilter({rating4Teratas:false, stockTersedia:false})
            window.scrollBy(0, -300);
        }
    };

    const handleChangeUrutan = (input) => {
        setSelectedOption(input);
        const tempData = data;
        if (input === "terbaru") {
            const compareByIsNew = (a, b) => b?.attributes?.isNew - a?.attributes?.isNew;
            tempData.sort(compareByIsNew);
            dispatch({type:'SET_LIST_GIFTS', payload: tempData})
        } else {
            const compareByRating = (a, b) => b?.attributes?.rating  - a?.attributes?.rating ;
            tempData.sort(compareByRating);
            dispatch({type:'SET_LIST_GIFTS', payload: tempData})
        }
    };

    const handleChangeFilter = async (input) => {
        const tempFilter = {...filter}
        if (input === "rating4Teratas") tempFilter.rating4Teratas = !filter.rating4Teratas
        else tempFilter.stockTersedia = !tempFilter.stockTersedia
        setFilter(tempFilter)
        if ((!tempFilter.rating4Teratas && !tempFilter.stockTersedia)) {
            return dispatch({type:'SET_LIST_GIFTS', payload: tempDataGift})
        }
        const tempData = tempDataGift;
        const filteredData = tempData.filter((product) => {
            const rating = product.attributes.rating;
            const stock = product.attributes.stock;
            if (tempFilter.rating4Teratas && tempFilter.stockTersedia) {
                return rating >= 4 && stock > 0
            } else if (tempFilter.rating4Teratas && !tempFilter.stockTersedia) {
                return rating >= 4
            } else {
                return stock > 0
            } 
        });
        dispatch({type:'SET_LIST_GIFTS', payload: filteredData})
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return(
        <div className="container-fluid px-5 pb-10rem">
            <div className="row">
                <div className="col-md-4 col-xl-3 d-grid gap-4 h-fit-content col-filter">
                    <div className="row py-3 border-bottom">
                        <p className="black-1 text-1 fw-bold mt-2 mb-0">Filter</p>
                    </div>
                    <div className="row card rounded-1 px-2 py-4">
                        <div className="col">
                            <div className="row d-flex justify-content-between py-2 px-2">
                                <p className="m-0 w-auto grey-1 fw-bold text-2">Rating 4 ke atas</p>
                                <input onChange={()=>{handleChangeFilter("rating4Teratas")}} checked={filter.rating4Teratas} className="form-check-input filter-checkbox" type="checkbox" id="rating4KeAtas"></input>
                            </div>
                            <div className="row d-flex justify-content-between py-2 px-2">
                                <p className="m-0 w-auto grey-1 fw-bold text-2">Stock Tersedia</p>
                                <input onChange={()=>{handleChangeFilter("stockTersedia")}} checked={filter.stockTersedia} className="form-check-input filter-checkbox" type="checkbox" id="stockTersedia"></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-9 col-md-8 px-2 px-sm-3 px-md-4 px-lg-5 d-grid gap-4">
                    <div className="row py-3 border-bottom">
                        <div className="col-12 col-sm-8">
                            <p className="black-1 text-1 fw-bold mt-2 mb-0">Product List</p>
                        </div>
                        <div className="col-12 col-sm-4 d-flex justify-content-end mt-3 mt-sm-0">
                            <p className="grey-1 text-4 fw-bold my-auto me-2">Urutan</p>
                            <div className="dropdown my-auto">
                                <select className="form-select rounded-pill text-center text-4 min-w-9"
                                    value={selectedOption}
                                    onChange={e=>{handleChangeUrutan(e.target.value)}}
                                >
                                    <option value="terbaru">Terbaru</option>
                                    <option value="ulasan">Ulasan</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                        data?.length !== 0 ?
                        data?.map(gift => (
                            <CardList key={gift.id} gift={gift}/>
                        ))
                        : ''}
                        {
                            loading ? 'Loading . . . ' : ''
                        }
                    </div>
                </div>
            </div>
        </div>
    )   
}