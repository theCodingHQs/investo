import React from "react";

const InquiryForm = () => {
  return (
    <div className="border bg-white p-5 rounded-xl shadow-md h-full">
      <h3 className="text-lg font-semibold">Thinking of buying?</h3>

      <div className="flex flex-col gap-3 mt-4">
        <input
          type="text"
          placeholder="Name"
          className="border rounded px-3 py-2 w-full"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="border rounded px-3 py-2 w-full"
        />
        <textarea
          placeholder="Comment"
          className="border rounded px-3 py-2 w-full h-24"
        ></textarea>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-md w-full mt-2">
          Inquire Now
        </button>
      </div>
    </div>
  );
};

export default InquiryForm;
