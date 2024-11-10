import React from 'react'

const Welcome = () => {
    name="sheikh"
    return (
        <div className='h-screen bg-black flex flex-col items-center justify-center'>
            <h1 className='text-9xl text-white'>Welcome, {name} 🚀</h1>
        </div>
    )
}

export default Welcome
