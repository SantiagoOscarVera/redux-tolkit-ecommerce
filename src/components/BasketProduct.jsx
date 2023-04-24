import { useSelector } from 'react-redux/';
import Product from './Product';

const BasketProduct = () => {
    const {products, total, amount} = useSelector((store) => store.basket)
    return (
        <div className='py-4'>
        <div>
            {products.map((item, i) =>
            <Product
            key={new Date().getTime + Math.random} // forma de darle un key dinamico al producto
            name={item.name}
            price={item.price}
            image={item.image}
            amount={item.amount}
            />
            )}
        </div>
        <div className='flex flex-row items-center justify-evenly py-8'>
            <p className='text-2x1 font-medium'>Total</p>
            <p className='text-2x1 font-medium'>${total}</p>
        </div>
        </div>
    );
};

export default BasketProduct;