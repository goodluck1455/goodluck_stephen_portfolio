import { useState } from "react";

declare global {
    interface Window {
      Tawk_API?: {
        setAttributes: (
          data: { name?: string; email?: string },
          callback?: (error: any) => void
        ) => void;
      };
    }
  }
  

const UserInfoForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if Tawk API is available
    if (window.Tawk_API) {
      window.Tawk_API.setAttributes({
        name,
        email,
      }, (error: any) => {
        if (error) console.error("Tawk API error:", error);
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-md shadow-md max-w-sm">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded placeholder:text-gray-400 placeholder:opacity-70"
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded placeholder:text-gray-400 placeholder:opacity-70"
        required
      />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Start Chat
      </button>
    </form>
  );
};

export default UserInfoForm;
