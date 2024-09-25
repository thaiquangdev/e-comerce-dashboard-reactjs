import { Link } from "react-router-dom";
import Input from "../../components/input";

const CreateCategory = () => {
  return (
    <div className="bg-[#faf7f8] h-full">
      <div className="bg-white my-5 mx-4 py-3 px-3">
        <h2 className="play-bold text-md">Create Categories</h2>

        <div className="py-6">
          <form action="">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="play-regular text-sm">
                Category Name
              </label>
              <Input
                type="text"
                id="name"
                classN="px-3 py-2 play-regular text-sm w-[50%] bg-[#ebe8e9]"
                place="Category Name"
              />
            </div>
            <div className="flex items-center gap-3 mt-[20px]">
              <button
                type="submit"
                className="px-3 py-2 play-bold border rounded-md"
              >
                Create Categories
              </button>
              <Link
                to=""
                className="border px-2 py-2 play-regular rounded-md bg-[#fe6c2f] text-white"
              >
                Back To List
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;
