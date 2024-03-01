function Status(props) {
    return (
        <div className="Status d-flex" style={{ backgroundColor: '#222' }}>
            <div className="btn rounded-0 text-white p-1 px-2" style={{ font: 'bold 1.25em Arial, sans-serif' }}
                onClick={() => props.Update('Dashboard')}>TRADER PLATFORM</div>
        </div>
    )
}

export default Status