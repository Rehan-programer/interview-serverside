import UserClient from "./UserClient";
import Card from "../Card";
import { fetchUsers } from "@/lib/api";

export default async function UserServerSide() {

    const data = await fetchUsers();

    console.log("data", data);

    return (
       <div className="p-4 bg-(--background)  h-full">
         <Card>


            <div className="mb-6 bg-(--background)  ">
                <h1 className="text-2xl md:text-3xl font-bold text-(--foreground)">
                    Users
                </h1>

                <p className="text-(--foreground) text-sm">
                    Manage all registered users
                </p>
            </div>

            <div>
                <UserClient data={data} />

            </div>

        </Card>
       </div>
    );
}