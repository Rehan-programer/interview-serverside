import Input from "@/components/resuable-components/Input";
import { FaUserCircle } from "react-icons/fa";

export default function AdminProfilePage() {
    return (
        <div className="min-h-screen bg-(--background) text-(--foreground) p-6">
            <div className="mx-auto max-w-5xl">
                <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-[var(--background)] p-6 shadow-lg">
                    <div className="group flex flex-col items-center gap-4 md:flex-row">
                        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-500 shadow-lg">
                            <FaUserCircle className="h-24 w-24 text-white" />
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-3xl font-bold text-[var(--foreground)] transition-colors ">
                                Muhammad Ahmad
                            </h1>

                            <p className="text-gray-500 dark:text-gray-400">
                                Super Administrator
                            </p>

                            <div className="mt-3 flex flex-wrap justify-center gap-2 md:justify-start">
                                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                                    Admin
                                </span>

                                <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                                    Active
                                </span>
                            </div>
                        </div>

                        <button className="rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
                            Edit Profile
                        </button>
                    </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                    <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-[var(--background)] p-5 shadow-lg">
                        <h3 className="text-gray-500 dark:text-gray-400">
                            Total Users
                        </h3>
                        <p className="mt-2 text-3xl font-bold">1,245</p>
                    </div>

                    <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-[var(--background)] p-5 shadow-lg">
                        <h3 className="text-gray-500 dark:text-gray-400">
                            Orders
                        </h3>
                        <p className="mt-2 text-3xl font-bold">532</p>
                    </div>

                    <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-[var(--background)] p-5 shadow-lg">
                        <h3 className="text-gray-500 dark:text-gray-400">
                            Revenue
                        </h3>
                        <p className="mt-2 text-3xl font-bold">$18,240</p>
                    </div>
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-3">
                    <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-[var(--background)] p-6 shadow-lg lg:col-span-2">
                        <h2 className="mb-4 text-xl font-semibold">
                            Personal Information
                        </h2>

                        <div className="grid gap-4 md:grid-cols-2">
                            <div>
                                <Input
                                    label="Full Name"
                                    type="text"
                                    placeholder="Rehan"
                                    defaultValue="Rehan Ali"
                                />
                            </div>

                            <div>
                                 <div>
                                <Input
                                    label="Email Address"
                                    type="email"
                                    placeholder="rehan@example.com"
                                    defaultValue="rehan@example.com"
                                />
                            </div>
                            </div>

                            <div>
                               <div>
                                <Input
                                    label="Phone Number"
                                    type="text"
                                    placeholder="+1 234 567 890"
                                    defaultValue="+1 234 567 890"
                                />
                            </div>
                           
                            </div>

                            <div>
                                 <div>
                                <Input
                                    label="Role"
                                    type="text"
                                    placeholder="Super Administrator"
                                    defaultValue="Super Administrator"
                                />
                            </div>
                            </div>
                        </div>

                        <button className="mt-6 rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700">
                            Save Changes
                        </button>
                    </div>

                    <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-[var(--background)] p-6 shadow-lg">
                        <h2 className="mb-4 text-xl font-semibold">
                            Recent Activity
                        </h2>

                        <div className="space-y-4">
                            <div className="border-l-4 border-blue-500 pl-3">
                                <p className="font-medium">User Created</p>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    2 hours ago
                                </span>
                            </div>

                            <div className="border-l-4 border-blue-500 pl-3">
                                <p className="font-medium">Order Approved</p>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    5 hours ago
                                </span>
                            </div>

                            <div className="border-l-4 border-blue-500 pl-3">
                                <p className="font-medium">Settings Updated</p>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    Yesterday
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
