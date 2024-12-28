
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { toast } from 'react-toastify';

const RatingStar = ({ productId, ratingValue }) => {
    const getMidCookies = JSON.parse(localStorage.getItem("loginDetails") ?? "[]");
    const [currentUserRating, setCurrentUserRating] = useState(0); // Store user's rating
    const [forceUpdate, setForceUpdate] = useState(false); // To force re-render

    const ratingChanged = async (newRating) => {
        try {
            let payload = {
                rating: newRating,
                productId: productId,
                userId: getMidCookies?.uID,
            }
            if (payload.userId && payload.productId) {
                const response = await axios.post(`${process.env.REACT_APP_API}/rating`, payload)
                if (response.status === 200 || response.status === 201) {
                    toast.success("Rating Successfully", {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setCurrentUserRating(newRating); // Update the rating after a successful response
                    setForceUpdate(prev => !prev); // Trigger a re-render
                }
                return console.log('response: ', response);
            }
            toast.warn("Please Login For Rating", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (error) {
            console.log('error: ', error);
            toast.warn("Something Went Wrong, Please Try Later", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    useEffect(() => {
        // Update the current user rating whenever ratingValue or productId changes
        const userRating = ratingValue?.rating?.find((rating) => rating?.userId === getMidCookies?.uID);
        setCurrentUserRating(userRating?.rating || 0);
        setForceUpdate(prev => !prev); // Ensure ReactStars component re-renders
    }, [ratingValue, productId]); // Re-run when ratingValue or productId changes

    return (
        <>
            <div className='d-flex align-items-center'>
                <ReactStars
                    key={forceUpdate} // Add forceUpdate as key to force re-render
                    count={5}
                    onChange={ratingChanged}
                    value={currentUserRating} // Controlled by current state
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                />
                <div className='my-2 mx-2 text-center'>
                    <h6 className="fw-bold m-0">{ratingValue?.rating?.length || 0}</h6>
                    <small>(Total Ratings)</small>
                </div>
            </div>
        </>
    );
};

export default RatingStar;
