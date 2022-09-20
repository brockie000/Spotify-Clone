import React from 'react'
import {HomeIcon, SearchIcon, LibraryIcon, RssIcon, HeartIcon, PlusCircleIcon} from "@heroicons/react/outline"


export default function Sidebar() {
    return (
        <div className='text-gray-500 text-sm border-r broder-gray-900 p-5'>
            <div className='space-y-4'>

                    <button className='flex items-center space-x-2 hover:text-white'>
                        <HomeIcon className='w-5 h-5'/>
                        <p>Home</p>
                    </button>


             
                    <button className='flex items-center space-x-2 hover:text-white'>
                        <SearchIcon className='w-5 h-5'/>
                        <p>Search</p>
                    </button>

              
                    <button className='flex items-center space-x-2 hover:text-white'>
                        <LibraryIcon className='w-5 h-5'/>
                        <p> Your Library</p>
                    </button>

                    <hr className='border-t-[0.1px] border-gray-900'/> 

                    <button className='flex items-center space-x-2 hover:text-white'>
                        <PlusCircleIcon className='w-5 h-5'/>
                        <p>Create Playlist</p>
                    </button>

                    <button className='flex items-center space-x-2 hover:text-white'>
                        <HeartIcon className='w-5 h-5'/>
                        <p>Liked Songs</p>
                    </button>
              
                    <button className='flex items-center space-x-2 hover:text-white'>
                        <RssIcon className='w-5 h-5'/>
                        <p> Your Episodes</p>
                    </button>

                    <hr className='border-t-[0.1px] border-gray-900' /> 

                    {/*Playlists*/}
                    
      
            </div>
        </div>
    )
}
