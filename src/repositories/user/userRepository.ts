import {User} from "@/models/user/Users";


export async function getAll(): Promise<User> {

    return {id: "1233232", name: "Jose", email: "jose@gmail.com", createdAt: new Date()};
}