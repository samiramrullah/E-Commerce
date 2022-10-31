import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
const Signup = () => {
    const [fName, setfName] = useState();
    const [email, setemail] = useState();
    const [contactNumber, setcontactNumber] = useState();
    const [password, setpassword] = useState();
    const [cnfPassword, setcnfPassword] = useState();

    const formSubmitHandler = () => {
        if (password != cnfPassword) {
            alert("Password didn't match")
        }
        else {
            const data = {
                fName,
                email,
                contactNumber,
                password,
            }
            console.log(data);
            setfName('');
            setemail('');
            setcontactNumber('');
            setpassword('');
            setcnfPassword('')
        }
    }
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
                            required={true}
                            onChange={(e) => setfName(e.target.value)}
                            value={fName}
                        />

                        <input
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email"
                            required={true}
                            onChange={(e) => setemail(e.target.value)}
                            value={email}
                        />
                        <input
                            type={'number'}
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="contactNumber"
                            placeholder="Contact Number"
                            required={false}
                            onChange={(e) => setcontactNumber(e.target.value)}
                            value={contactNumber}
                        />

                        <input
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password"
                            required={true}
                            onChange={(e) => setpassword(e.target.value)}
                            value={password}
                        />
                        <input
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password"
                            required={true}
                            onChange={(e) => setcnfPassword(e.target.value)}
                            value={cnfPassword}
                        />

                        <button onClick={formSubmitHandler}
                            type="submit"
                            class="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
                        >Create Account</button>
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