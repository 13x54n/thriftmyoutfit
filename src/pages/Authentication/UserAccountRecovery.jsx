import React from "react";
import { sendUserPasswordResetEmail } from "../../utils/authentication";
import { useNavigate } from "react-router-dom";

export default function UserAccountRecovery() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleAccountRecovery = async (e) => {
    e.preventDefault();
    setLoading(true);
    sendUserPasswordResetEmail(email);
    setLoading(false);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-16 w-auto"
            src="https://ik.imagekit.io/13x54r/ThrifyMyOutfit/White%20Retro%20Smile%20Clothing%20Company%20Logo.png?updatedAt=1694628876023"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-semibold leading-9 tracking-tight text-gray-900">
            Recover your account on ThriftMyOutfit.
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            onSubmit={(e) => handleAccountRecovery(e)}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading && true}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send Account Recovery Email
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Have an account?{" "}
            <a
              onClick={() => navigate("/user/login")}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
            >
              Login instead.
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
