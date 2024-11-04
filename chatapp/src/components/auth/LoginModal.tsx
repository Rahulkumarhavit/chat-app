import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import React from 'react'
import { Button } from "../ui/button"
import Image from "next/image"
import { signIn } from "next-auth/react"
export default function LoginModal() {

    const handleLogin = () =>{
        signIn("google",{
            callbackUrl:"/dashboard",
            redirect:true
        })
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Getting start</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="text-2xl ">Welcome to ChatApp</DialogTitle>
                        <DialogDescription>
                            A real time chatapp help to chat with friends effortlessly
                        </DialogDescription>
                    </DialogHeader>
                    <Button variant="outline" onClick={handleLogin}>
                        <Image
                        src="/images/google.png"
                        className="mr-4"
                        width={25}
                        height={25}
                        alt="google logo"
                        />
                        Continue with Google
                    </Button>
                </DialogContent>
            </Dialog>

        </div>
    )
}
