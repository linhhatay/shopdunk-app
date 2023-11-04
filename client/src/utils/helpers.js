export const formatCurrency = (value) =>
    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value).replace(/\s+/g, '');

export function calculateDiscountedPrice(originalPrice, discount) {
    if (originalPrice < 0 || discount < 0 || discount > 100) {
        return 'Giá hoặc giảm giá không hợp lệ';
    }

    const discountedPrice = originalPrice - originalPrice * (discount / 100);

    return formatCurrency(discountedPrice);
}
