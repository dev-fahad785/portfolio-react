import React, { useState } from 'react';
import Card from './Card';
import Heading from './Heading'

const Blog = () => {

    const booksData = [
        {
            key: '1',
            image: 'images/books/mybrother.jpg',
            title: 'My Brother',
            tags: ['Fatima Jinnah', '22 Aug 2023']
        },
        {
            key: '1',
            image: 'images/books/mybrother.jpg',
            title: 'My Brother',
            tags: ['Fatima Jinnah', '22 Aug 2023']
        },
        {
            key: '1',
            image: 'images/books/mybrother.jpg',
            title: 'My Brother',
            tags: ['Fatima Jinnah', '22 Aug 2023']
        },
        {
            key: '1',
            image: 'images/books/mybrother.jpg',
            title: 'My Brother',
            tags: ['Fatima Jinnah', '22 Aug 2023']
        },
        {
            key: '1',
            image: 'images/books/mybrother.jpg',
            title: 'My Brother',
            tags: ['Fatima Jinnah', '22 Aug 2023']
        },
    ]

    return (
        <div id='bookReviews' className="p-4">
          <Heading heading={"Book Reviews"}  subHeading="Books i had read"/>
            <div className="flex flex-wrap  justify-center">
                {booksData.map((blog, index) => (
                    <Card
                        className="border border-black border-opacity-60"
                        key={index}
                        image={blog.image}
                        title={blog.title}
                        btnText={'Read More'}
                        btn2Text={false}
                        tags={blog.tags}
                        btn1Url={blog.githubLink}
                        btn2Url={blog.liveDemoLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default Blog;
