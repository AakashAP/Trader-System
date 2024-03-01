import axios from "axios";


function login(credential) {
    const { username, password, pin } = credential; 

    const first_response = this.session.post('https://kite.zerodha.com/api/login', {
        user_id: username,
        password: password } );
    
    const second_response = this.session.post('https://kite.zerodha.com/api/twofa', {
        request_id: first_response.data.data.request_id,
        user_id: first_response.data.data.user_id,
        twofa: pin } );
    
    const enctoken = second_response.headers['set-cookie']
        .find(cookie => cookie.startWith('enctoken'))
        .split(';')[0]
        .split('=')[1];
    
    if (enctoken) { return enctoken; }
    else { throw new Error('Failed to obtain enctoken'); }
}


class API {
    constructor(credential, enctoken) {
        this.rootURL = 'https://api.kite.trade';
        let key = enctoken;

        if (!key) { key = login(credential) }

        this.session = axios.create({ headers: { Authorization: `enctoken ${enctoken}` } });
        this.statue();
    }

    status() {
        try {
            const response = this.session.get(this.rootURL);
            return true;
        }
        catch (error) { return false; }
    }


    //Instruments
    Instruments() {
        try {
            const response = this.session.get(`${this.rootURL}/instruments`);
            return response.data;
        }
        catch (error) { return new Error('API initialization failed. Status is false.'); }
    }

    //Historical Data
    HistoricalData(token, from_, to_, interval, continuous = false, io = false) {
        try {
            const parameters = {
                from: from_,
                to: to_,
                interval: interval,
                continuous: continuous ? 1 : 0,
                oi: oi ? 1 : 0 };

            const response = this.session.get(`${this.rootURL}/instruments/historical/${token}/${interval}`, {
                params: parameters, } );

        } catch (error) { 
            console.error('Error in Historical function:', error); }
    }


    // Quote
    Quote(code) {
        try {
            const response = this.session.get(`${this.rootURL}/quote`, {
                params: { i: code }
            });
            return response.data;
        } catch (error) { throw error; }
    }

    // LTP
    LTP(code) {
        try {
            const response = this.session.get(`${this.rootURL}/quote/ltp`, {
                params: { i: code }
            });
            return response.data;
        } catch (error) { throw error; }
    }


    // Margins
    Margins() {
        try {
            const response = this.session.get(`${this.rootURL}/user/margins`);
            return response.data;
        } catch (error) { throw error; }
    }

    // Orders
    Orders() {
        try {
            const response = this.session.get(`${this.rootURL}/orders`);
            return response.data;
        } catch (error) { throw error; }
    }


    // Positions
    Positions() {
        try {
            const response = this.session.get(`${this.rootURL}/portfolio/positions`);
            return response.data;
        } catch (error) { throw error; }
    }

    // Holdings
    Holdings() {
        try {
            const response = this.session.get(`${this.rootURL}/portfolio/holdings`);
            return response.data;
        } catch (error) { throw error; }
    }

    // Profile
    Profile() {
        try {
            const response = this.session.get(`${this.rootURL}/user/profile`);
            return response.data;
        } catch (error) { throw error; }
    }


    // Buy
    
    
    // Sell
    
    
    // Modify

}

export { login as Login, API };