import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

export async function POST(req) {
    const { email, password } = await req.json();

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
            },
        });

        return new Response(JSON.stringify({ success: true, user }), { status: 201 });
    } catch (error) {
        console.error("Error creating user:", error);
        return new Response(
            JSON.stringify({ success: false, error: error.message }),
            { status: 400 }
        );
    }
}
