function MenuItem({title , Icon}) {
    return (
        <div className="flex flex-col w-12 md:w-20 h-12 items-center cursor-pointer group">
            <Icon className="h-8 group-hover:text-white group-hover:animate-bounce" />
            <p className="opacity-0 group-hover:opacity-100 group-hover:text-white">{title}</p>
        </div>
    )
}

export default MenuItem
