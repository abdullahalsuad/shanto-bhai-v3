/* eslint-disable react/prop-types */
const LoveCard = ({ formData, handleChange, handleSubmit, message }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Love Checker</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your name..."
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="age"
            placeholder="Enter your age..."
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.age}
            onChange={handleChange}
            required
          />

          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
                required
              />{" "}
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
                required
              />{" "}
              Female
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-700 text-white py-2 rounded"
          >
            Check Love
          </button>
        </form>

        {/* {message && <p className="mt-4 text-center font-semibold">{message}</p>} */}
        {message ? (
          <div className="mt-4 text-center">
            <div className="space-y-1">
              <p>My love for you grows every day,</p>
              <p>Boundless as the ocean&apos;s spray.</p>
              <p>From the depths of my heart, I say,</p>
              <p>I love you more than words convey.</p>
              <p>
                I love you from my heart{" "}
                <b className="text-red-600">{message}</b> ❤️
              </p>
              <p>ha ha ha Etai Bastob 😂</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default LoveCard;
