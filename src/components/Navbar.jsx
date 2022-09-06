import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full h-[90px] bg-black'>
        <div className='max-w-[1240px] mx-auto px-4 flex justify-between'>                   
            <div>
                <h1 className='text-[#00d8ff]'>DEFI</h1>
            </div>
            <div>
                <ul className='flex'>
                    <li>Platfrom</li>
                    <li>Developers</li>
                    <li>Community</li>
                    <li>About</li>
                </ul>
                <button>Use Defi</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar