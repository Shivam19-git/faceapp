import React, { useState } from "react";
import axios from "axios";

export default function StudentUpload() {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("face_image", image);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/upload-student/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Success:", response.data);
      alert("Student uploaded successfully!");
    } catch (error) {
      console.error("Error uploading student:", error);
    }
  };

  return (
    <div className="p-4">
      <h2>Upload Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <br />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
