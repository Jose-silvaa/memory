import {User, userSchema} from "@/models/user/Users";
import { collection, addDoc, getDocs} from "firebase/firestore";
import { db } from "@/firebase/config";
import {SuccessResponse, ErrorResponse} from "@/types/response";
import {Timestamp} from "@firebase/firestore";

export async function createUser(userData : User):Promise<SuccessResponse | ErrorResponse> {

    try{
        const docRef = await addDoc(collection(db, "users"), {
            name : userData.name,
            email : userData.email,
            createdAt: Timestamp.now(),
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

        //const convertTime = convertFirebaseTimestampToDateString(data.createdAt);

        const user = userSchema.parse({
            ...data,
            lastLogin: data.lastLogin ?? undefined,
        });
        users.push(user)
    })

    return users;
}
