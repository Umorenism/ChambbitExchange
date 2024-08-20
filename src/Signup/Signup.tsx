import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import logo from "../asset/nlogo.png";
import { FaGoogle } from "react-icons/fa";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://backend.chambit.exchange/api/auth/signup",
        { email }
      );

      if (response.data.message === "sign up successfully") {
        console.log("Sign up successfully", response.data);
        localStorage.removeItem("userToken");
        localStorage.setItem("userToken", response.data.token);

        navigate("/otp");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex bg-gray-950 text-white justify-center items-center py-20 px-4 h-screen"
      style={{ overflowY: "auto" }}
    >
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-[50px] mt-10" />
        </div>
        <h1 className="text-2xl mb-4 mt-5 font-bold text-center">Sign Up</h1>
        <p className="text-sm text-start mb-2">Signup with your email</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 rounded-full border bg-transparent p-2 ml-2 outline-none hover:border-green-400"
            />
          </div>

          <button
            type="submit"
            className={`w-full rounded-full py-2 mt-4 mb-2 text-md text-white font-bold ${
              loading ? "bg-gray-500 cursor-not-allowed" : "bg-[#1DD55E]"
            }`}
            disabled={loading} // Disable the button when loading
          >
            {loading ? (
              <div className="flex justify-center items-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V4a10 10 0 00-10 10h2zm16 0a8 8 0 00-8 8v-2a10 10 0 0110-10h-2z"
                  />
                </svg>
                Loading...
              </div>
            ) : (
              "Next"
            )}
          </button>
        </form>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        <div className="flex justify-center items-center gap-1">
          <hr className="w-1/2 h-1 text-slate-400" />
          <p className="text-xl mb-1">Or</p>
          <hr className="w-1/2 h-1 text-slate-400" />
        </div>
        <button
          className="w-full bg-transparent border rounded-full py-2 mt-10 mb-2 flex justify-center items-center text-md text-white font-bold gap-4"
          style={{ marginTop: "0px" }}
        >
          <FaGoogle className="text-red-700" /> Sign up with Google
        </button>
      </div>
    </div>
  );
};
