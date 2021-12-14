import Image from "next/image"
import poster from '../assets/images/poster.jpg'
import { PhotographIcon } from '@heroicons/react/outline'

function ResultItem({item}) {
    return (
        <div className="h-auto p-2 m-1 cursor-pointer group hover:scale-105 transform duration-200">
            <Image
                src={poster}
                layout="responsive"
                width={50}
                height={30}
            />
            <h1 className="text-white whitespace-nowrap truncate group-hover:text-orange-400">{item.title}</h1>
            <div className="flex  items-center ">
                 <h2 className="text-white">{item.albumId}</h2>
                <PhotographIcon className="h-5 ml-2 group-hover:animate-bounce"/>
            </div>
    </div>
    )
}

export default ResultItem
