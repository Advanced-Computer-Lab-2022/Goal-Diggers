import React, { useState } from 'react';
import { useEffect } from 'react';
import courseService from '../courseContainer';

const Wallet = () => {
    const [wallet, setWallet] = useState({});
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const getWallet = async () =>{
            const res = await courseService.getWallet();
            setWallet(res);
            setReady(true);
        }
        getWallet();
    }, [])
    return ( 
        <React.Fragment>
            {ready && 
                <React.Fragment>
                    <img src="./wallet.png" width={'40px'} alt="" /> <span style={{color : 'lightgreen'}}> {wallet.total} </span> USD.
                    {wallet.details.map(earn => {
                        return (<React.Fragment>
                                <br />
                                {earn.month} <br />
                                {earn.total} <br />
                            </React.Fragment>)
                    })
                    }
                </React.Fragment>
            }
            {!ready && 
                <div  className="container text-center" style={{marginBottom: '300px'}}>
                    <div className="container">
                        <div className="row">
                            <div id="loader">
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="loading"></div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </React.Fragment>
     );
}
 
export default Wallet;