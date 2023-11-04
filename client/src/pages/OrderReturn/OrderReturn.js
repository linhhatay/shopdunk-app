import { useEffect, useState } from 'react';
import * as httpRequest from '~/utils/httpRequest';

function OrderReturn() {
    const [code, setCode] = useState();

    useEffect(() => {
        const getOrderReturn = async () => {
            const res = await httpRequest.get('/orders/vnpay_return');
            console.log(res);
            setCode(res.code);
        };
        getOrderReturn();
    }, []);

    return (
        <div>
            {code && (
                <h1 style={{ textAlign: 'center', paddingTop: '16px', fontSize: '16px' }}>Giao dịch thành công</h1>
            )}
        </div>
    );
}

export default OrderReturn;
