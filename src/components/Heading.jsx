import React from 'react'

const Heading = ({heading,subHeading}) => {
    return (
        <div>
            <div className="text-center my-12">
                <h2 className="text-lg text-gray-600 mb-2">{subHeading}</h2>
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">{heading}</h1>
            </div>
        </div>
    )
}

export default Heading