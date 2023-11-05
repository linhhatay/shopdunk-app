import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as httpRequest from '~/utils/httpRequest';

function OrderReturn() {
    const location = useLocation();
    const query = location.search;
    const [code, setCode] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getOrderReturn = async () => {
            try {
                const res = await httpRequest.get('/orders/vnpay_ipn' + query);
                setCode(res.RspCode);
            } catch (error) {
                console.log('Đã có lỗi' + error);
            } finally {
                setIsLoading(false);
            }
        };
        getOrderReturn();
    }, [query]);

    return (
        <div>
            {isLoading ? (
                <p style={{ textAlign: 'center', paddingTop: '16px', fontSize: '16px' }}>Đang xử lí giao dịch...</p>
            ) : (
                <h1 style={{ textAlign: 'center', paddingTop: '16px', fontSize: '16px' }}>
                    {code === '00' ? `Giao dịch thành công` : `Giao dịch thất bại`}
                </h1>
            )}
        </div>
    );
}

export default OrderReturn;
