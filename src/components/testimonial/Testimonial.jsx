/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className=' text-center text-3xl font-bold text-black' >Testimonial</h1>
                    {/* para  */}
                    <h2 className=' text-center text-2xl font-semibold mb-10' >What our <span className=' text-indigo-800'>customers</span> are saying</h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-indigo-500 bg-gray-100" src="https://firebasestorage.googleapis.com/v0/b/myecom-be317.appspot.com/o/NEEL_IMAGE.jpg?alt=media&token=b9a781a2-80e1-4120-a041-cbc22f9d19da" />
                                <p className="leading-relaxed">"I had an outstanding shopping experience at NK-Shoes Hub. The website offers a great selection of stylish and high-quality shoes. My order was delivered promptly, and the packaging was secure. Customer service was friendly , making the whole process a pleasure."</p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-800 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-bold title-font tracking-wider text-sm uppercase">Neel Makwana</h2>
                                <p className="text-gray-500">Customer</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-indigo-500 bg-gray-100" src="https://firebasestorage.googleapis.com/v0/b/myecom-be317.appspot.com/o/OTHER_IMAGE.png?alt=media&token=4ada16fa-5063-4fed-8fd4-f4a61b114d01" />
                                <p className="leading-relaxed">"I purchased shoes from NK-Shoes Hub and was very happy with the experience. The website's selection is stylish and varied, and my order arrived on time and in great condition. Great customer service—I will definitely shop here again!"</p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-bold title-font tracking-wider text-sm uppercase">Suresh Mishra</h2>
                                <p className="text-gray-500">Customer</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-indigo-500 bg-gray-100" src="https://firebasestorage.googleapis.com/v0/b/myecom-be317.appspot.com/o/OTHER_IMAGE2.png?alt=media&token=bec44dd2-2504-4ba8-85bb-a2018ec823a1" />
                                <p className="leading-relaxed">"I recently shopped at NK-Shoes Hub and was very impressed with the selection and quality of the shoes. The website was easy to navigate, and my order arrived quickly and in perfect condition. Excellent customer service as well—I highly recommend this footwear store!"</p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-bold title-font tracking-wider text-sm uppercase">Abishek Varma </h2>
                                <p className="text-gray-500">Customer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial