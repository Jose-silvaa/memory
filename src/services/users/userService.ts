
import * as userRepository from "../../repositories/user/userRepository"
import {User} from "@/models/user/Users";


export async function createUser(userData : User){
    return await userRepository.createUser({name : userData.name, email: userData.email})
}


export async function getAllUsers(){
    return await userRepository.getAllUsers();
}
