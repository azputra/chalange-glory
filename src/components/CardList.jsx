import React, {useState} from "react";
import newItem from "../assets/new.svg";
import hotItem from "../assets/hot-item.svg";
import bestSeller from "../assets/best-seller.svg";
import Intersection from "../assets/Intersection.png";
import iconPoint from "../assets/icon-point.png";
import { Link, useNavigate } from "react-router-dom";

import Stars from "./Stars";

import {setWishlistUser} from "../redux/action/gifts"
import { useDispatch } from "react-redux";

export default function CardList({gift}) {
    const [imgError, setImgError] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleImageError = () => {
        setImgError(true);
    };

    const handleClickWishlist = (e) => {
        dispatch(setWishlistUser(gift?.id, 'home'))
        e.stopPropagation()
    }

    return(
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-5 card-col">
            <div className={`card shadow-sm card-list ${gift?.attributes?.stock <= 0 ? 'box-soldout' : ''}`}> 
                {
                    gift?.attributes?.isNew === 1 && gift?.attributes?.rating > 4 && gift?.attributes?.numOfReviews > 25 ?
                    <img src={hotItem} alt="label-itel" className="position-absolute hotItem hover-hide" width="82" height="86" />
                    : gift?.attributes?.rating > 4 && gift?.attributes?.numOfReviews > 25 ?
                    <img src={bestSeller} alt="label-itel" className="position-absolute bestSeller hover-hide" width="82" height="86" />
                    : gift?.attributes?.isNew === 1 ? 
                    <img src={newItem} alt="label-itel" className="position-absolute newItem hover-hide" width="82" height="86" /> : ''
                }
                <div className="card-body">
                    {
                        gift?.attributes?.stock <= 0 ?
                            <p className="m-0 text-2 fw-bold red-1 hover-hide">Sold Out</p>
                        : gift?.attributes?.stock > 5 ?
                        <p className="m-0 text-2 fw-bold green-2 hover-hide">In Stock</p>
                        : <p className="m-0 text-2 fw-bold red-1 hover-hide">Stock &lt; 5</p>
                    }
                    <img src={imgError ? Intersection : `${gift?.attributes?.images[0]}`} alt="label-itel" className="card-img-item mx-auto img-fluid my-4" onError={handleImageError}/>
                    <p className="black-1 text-1 text-start fw-bold hover-hide">{gift?.attributes?.name}</p>
                    <div className="row hover-hide">
                        <div className="col-md-9 col-sm-12">
                            <div className="row">
                                <div className="d-flex gap-2">
                                    <img src={iconPoint} alt="iconPoint" width="11" height="11" className="my-auto" />
                                    <p className="m-0 green-1 text-3 fw-semibold text-break">{gift?.attributes?.points} points</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="rating col">
                                    <Stars rating={gift?.attributes?.rating}/>
                                </div>
                                <p className="grey-1 text-3 fw-semibold col text-break">{gift?.attributes?.numOfReviews} reviews</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12 d-flex align-items-center">
                            {
                                gift?.attributes?.isWishlist === 0 ?
                                <button className="wishlist-none"><i class="far fa-heart"></i></button>
                                :
                                <button className="wishlist-red"><i class="fas fa-heart"></i></button>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-overlay" onClick={()=>{navigate(`/${gift?.id}`)}}>
                {
                    gift?.attributes?.stock <= 0 ?
                        <p className="m-0 text-2 fw-bold text-white position-absolute text-stock-overlay">Sold Out</p>
                    : gift?.attributes?.stock > 5 ?
                        <p className="m-0 text-2 fw-bold text-white position-absolute text-stock-overlay">In Stock</p>
                    : <p className="m-0 text-2 fw-bold text-white position-absolute text-stock-overlay">Stock &lt; 5</p>
                }
                <p className="text-white text-1 text-center fw-bold position-absolute top-45%">{gift?.attributes?.name}</p>
                <Link to={gift?.id} className="detail-button text-decoration-none"><i class="fas fa-eye"></i> &nbsp; View Detail</Link>
                {
                    gift?.attributes?.isWishlist === 0 ?
                    <button onClick={(e)=>{handleClickWishlist(e)}} className="wishlist-none cursor-pointer wishlist-overlay border-white text-white"><i class="far fa-heart"></i></button>
                    :
                    <button onClick={(e)=>{handleClickWishlist(e)}} className="wishlist-red cursor-pointer wishlist-overlay"><i class="fas fa-heart"></i></button>
                }
            </div>
        </div>
    )   
}