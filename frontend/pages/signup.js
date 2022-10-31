import React from 'react'
import Link from 'next/link'
const Signup = () => {
    return (
        <>

            <div class="bg-grey-lighter min-h-screen flex flex-col">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                        <input
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="fullname"
                            placeholder="Full Name"
                            required={true} />

                        <input
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email"
                            required={true} />
                        <input
                            type={'number'}
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="contactNumber"
                            placeholder="Contact Number"
                            required={false} />

                        <input
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password"
                            required={true} />
                        <input
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password"
                            required={true} />

                        <button
                            type="submit"
                            class="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
                        >Create Account</button>

                        <div class="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the <br />
                            <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </a> and
                            <a class="no-underline border-b border-grey-dark text-grey-dark ml-2" href="#">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                    <div class="text-grey-dark mt-6">
                        Already have an account?
                        <Link class="no-underline border-b border-blue text-blue ml-4" href="/signin">
                            Log in
                        </Link>.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup