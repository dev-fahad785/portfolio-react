// src/components/BlogPost.jsx
import React from 'react';

const BlogPost = () => {

    const postData = [
        {
            title: "My First Blog Post",
            date: "August 22, 2024",
            author: "Jane Doe",
            content: `
        <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p class="text-gray-700">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <h2 class="text-2xl font-bold text-blue-600 mt-6 mb-4">Subheading</h2>
        <p class="text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        <ul class="list-disc list-inside text-gray-700 mb-4">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        <p class="text-gray-700">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      `

        }
    ]

    return (
        <div >
            {postData.map((post, index) => (
                <div key={index} className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg border border-gray-200">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-6">{post.title}</h1>
                    <div className="text-gray-600 text-sm mb-6">
                        <span className="font-medium">{post.author}</span> • <span>{post.date}</span>
                    </div>
                    <div className="prose prose-lg text-gray-900">
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                </div>
            ))}
        </div>

    );
};

export default BlogPost;
