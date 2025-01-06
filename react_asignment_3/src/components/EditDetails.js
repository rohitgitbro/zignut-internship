import React, { useState } from "react";

const EditDetails = ({ user, onSave, onClose }) => {
  const [formData, setFormData] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <div className="flex justify-between items-center" >
        <h2 className="text-2xl font-bold mb-4">Edit User</h2>
        <button
            onClick={onClose}
            className="text-2xl font-bold mb-4"
          >
          X
        </button>
        </div>
        <div className="flex items-center" >
          <label for='name' className="p-2 mb-4">Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full border rounded-lg p-2 mb-4"
        />
        </div>

        <div className="flex items-center" >
        <label for='name' className="p-2 mb-4">Email</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border rounded-lg p-2 mb-4"
        />
        </div>

        <div className="flex items-center" >
        <label for='name' className="p-2 mb-4">Phone</label>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full border rounded-lg p-2 mb-4"
        />
        </div>

        <div className="flex items-center" >
        <label for='name' className="p-2 mb-4">Website</label>
        <input
          name="website"
          value={formData.website}
          onChange={handleChange}
          placeholder="Website"
          className="w-full border rounded-lg p-2 mb-4"
        />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            onClick={() => onSave(formData)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditDetails;
