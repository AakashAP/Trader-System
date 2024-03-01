function Transaction() {
    return (
        <div className="Transaction ms-1 p-1 px-2" style={{ backgroundColor: '#444' }}>
            {/* PRICE */}
            <div>
                <div className="text-black" style={{ font: '1.5em Arial, sans-serif' }}>25400</div>

                <div className="d-flex flex-row p-0">
                    <div className="text-black me-1" style={{ font: 'bold 1em Arial, sans-serif' }}>5.2</div>
                    <div className="text-black ms-1" style={{ font: 'bold 1em Arial, sans-serif' }}>0.2%</div>
                </div>
            </div>

            <div className="bg-black my-2" style={{ height: '2px' }} />

            {/* INPUT FIELD */}
            <input type="text" className="border-0 text-white text-end p-1 px-2 mb-1"
                style={{
                    outline: 0, width: '260px', backgroundColor: '#252525',
                    font: 'bold lem Verdana, sans-serif'
                }} />

            <div className="w-100 d-flex flex-row mb-1">
                <div className="bg-success " style={{ width: '20px' }} />
                <div className="flex-grow-1 d-flex flex-row" style={{ padding: '2px' }}>
                    <div className="text-black align-self-end px-1" style={{ font: 'bold .9em Arial, sans-serif' }}>TRIGGER</div>
                    <div className="flex-grow-1"></div>
                    <div className="text-black align-self-end" style={{ font: 'lighter 1.5em Arial, sans-serif' }}>0000</div>
                </div>
            </div>

            <div className="w-100 d-flex flex-row mb-1">
                <div className="bg-success " style={{ width: '20px' }} />
                <div className="flex-grow-1 d-flex flex-row" style={{ padding: '2px' }}>
                    <div className="text-black align-self-end px-1" style={{ font: 'bold .9em Arial, sans-serif' }}>PRICE</div>
                    <div className="flex-grow-1"></div>
                    <div className="text-black align-self-end" style={{ font: 'lighter 1.5em Arial, sans-serif' }}>0000</div>
                </div>
            </div>

            <div className="w-100 d-flex flex-row mb-1">
                <div className="bg-success " style={{ width: '20px' }} />
                <div className="flex-grow-1 d-flex flex-row" style={{ padding: '2px' }}>
                    <div className="text-black align-self-end px-1" style={{ font: 'bold .9em Arial, sans-serif' }}>STOPLOSS</div>
                    <div className="flex-grow-1"></div>
                    <div className="text-black align-self-end" style={{ font: 'lighter 1.5em Arial, sans-serif' }}>0000</div>
                </div>
            </div>
            
            <div className="w-100 d-flex flex-row mb-1">
                <div className="bg-success " style={{ width: '20px' }} />
                <div className="flex-grow-1 d-flex flex-row" style={{ padding: '2px' }}>
                    <div className="text-black align-self-end px-1" style={{ font: 'bold .9em Arial, sans-serif' }}>TARGET</div>
                    <div className="flex-grow-1"></div>
                    <div className="text-black align-self-end" style={{ font: 'lighter 1.5em Arial, sans-serif' }}>0000</div>
                </div>
            </div>

            <div className="bg-black my-2" style={{ height: '2px' }} />

            {/* STATS */}
            <div className="mb-1">
                <div className="text-black mb-1" style={{ font: '1em Aral, sans-serif' }}>20,000</div>

                {/* <div className="d-flex flex-row">
                    <div className="border-top border-3 border-danger w-100 me-1">
                        <div className="text-black px-1" style={{ font: '.8em Arial, sans-serif' }}>LTP - Stoploss</div>
                        <div className="text-black px-1" style={{ font: '.8em Arial, sans-serif' }}>(LTP -Stoploss)%</div>
                    </div>
                    <div className="border-top border-3 border-success w-100 ms-1">
                        <div className="text-black px-1" style={{ font: '.8em Arial, sans-serif' }}>LTP - Target</div>
                        <div className="text-black px-1" style={{ font: '.8em Arial, sans-serif' }}>(LTP -Target)%</div>
                    </div>
                </div> */}
            </div>

            <div className="bg-black my-2" style={{ height: '2px' }} />

            {/* BUY / SELL */}
            <div className="d-flex flex-row mb-1">
                <div className="btn w-100 bg-success rounded-0 me-1" style={{ font: 'bold 1.25em Arial, sans-serif', lineHeight: 1 }}>BUY</div>
                <div className="btn w-100 bg-danger rounded-0 ms-1" style={{ font: 'bold 1.25em Arial, sans-serif', lineHeight: 1 }}>SELL</div>
            </div>

            <div className="bg-black my-2" style={{ height: '2px' }} />

            {/* POSITION */}
            <div className="mb-2">
                <div className="text-black" style={{ font: 'bold 1.1em Arial, sans-serif' }}>POSITION</div>
                <div className="" style={{ font: '.9em Arial, sans-serif' }}>
                    {/* <div className="d-flex flex-row justify-content-between">
                        <div className="text-black">Price</div>
                        <div className="text-black">P&L</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                        <div className="text-black">Stoploss</div>
                        <div className="text-black">Target</div>
                    </div> */}
                </div>
            </div>

            <div className="bg-black my-2" style={{ height: '2px' }} />

            {/* ORDER LIST */}
            <div className="mb-1">
                <div className="text-black mb-1" style={{ font: 'bold 1.1em Arial, sans-serif' }}>ORDERS</div>

                {/* <div className="d-flex flex-column">
                    <div className="p-2 px-5 mb-1" style={{ backgroundColor: '#333' }}></div>
                    <div className="p-2 px-5 mb-1" style={{ backgroundColor: '#333' }}></div>
                    <div className="p-2 px-5" style={{ backgroundColor: '#333' }}></div>
                </div> */}
            </div>
        </div>
    )
}

export default Transaction