import { useDeferredValue } from "react";

export const ProductList = ({ products }: { products: string[] }) => {
 // const deferredProducts = useDeferredValue(products);

  return (
    <ul className="flex flex-col gap-4 mt-4">
      {products.map((product) => (
        <li className="bg-primary-500 py-2 px-6 rounded-md max-w-96 text-white" key={product}>{product}</li>
      ))}
    </ul>
  );
};
