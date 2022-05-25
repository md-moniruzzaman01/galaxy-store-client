import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const MyReview = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleOrder = e => {
        e.preventDefault();
        const rating = e.target.rating.value;
        const comments = e.target.comment.value;

        const review = {
            email: user.email,
            Name: user.displayName,
            rating:rating,
            comments:comments

        }

        fetch('http://localhost:5000/comment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`order successfull`)

                }
                else {
                    toast.error(`you have all ready commented`)
                }

            });
    }
    return (
        <div className='flex justify-center items-center '>
            <div className="card w-8/12 max-w-xl bg-base-100 shadow-xl">
                <div className="card-body">
                    <form onSubmit={handleOrder}>
                        <div className="form-control w-full max-w-lg">
                            <label className="label"><span className="label-text">Give us rating</span></label>
                            <input type="text" placeholder="Type here" name='rating' className="input input-bordered w-full" />

                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label"><span className="label-text">Tell Us your user exprince</span></label>


                            <textarea className="w-full border bg-slate-100" name="comment" id="" cols="50" rows="10"></textarea>
                        </div>
                        <input type="submit" className='btn' value="Comment" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default MyReview;