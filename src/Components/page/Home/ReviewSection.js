import React from 'react';
import { useQuery } from 'react-query';

const ReviewSection = () => {
    const { data:comments, isLoading,refetch } = useQuery('comments', () => fetch(`http://localhost:5000/allcomments`).then(res => res.json()));
    console.log(comments);
    return (
        <div>
            
        </div>
    );
};

export default ReviewSection;