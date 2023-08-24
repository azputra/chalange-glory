import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import {getDetailGift} from "../redux/action/gifts"
import { useDispatch, useSelector } from "react-redux";

import newItem from "../assets/new.svg";
import hotItem from "../assets/hot-item.svg";
import bestSeller from "../assets/best-seller.svg";
import Intersection from "../assets/Intersection.png";
import pointDetail from "../assets/point-detail.png";

import Stars from "../components/Stars";
import htmr from "htmr";

import { Helmet } from 'react-helmet';

import {setWishlistUser} from "../redux/action/gifts"

export default function DetailPage() {
    const dispatch = useDispatch();
    const param = useParams()
    const {detailGift} = useSelector(state => state.gifts);

    const [imgError, setImgError] = useState(false);
    const [imgErrorCount, setImgErrorCount] = useState(0);
    const [quantity, setQuantity] = useState(1);


    const handleImageError = () => {
        setImgError(true);
        if (imgErrorCount > 0) return
        setImgErrorCount(1)
        setTimeout(() => {
            setImgError(false)
        }, 1);
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        if (value >= 1 && value <= 10) {
            setQuantity(value);
        }
    };
    
    const handleIncrement = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1);
        }
    };
    
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleClickWishlist = (e) => {
        dispatch(setWishlistUser(detailGift?.id, 'detail'))
        e.stopPropagation()
    }
    
    useEffect(() => {
        dispatch(getDetailGift(param.giftId))
        setImgError(false)
    }, [dispatch, param.giftId]);
    
    return(
        <>
            <Helmet>
                <title>{detailGift?.attributes?.name}</title>
                <meta name="description" content={htmr(`${detailGift?.attributes?.description}`)} />
                <meta property="og:title" content={detailGift?.attributes?.name} />
                <meta property="og:description" content={htmr(`${detailGift?.attributes?.description}`)} />
                <meta property="og:image" content={detailGift?.attributes?.images[0]} />
            </Helmet>
            <div className="container pb-5rem container-detail">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/" className="text-decoration-none grey-1">List Product</Link></li>
                        <li class="breadcrumb-item active grey-1" aria-current="page">{detailGift?.attributes?.name}</li>
                    </ol>
                </nav>
                <div className="row gap-5">
                    <div className="col position-relative">
                        {
                            detailGift?.attributes?.isNew === 1 && detailGift?.attributes?.rating > 4 && detailGift?.attributes?.numOfReviews > 25 ?
                            <img src={hotItem} alt="label-itel" className="position-absolute hotItem" width="82" height="86" />
                            : detailGift?.attributes?.rating > 4 && detailGift?.attributes?.numOfReviews > 25 ?
                            <img src={bestSeller} alt="label-itel" className="position-absolute bestSeller" width="82" height="86" />
                            : detailGift?.attributes?.isNew === 1 ? 
                            <img src={newItem} alt="label-itel" className="position-absolute newItem" width="82" height="86" /> : ''
                        }
                        <img src={imgError ? Intersection : `${detailGift?.attributes?.images[0]}`} alt="label-itel" className="img-fluid my-4 py-3 px-5" onError={handleImageError}/>
                    </div>
                    <div className="col">
                        <p className="row black-1 text-0 text-start fw-bold mb-2">{detailGift?.attributes?.name}</p>
                        <div className="row">
                            <div className="col d-flex gap-3 p-0">
                                <div className="rating-detail">
                                    <Stars rating={detailGift?.attributes?.rating}/>
                                </div>
                                <p className="grey-1 text-1 fw-semibold text-break my-auto">{detailGift?.attributes?.numOfReviews} reviews</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="d-flex gap-2 p-0">
                                <img src={pointDetail} alt="pointDetail" width="20" height="20" className="my-auto" />
                                <p className="m-0 green-1 text-0 fw-semibold text-break">{detailGift?.attributes?.points} point</p>
                                {
                                    detailGift?.attributes?.stock <= 0 ?
                                        <p className="my-auto text-1 fw-bold red-1">Sold Out</p>
                                    : detailGift?.attributes?.stock > 5 ?
                                        <p className="my-auto text-1 fw-bold green-2">In Stock</p>
                                    :   <p className="my-auto text-1 fw-bold red-1">Stock &lt; 5</p>
                                }
                            </div>
                        </div>
                        <div className="row mt-4">
                            <p className="info-detail">{detailGift?.attributes?.info ? new DOMParser().parseFromString(detailGift?.attributes?.info, 'text/html').documentElement.textContent : '-'}</p>
                        </div>
                        <div className="row">
                            <p className="p-0 grey-2 text-2 fw-semibold">Jumlah</p>
                        </div>
                        <div className="row mb-4">
                            <div className="input-group p-0">
                                <span className="input-group-btn">
                                    <button onClick={handleDecrement} type="button" className="btn btn-default btn-number btn-grey shadow-sm" data-type="minus" data-field="quant[1]">
                                        <i class="fas fa-minus"></i>
                                    </button>
                                </span>
                                <input value={quantity} onChange={handleInputChange} type="text" name="quant[1]" className="form-control input-number" min="1" max="10" />
                                <span className="input-group-btn">
                                    <button onClick={handleIncrement} type="button" className="btn btn-default btn-number btn-grey shadow-sm" data-type="plus" data-field="quant[1]">
                                        <i class="fas fa-plus"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 col-md-3 p-0">
                                {detailGift?.attributes?.isWishlist === 0 ? (
                                <button onClick={(e)=>{handleClickWishlist(e)}} className="wishlist-none wishlist-detail">
                                    <i className="far fa-heart"></i>
                                </button>
                                ) : (
                                <button onClick={(e)=>{handleClickWishlist(e)}} className="wishlist-red wishlist-detail">
                                    <i className="fas fa-heart"></i>
                                </button>
                                )}
                            </div>
                            <div className="col-6 col-md-5">
                                <button className="redeem">Redeem</button>
                            </div>
                            <div className="col-12 col-md-4 mt-3 mt-md-0">
                                <button className="addToCart">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid custom-background pb-10rem">
                <div className="container">
                    <div className="row mt-5 ">
                        <ul class="nav nav-underline">
                            <li class="nav-item width-full">
                                <div class="nav-link active nav-produk" aria-current="page">
                                    <span class="info-produk">Info Produk</span>
                                </div>
                            </li>
                        </ul>
                        <div className="row mt-5 mb-5 green-2 text-1 fw-semibold">Rincian</div>
                        <div className="row">
                            <p className="text-rincian">
                                {htmr(`${detailGift?.attributes?.description}`)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}