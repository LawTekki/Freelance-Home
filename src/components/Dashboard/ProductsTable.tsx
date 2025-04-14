interface Product {
  id: number;
  name: string;
  description: string;
  practiceAreas: string[];
  documentType: string;
  language: string;
  price: string;
  soldQuantity: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "The 4 keys of law",
    description: "It allows users to concern...",
    practiceAreas: ["Banking law", "Bioethics"],
    documentType: "PDF",
    language: "French",
    price: "$500",
    soldQuantity: 28,
  },
  {
    id: 2,
    name: "The 4 keys of law",
    description: "It allows users to concern...",
    practiceAreas: ["Banking law", "Bioethics"],
    documentType: "JPG",
    language: "French",
    price: "$500",
    soldQuantity: 28,
  },
  {
    id: 3,
    name: "The 4 keys of law",
    description: "It allows users to concern...",
    practiceAreas: ["Banking law", "Bioethics"],
    documentType: "PDF",
    language: "French",
    price: "$500",
    soldQuantity: 28,
  },
];

export const ProductsTable = () => {
  return (
    <section className="w-full font-medium mt-6">
      <div className="flex w-full items-center justify-between mb-4">
        <h2 className="text-[#1A011E] text-xl leading-[1.3] tracking-[-0.4px] font-bold">
          Top Products
        </h2>
        <button className="text-[#6B047C] text-base tracking-[-0.32px] underline">
          See more
        </button>
      </div>

      <div className="border border-[color:var(--Grey-2,#E6E6E6)] bg-white w-full overflow-hidden text-sm tracking-[-0.28px] leading-[1.3] rounded-[8px_8px_0px_0px] border-solid">
        <table className="w-full">
          <thead className="bg-neutral-50 text-xs text-[#1A011E] tracking-[-0.24px]">
            <tr>
              <th className="px-1.5 py-5 text-left">S/N</th>
              <th className="px-3.5 py-5 text-left">Product name</th>
              <th className="px-[21px] py-5 text-left">Description</th>
              <th className="px-4 py-5 text-left">Practice area</th>
              <th className="px-[11px] py-5 text-left">Document type</th>
              <th className="px-3.5 py-5 text-left">Language</th>
              <th className="px-2.5 py-5 text-left">Prices</th>
              <th className="px-[13px] py-5 text-left">Sold Quantity</th>
            </tr>
          </thead>
          <tbody className="text-[#808080]">
            {products.map((product) => (
              <tr key={product.id} className="border-b border-[#F2F2F2]">
                <td className="px-1.5 py-5">{product.id}</td>
                <td className="px-3.5 py-[19px]">{product.name}</td>
                <td className="px-[21px] py-[19px]">{product.description}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    {product.practiceAreas.map((area, index) => (
                      <span
                        key={index}
                        className={`rounded p-1 text-xs ${
                          index === 0
                            ? "bg-[#F5FFFB] text-[#1C7C04]"
                            : "bg-[rgba(255,251,245,1)] text-[#FF9500]"
                        }`}
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-[11px] py-[19px]">{product.documentType}</td>
                <td className="px-3.5 py-[19px]">{product.language}</td>
                <td className="px-2.5 py-[19px]">{product.price}</td>
                <td className="px-[13px] py-[19px]">{product.soldQuantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
