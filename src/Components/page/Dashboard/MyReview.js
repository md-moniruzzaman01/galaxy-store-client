import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const MyReview = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleOrder = e => {
        e.preventDefault();
        const rating = e.rating
        const comments = e.comment
console.log(rating,comments,e);
        const comment = {
            email: user.email,
            Name: user.displayName,
            // rating:rating,
            // comments:comments

        }

        // fetch('http://localhost:5000/comment', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(comment)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.success) {
        //             toast(`order successfull`)

        //         }
        //         else {
        //             toast.error(`you have all ready commented`)
        //         }

        //     });
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div class="card w-8/12 max-w-xl bg-base-100 shadow-xl">
                <div class="card-body">
                    <form onSubmit={handleOrder}>
                        <div class="form-control w-full max-w-lg">
                            <label class="label"><span class="label-text">Give us rating</span></label>
                            <input type="text" placeholder="Type here" name='rating' class="input input-bordered w-full" />

                        </div>
                        <div class="form-control w-full max-w-lg">
                            <label class="label"><span class="label-text">Tell Us your user exprince</span></label>


                            <textarea class="w-full border bg-slate-100" name="comment" id="" cols="50" rows="10"></textarea>
                        </div>
                        <input type="submit" className='btn' value="Comment" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default MyReview;