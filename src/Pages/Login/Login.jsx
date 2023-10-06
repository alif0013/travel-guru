import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";


const Login = () => {

    const { signInWithGoogle, signIn } = useContext(AuthContext);
// ei location ar navigate ta login hobar pore user ke home page e redirect korte use hobe
    const location = useLocation();
    const navigate = useNavigate();




    // google sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(res => console.log(res.user))
            .catch(err => console.log(err))
    }

    // user email and password Login 
 
    const handleLogin = e =>{
        e.preventDefault()

        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')

        // created user and pass diye user login

        signIn(email, password)
        .then(res => {
            console.log(res.user)
            toast.success('User logged in successfully');
             // navigate after login
             navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            toast.error(error.message)
        })

        // note: logout ta conditional diye navbar e jekhane login btn ace sekhane kora ace


    }




    return (

        <div className="w-full mx-auto mt-10 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form onSubmit={handleLogin} className="space-y-6">

                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                </div>
                <div>
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>
                <div className="flex items-start">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                    </div>
                    <a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                </div>
                <button  type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                <button onClick={() => handleGoogleSignIn()} type="submit" className="w-full border  hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login With Google</button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered? <Link to="/registration" className="text-blue-700 hover:underline dark:text-blue-500">Please Register</Link>
                </div>
            </form>
        </div>

    );
};

export default Login;