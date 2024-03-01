function Header(props) {
    return (
        <div className="Header d-flex mb-1" style={{ backgroundColor: '#000' }}>
            <div className="d-flex flex-row flex-grow-1 p-1">
                <div className="text-white px-2" style={{ font: 'bold 1.3em Arial, sans-serif' }}>NIFTY 50</div>
                <div className="text-white px-2" style={{ font: 'lighter .9em Arial, sans-serif' }}>NSE</div>

                {/* TIME RANGE */}
                <div className="d-flex flex-row align-self-end px-3">
                    <button className="text-white border-0 me-1 px-2"
                        style={{ backgroundColor: '#444', font: 'bold .8em Arial, sans-serif' }}>1M</button>
                    <button className="text-white border-0 me-1 px-2"
                        style={{ backgroundColor: '#444', font: 'bold .8em Arial, sans-serif' }}>5M</button>
                    <button className="text-white border-0 me-1 px-2"
                        style={{ backgroundColor: '#444', font: 'bold .8em Arial, sans-serif' }}>15M</button>
                    <button className="text-white border-0 me-1 px-2"
                        style={{ backgroundColor: '#444', font: 'bold .8em Arial, sans-serif' }}>1H</button>
                </div>
            </div>

            <div className="d-flex flex-row">
                <div className="me-1" style={{ backgroundColor: '#444', width: '45px' }}></div>
                <div className="" style={{ backgroundColor: '#444', width: '45px' }} onClick={props.Switch}></div>
            </div>
        </div>
    )
}

export default Header