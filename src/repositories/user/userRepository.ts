import {User, userSchema} from "@/models/user/Users";
import { collection, addDoc, getDocs} from "firebase/firestore";
import { db } from "@/firebase/config";
import {SuccessResponse, ErrorResponse} from "@/types/response";

export async function createUser(userData : User):Promise<SuccessResponse | ErrorResponse> {

    try{
        const docRef = await addDoc(collection(db, "users"), {
            name : userData.name,
            email : userData.email,
        })

        return {
            success: true,
            message:  "User created successfully",
            docId: docRef.id,
        }
    }catch (e){

        return {
            success: false,
            message: "Failed to create user",
            error: e
        };
    }
}



export async function getAllUsers(): Promise<User[]> {

    const querySnapshot = await getDocs(collection(db, "users"));

    const users: User[] = [];

    querySnapshot.forEach((doc) => {
        const data = doc.data();

        const user = userSchema.parse({
            ...data,
            createdAt: data.createdAt || new Date().toISOString(),
            lastLogin: data.lastLogin ?? undefined,
        });
        users.push(user)
    })

    return users;
}
