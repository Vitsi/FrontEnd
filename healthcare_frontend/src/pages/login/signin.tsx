import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/auth";
import Navbar from "../../components/common/navbar";
import LoadingSpinner from "../../components/common/loadingSpinner";

interface FormData {
    email: string;
    password: string;
}

const Signin: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: ""
    });
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            //  // Password validation
            //  if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(formData.password)) {
            //     throw new Error("Password must be at least 8 characters long and contain at least one letter and one number");
            // }

            // Log the email when form is submitted
            console.log("Email:", formData.email);
            await AuthService.login(formData.email, formData.password);
            console.log("Login successful");
            navigate("/");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar/>
            <section className="signin">
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    disabled={loading}
                                >
                                    <span>Sign In</span>
                                </button>
                            </div>
                        </form>
                        <p className="mt-10 text-center text-sm text-gray-500">
                            Don't have an account?{' '}
                            <Link to="/signup-patient">
                                <a href="signup-patient" 
                                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                    Register
                                </a>
                            </Link>
                        </p>
                        {error && (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            {loading && <LoadingSpinner />}
        </>
    );
};

export default Signin;
