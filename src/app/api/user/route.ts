
import {NextRequest, NextResponse} from 'next/server'
import {User} from "@/models/user/Users";
import {createUser, getAllUsers} from "@/services/users/userService";


// Rota GET para listar todos os usuários
export async function GET() {

    // Chama o controller para obter todos os usuários
    const users: User[] = await getAllUsers();

    // Retorna a lista de usuários no formato JSON
    return NextResponse.json(users)
}

export async function POST(req: NextRequest){

    try{
        const body = await req.json();
        const {name, email} = body as User;

        if (!name || !email) {
            return NextResponse.json(
                { success: false, message: "Name and email are required." },
                { status: 400 }
            );
        }

        const response = await createUser({name, email});
        return NextResponse.json(response, {
            status: response.success ? 201 : 500,
        });
    }catch (ex){

        let message = "Invalid request";

        if (ex instanceof Error) {
            message = ex.message;
        }

        return NextResponse.json(
            { success: false, message },
            { status: 400 }
        );
    }
}