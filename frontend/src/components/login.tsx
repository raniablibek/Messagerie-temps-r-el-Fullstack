import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Login() {
    const [name, setName] = useState("");
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault(); 
        try {
            const response = await fetch("http://localhost:8080/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name }),
            });
            const data = await response.json();
            if (response.ok) { 
                // Save user data or token to localStorage or state management
                localStorage.setItem("currentUserName", name); // Save name for future use
                router.push("/"); // Navigate to messaging page
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <Input
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Button type="submit">Login</Button>
        </form>
    );
}
