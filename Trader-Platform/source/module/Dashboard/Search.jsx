function Search() {
    return (
        <div className="Search me-1" style={{ padding: '7px', backgroundColor: '#444' }}>
            <input type="text" className="Input border-0 text-white text-uppercase text-center p-2"
                style={{
                    outline: 0, width: '320px', backgroundColor: '#222',
                    font: 'light 0.9em Verdana, sans-serif'
                }} />

            <div className="bg-black my-2" style={{ height: '2px' }} />

            <div className="List"></div>
        </div>
    )
}

export default Search