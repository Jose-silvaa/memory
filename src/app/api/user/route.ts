
import { NextRequest, NextResponse } from 'next/server'
import {User} from "@/models/user/Users";
import {getAllUsers} from "@/services/users/userService";


// Rota GET para listar todos os usuários
export async function GET(req : NextRequest, res : NextResponse) {

    // Chama o controller para obter todos os usuários
    const users: User = await getAllUsers();

    // Retorna a lista de usuários no formato JSON
    return NextResponse.json(users)
}