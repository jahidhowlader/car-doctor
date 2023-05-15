import {  useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
// import { updateProfile } from "firebase/auth";
import authImage from '../../assets/images/login/login.svg'
import { AuthContext } from "../../context/AuthProvider";
import { updateProfile } from "firebase/auth";

const Signup = () => {

    // Context API
    const { createUser } = useContext(AuthContext)
 
    // Navigate Varriable
    // const nevigate = useNavigate()

    // All State Here
    const [error, setError] = useState('')

    // Name Validation
    const [userName, setUserName] = useState('')
    const [userNameError, setUserNameError] = useState('')

    // Email Validation
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')

    // PassWord Validation
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    // Confirm Password
    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)


    // Terms And condition state and Handler
    const [accepted, setAccepted] = useState(false)

    // Handler Terms And Condition
    const handlerterms = event => {
        setAccepted(event.target.checked)
    }

    // handle name input
    const handlerUserName = e => {
        const userNameInput = e.target.value
        setUserName(userNameInput)
        setUserNameError('')
    }

    // handle email input
    const handlerEmail = e => {
        const emailInput = e.target.value
        setEmail(emailInput)

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput)) {
            setEmailError('Invaild Email Address')
        } else {
            setEmailError('')
        }
    }

    // handle password input
    const hadlerPassword = e => {
        const passwordInput = e.target.value
        setPassword(passwordInput)

        // console.log(password);

        if (passwordInput.length < 6) {
            setPasswordError('Password will be at list 6 character..')

        } else if (!/(?=.*[A-Z])(?=.*[a-z])/.test(passwordInput) || !(/(?=.*\d)/.test(passwordInput))) {
            setPasswordError('Password will be 1 number, 1 capital and 1 smaller character')

        } else {
            setPasswordError('')
            setPassword(passwordInput)
        }
    }

    // Handler Confirm Password
    const hadlerConfirmPassword = e => {
        const confirmPasswordInput = e.target.value
        setConfirmPassword(confirmPasswordInput)

        if (password !== confirmPasswordInput) {
            setConfirmPasswordError('Password and Confirm Password does not match')
        } else if (!passwordError && (password === confirmPasswordInput)) {
            setConfirmPasswordError('')
            setConfirmPassword(confirmPasswordInput)
        }

        console.log(confirmPasswordInput === password);
    }

    // pass show and hide handler
    const toggoleShowPassword = () => {

        setShowPassword(!showPassword)
    }

    // Show Confirm Password troggle Handler
    const toggoleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }

    // Set Location for Navigate
    // const location = useLocation()
    // const from = location?.state?.from?.pathname || '/'

    // Handler Form Submit
    const handlerSubmit = e => {

        e.preventDefault()
        const form = e.target
        const name = form.name.value
        // const photo = form.photo.value

        if (!name) {
            setUserNameError('Username is Required')
            form.name.focus()
            return

        } else if (!email) {
            setEmailError('Invaild Email Address')
            form.email.focus()
            return

        } else if (emailError) {
            setEmailError('Invaild Email Address')
            form.email.focus()
            return
        }
        else if (!password) {
            setPasswordError('Password will be at list 6 character..')
            form.password.focus()
            return

        } else if (passwordError) {
            form.password.focus()
            return

        } else if (!confirmPassword) {
            setConfirmPasswordError('Password and Confirm Password does not match')
            form.confirmPassword.focus()
            return

        } else if (confirmPasswordError) {
            form.confirmPassword.focus()
            return

        } else {
            createUser(email, password)
                .then((userCredential) => {

                    // Update Profile function
                    updateProfile(userCredential.user, {
                        displayName: '123456789',
                    })
                })
                .then(() => {
                    setUserName('')
                    setEmail('')
                    setPassword('')
                    setConfirmPassword('')
                    // nevigate(from, { replace: true })
                    toast.success('Successfully created Account', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                })
                .catch(e => {
                    const errorMessage = e.code.slice(5, (e.code.length))
                    setError(errorMessage)
                    if (errorMessage == 'email-already-in-use') {
                        form.email.focus()
                        setEmailError(e.code.slice(5, (e.code.length)))
                        console.log(e);
                    }
                })
        }
    }

    return (
        <section className=' mx-5 md:mx-0 py-12'>
           <div className="grid grid-cols-2 items-center gap-24">
                <div>
                    <img src={authImage} alt={authImage} />
                </div>
                <div className='flex justify-center items-center bg-white border border-black border-opacity-20 rounded-lg p-5 lg:p-16'>
                <div className='w-full '>

                    {
                        error && <span className='my-5 text-error-clr bg-error-clr py-3 block bg-opacity-20 font-bold px-2 text-center rounded'>{error}</span>
                    }

                    <h3 className='text-2xl lg:text-4xl font-bold lg:pb-6 text-center'>Sign Up</h3>

                    <form onSubmit={handlerSubmit} className='pt-5'>

                        <div className="form-control w-full ">
                            <label className="label font-bold">Name</label>
                            <input onChange={handlerUserName} type="text" name='name' placeholder="Enter your Name" value={userName} className={`input input-bordered w-full focus:border-black ${userNameError && 'input-error focus:border-error-clr'} ${userName && !userNameError && 'input-success focus:border-green'}`} />
                            {
                                userNameError && <span className="text-error-clr"><small>{userNameError}</small></span>
                            }
                        </div>

                        <div className="form-control w-full ">
                            <label className="label font-bold">Email</label>
                            <input onChange={handlerEmail} type="email" name='email' value={email} placeholder="Enter your email" className={`input input-bordered w-full focus:border-black ${emailError && 'input-error focus:border-error-clr'} ${email && !emailError && 'input-success focus:border-green'}`} />
                            {
                                emailError && <span className="text-error-clr"><small>{emailError}</small></span>
                            }
                        </div>

                        <div className="form-control w-full pt-2 ">
                            <label className="label font-bold">Password</label>
                            <div className='relative'>
                                <input onChange={hadlerPassword} type={`${showPassword ? 'text' : 'password'}`} placeholder="Enter your password" name='password' value={password} className={`input input-bordered w-full focus:border-black ${passwordError && 'input-error focus:border-error-clr'} ${password && !passwordError && 'input-success focus:border-green'}`} />
                                {
                                    showPassword ?
                                        <FaEyeSlash onClick={toggoleShowPassword} className='absolute top-2 right-3 bg-white pl-2 cursor-pointer text-3xl' ></FaEyeSlash> :
                                        <FaEye onClick={toggoleShowPassword} className='absolute top-2 right-3 bg-white pl-2 cursor-pointer text-3xl' ></FaEye>
                                }
                                {
                                    passwordError && <span className="text-error-clr"><small>{passwordError}</small></span>
                                }
                            </div>
                        </div>

                        <div className="form-control w-full pt-2 ">
                            <label className="label font-bold">Confirm Password</label>
                            <div className='relative'>
                                <input onChange={hadlerConfirmPassword} type={`${showConfirmPassword ? 'text' : 'password'}`} placeholder="Enter your password" name='confirmPassword' value={confirmPassword} className={`input input-bordered w-full focus:border-black ${confirmPasswordError && 'input-error focus:border-error-clr'} ${confirmPassword && !confirmPasswordError && 'input-success focus:border-green'}`} />
                                {
                                    showConfirmPassword ?
                                        <FaEyeSlash onClick={toggoleShowConfirmPassword} className='absolute top-2 right-3 bg-white pl-2 cursor-pointer text-3xl' ></FaEyeSlash> :
                                        <FaEye onClick={toggoleShowConfirmPassword} className='absolute top-2 right-3 bg-white pl-2 cursor-pointer text-3xl' ></FaEye>
                                }
                                {
                                    confirmPasswordError && <span className="text-error-clr"><small>{confirmPasswordError}</small></span>
                                }
                            </div>
                        </div>
                        
                        <div className="pt-5 flex items-center">
                            <input onClick={handlerterms} className="accent-root ml-2 mr-3" type="checkbox" name="accept" />
                            <small>
                                <label className="text-root">
                                    Accept <span className="font-semibold">Trerms and Condition</span>
                                </label>
                            </small>
                        </div>

                        <input type="submit" value='Sign up' className='form-submit-btn mt-5' disabled={!accepted ? true : false} />
                    </form>

                    <p className='text-center mt-5'>You have an account? <Link to='/auth/signin' className='font-semibold text-root'> Sign in</Link></p>
                </div>
            </div>
           </div>

        </section>
    );
};

export default Signup;