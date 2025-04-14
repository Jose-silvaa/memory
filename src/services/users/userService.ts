
import * as userRepository from "../../repositories/user/userRepository"

//Exemplo - Função para recuperar todos os usuários
export async function getAllUsers(){
    return await userRepository.getAll()
}