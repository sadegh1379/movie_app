import Image from "next/image"
import { 
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
    CollectionIcon,
    BadgeCheckIcon
 } from '@heroicons/react/outline'
import MenuItem from "./MenuItem"

function Header() {
    return (
        <header className="flex flex-col md:flex-row items-center justify-between m-2 h-auto">
            <div className="flex flex-grow max-w-2xl">
                <MenuItem title="HOME" Icon={HomeIcon}/>
                <MenuItem title="SEARCH" Icon={SearchIcon}/>
                <MenuItem title="BADGE" Icon={BadgeCheckIcon}/>
                <MenuItem title="USER" Icon={UserIcon}/>
                <MenuItem title="COLLECTION" Icon={CollectionIcon}/>
                <MenuItem title="LIGHTING" Icon={LightningBoltIcon}/>

            </div>
            <Image
                src="https://download.logo.wine/logo/Hulu/Hulu-Logo.wine.png"
                width={200}
                height={80}
                className="object-contain"
            />
        </header>
    )
}

export default Header
