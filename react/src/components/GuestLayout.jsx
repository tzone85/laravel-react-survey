import {Navigate, Outlet} from "react-router-dom";
import {LockClosedIcon} from "@heroicons/react/20/solid/index.js";
import {useStateContext} from "../contexts/ContentextProvider.jsx";

const { currentUser, userToken } = useStateContext();

export default function GuestLayout() {

    if (userToken) {
        return <Navigate to="/" />
    }

    return (
        <div>
            <div className="flex min-h-full bg-slate-300 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />

                    </div>

                <Outlet/>
                </div>
            </div>

        </div>
    )
}
