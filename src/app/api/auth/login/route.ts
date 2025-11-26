import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

// Simple auth for now - in production, use proper password hashing
const ADMIN_USERNAME = "test"
const ADMIN_PASSWORD = "test"

export async function POST(request: NextRequest) {
    try {
        const { username, password } = await request.json()

        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            // Create session
            const response = NextResponse.json({ success: true })

            // Set httpOnly cookie for session
            response.cookies.set("admin-session", "authenticated", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: 60 * 60 * 24 * 7, // 7 days
                path: "/",
            })

            return response
        }

        return NextResponse.json(
            { error: "Invalid credentials" },
            { status: 401 }
        )
    } catch (error) {
        return NextResponse.json(
            { error: "Authentication failed" },
            { status: 500 }
        )
    }
}
