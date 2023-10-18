import "./Products.css";
import { AddToCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";

export function Products({ products }) {
const { addToCart } = useCart()


  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>
              {
                // le paso el product a la funcion addToCart del context
              }
              <button onClick={() => addToCart(product)}>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
