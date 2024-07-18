import { useId, useState, useTransition } from "react";
import { ProductList } from "./product-list";
import { generateProducts } from "../../services/api";
import { Input } from "@nextui-org/react";

const dummyProducts = generateProducts();

function filterProducts(filterTerm: string) {
  if (!filterTerm) {
    return dummyProducts;
  }
  return dummyProducts.filter((product) => product.includes(filterTerm));
}

export const ConcurrencyExample = () => {
  const id = useId()
  const [isPending, startTransition] = useTransition();
  const [filterTerm, setFilterTerm] = useState("");

  const filteredProducts = filterProducts(filterTerm);

  function updateFilterHandler(event: React.ChangeEvent<HTMLInputElement>) {
    startTransition(() => {
      setFilterTerm(event.target.value);
    });
    //setFilterTerm(event.target.value);
  }

  return (
    <div className="flex flex-col w-full">
      <Input type="text" onChange={updateFilterHandler} label={'Search'} />
      {/* {isPending && <p style={{color: 'white'}}>Updating products...</p>} */}
      <ProductList products={filteredProducts} />
    </div>
  );
};
