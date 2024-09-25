import { Link } from "react-router-dom";
import Input from "../../../components/input";
import { useState } from "react";
import { createProductApi } from "../../../services/apis/product";
import toast from "react-hot-toast";

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    brand: "",
    price: 0,
    discount: 0,
    description: "",
    thumb: null as File | null,
    images: [] as File[],
    skus: [{ stock: 0, price: 0, color: "", storage: "", sku: "" }],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleFileThumb = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      thumb: files ? files[0] : null, // Chỉ lấy ảnh đầu tiên
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const fileArray = Array.from(files || []); // Chuyển FileList thành array
    setFormData((prevState) => ({
      ...prevState,
      images: fileArray, // Đảm bảo lưu mảng ảnh cho images
    }));
  };

  const handleSkuChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const updatedSkus = [...formData.skus];
    updatedSkus[index] = { ...updatedSkus[index], [name]: value };
    setFormData((prevState) => ({
      ...prevState,
      skus: updatedSkus,
    }));
  };

  const addNewSku = () => {
    setFormData((prevState) => ({
      ...prevState,
      skus: [
        ...prevState.skus,
        { stock: 0, price: 0, color: "", storage: "", sku: "" }, // Giá trị mặc định cho SKU mới
      ],
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Tạo FormData mới
    const data = new FormData();

    // Thêm các trường vào FormData
    data.append("title", formData.title);
    data.append("category", formData.category);
    data.append("brand", formData.brand);
    data.append("price", formData.price.toString());
    data.append("discount", formData.discount.toString());
    data.append("description", formData.description);

    // Thêm ảnh thumb
    if (formData.thumb) {
      data.append("thumb", formData.thumb);
    }

    // Thêm tất cả hình ảnh vào FormData
    formData.images.forEach((image) => {
      data.append("images", image);
    });

    // Thêm thông tin SKU
    formData.skus.forEach((sku, index) => {
      data.append(`skus[${index}][sku]`, sku.sku);
      data.append(`skus[${index}][stock]`, sku.stock.toString());
      data.append(`skus[${index}][color]`, sku.color);
      data.append(`skus[${index}][storage]`, sku.storage);
      data.append(`skus[${index}][price]`, sku.price.toString());
    });

    const response = await createProductApi(data);
    if (response.data.status == "success") {
      toast.success("Create product is successful");
    }
    console.log(formData);
  };

  return (
    <div className="px-4 py-6 md:px-10 lg:px-16">
      <div className="bg-white rounded-md shadow-lg p-6">
        <form onSubmit={handleSubmit}>
          {/* Upload Thumbnail */}
          <div className="mb-6">
            <h3 className="font-bold text-lg mb-2">Add Product Thumb</h3>
            <Input
              type="file"
              id="thumb"
              classN="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
              onCh={handleFileThumb} // Thay đổi hàm này
            />
            {formData.thumb && (
              <img
                src={URL.createObjectURL(formData.thumb)}
                alt="Product Thumbnail"
                className="w-full h-32 object-cover rounded mt-4"
              />
            )}
          </div>

          {/* Upload Product Images */}
          <div className="mb-6">
            <h3 className="font-bold text-lg mb-2">Add Product Images</h3>
            <Input
              type="file"
              id="images"
              multiple
              classN="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
              onCh={handleFileChange}
            />
          </div>

          {/* Hiển thị hình ảnh đã chọn */}
          <div className="mb-6">
            <h3 className="font-bold text-lg mb-2">Selected Images</h3>
            <div className="grid grid-cols-3 gap-4">
              {formData.images.map((image, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt={`Product Image ${index + 1}`}
                  className="w-full h-32 object-cover rounded"
                />
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="mb-6">
            <h3 className="font-bold text-lg mb-4">Product Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="title" className="block mb-2">
                  Product Name
                </label>
                <Input
                  type="text"
                  id="title"
                  classN="w-full border px-4 py-2 rounded-md focus:ring focus:ring-blue-300"
                  place="Product name"
                  val={formData.title}
                  onCh={handleChange}
                />
              </div>
              <div>
                <label htmlFor="category" className="block mb-2">
                  Category Name
                </label>
                <Input
                  type="text"
                  id="category"
                  classN="w-full border px-4 py-2 rounded-md focus:ring focus:ring-blue-300"
                  place="Category name"
                  val={formData.category}
                  onCh={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="brand" className="block mb-2">
                  Brand
                </label>
                <Input
                  type="text"
                  id="brand"
                  classN="w-full border px-4 py-2 rounded-md focus:ring focus:ring-blue-300"
                  place="Brand"
                  val={formData.brand}
                  onCh={handleChange}
                />
              </div>
              <div>
                <label htmlFor="price" className="block mb-2">
                  Price
                </label>
                <Input
                  type="number"
                  id="price"
                  classN="w-full border px-4 py-2 rounded-md focus:ring focus:ring-blue-300"
                  place="Price"
                  val={formData.price}
                  onCh={handleChange}
                />
              </div>
              <div>
                <label htmlFor="discount" className="block mb-2">
                  Discount
                </label>
                <Input
                  type="number"
                  id="discount"
                  classN="w-full border px-4 py-2 rounded-md focus:ring focus:ring-blue-300"
                  place="Discount"
                  val={formData.discount}
                  onCh={handleChange}
                />
              </div>
            </div>
          </div>

          {/* SKU and Stock */}
          <div className="mb-6">
            <h3 className="font-bold text-lg mb-4">SKU & Stock Information</h3>
            {formData.skus.map((sku, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4"
              >
                <div>
                  <label htmlFor={`sku-${index}`} className="block mb-2">
                    SKU ID
                  </label>
                  <Input
                    type="text"
                    name="sku"
                    classN="w-full border px-4 py-2 rounded-md focus:ring focus:ring-blue-300"
                    place="SKU ID"
                    val={sku.sku}
                    onCh={(e) => handleSkuChange(e, index)}
                  />
                </div>
                <div>
                  <label htmlFor={`stock-${index}`} className="block mb-2">
                    Stock
                  </label>
                  <Input
                    type="number"
                    name="stock"
                    classN="w-full border px-4 py-2 rounded-md focus:ring focus:ring-blue-300"
                    place="Stock"
                    val={sku.stock}
                    onCh={(e) => handleSkuChange(e, index)}
                  />
                </div>
                <div>
                  <label htmlFor={`color-${index}`} className="block mb-2">
                    Color
                  </label>
                  <Input
                    type="text"
                    name="color"
                    classN="w-full border px-4 py-2 rounded-md focus:ring focus:ring-blue-300"
                    place="Color"
                    val={sku.color}
                    onCh={(e) => handleSkuChange(e, index)}
                  />
                </div>
                <div>
                  <label htmlFor={`storage-${index}`} className="block mb-2">
                    Storage
                  </label>
                  <Input
                    type="text"
                    name="storage"
                    classN="w-full border px-4 py-2 rounded-md focus:ring focus:ring-blue-300"
                    place="Storage"
                    val={sku.storage}
                    onCh={(e) => handleSkuChange(e, index)}
                  />
                </div>
                <div>
                  <label htmlFor={`price-${index}`} className="block mb-2">
                    Price
                  </label>
                  <Input
                    type="number"
                    name="price"
                    classN="w-full border px-4 py-2 rounded-md focus:ring focus:ring-blue-300"
                    place="Price"
                    val={sku.price}
                    onCh={(e) => handleSkuChange(e, index)}
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addNewSku}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Add SKU
            </button>
          </div>

          <div className="mb-6">
            <label htmlFor="description" className="block mb-2">
              Description
            </label>
            <textarea
              id="description"
              className="w-full border px-4 py-2 rounded-md focus:ring focus:ring-blue-300"
              placeholder="Product description"
              value={formData.description}
              onChange={handleChange}
              rows={5} // Số dòng của textarea
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Submit Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
