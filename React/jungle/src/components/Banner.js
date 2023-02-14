function Banner() {
    return (
        <div className="flex items-center justify-end mb-5">
            <svg className="stroke-blue-600" width="150" height="150" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 8l-4 4l4 4"></path>
                <path d="M17 8l4 4l-4 4"></path>
                <path d="M14 4l-4 16"></path>
            </svg>
            <h1 className="text-7xl font-semibold ml-10">Ayaline</h1>
        </div>
    )
}

export default Banner