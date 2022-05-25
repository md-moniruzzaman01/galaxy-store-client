import React from 'react';

const Testimonials = () => {
    const { data:comments, isLoading,refetch } = useQuery('comments', () => fetch(`http://localhost:5000/allcomments`).then(res => res.json()));
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <div   className='mt-20 container mx-auto w-10/12 max-w-7xl'>
            <h1  className='text-2xl font-semibold mb-11 '>Expert Doctors</h1>
             
             <Slider {...settings} >
            
            {
                comments.map(expart=> <h1>hello</h1>)
            }
            </Slider>
             
        </div>
    );
};

export default Testimonials;