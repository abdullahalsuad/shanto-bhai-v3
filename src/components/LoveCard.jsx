/* eslint-disable react/prop-types */
const LoveCard = ({ formData, handleChange, handleSubmit, message }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-5/12">
        <h2
          className="text-5xl font-bold text-center mb-4"
          style={{ fontFamily: '"Happy Monkey", serif' }}
        >
          Shanto<span className="text-pink-500">&apos;s</span> Love{" "}
          <span className="text-pink-500">Checker</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your name..."
            className="w-full p-2 border border-gray-300 rounded focus:border-pink-400 focus:ring-2 focus:ring-pink-400 focus:outline-none"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="age"
            placeholder="Enter your age..."
            className="w-full p-2 border border-gray-300 rounded focus:border-pink-400 focus:ring-2 focus:ring-pink-400 focus:outline-none"
            value={formData.age}
            onChange={handleChange}
            required
          />

          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
                required
              />{" "}
              Female
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
                required
              />{" "}
              Male
            </label>
          </div>

          <button
            type="submit"
            className="tracking-[5px] text-2xl w-full bg-pink-300 hover:bg-red-400 transition duration-300 ease-in-out p-4  text-black py-2 rounded font-extrabold cursor-pointer"
          >
            CHECK LOVER
          </button>
        </form>

        {/* {message && <p className="mt-4 text-center ">{message}</p>} */}
        <p
          className="mt-4  text-center text-pink-400 text-3xl"
          id="valobasha101"
          dangerouslySetInnerHTML={{ __html: message }}
        ></p>
      </div>
    </div>
  );
};

export default LoveCard;
