// import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import { Link } from "react-router-dom";
import { FaGithub } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
const Icons = {
    gitHub: FaGithub,
    google: FaGoogle
  };
  


export const iframeHeight = "600px"

export const containerClassName =
  "w-full h-screen flex items-center justify-center px-8"

export default function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>
        Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="Max" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Robinson" required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <Button type="submit" className="w-full">
            Create an account
          </Button>
          <div className="grid grid-cols-2 gap-6">
          <Button variant="outline" className="w-full">
          <Icons.google className="mr-2 h-4 w-4" />
          Google
          </Button>
          <Button variant="outline" className="w-full">
          <Icons.gitHub className="mr-2 h-4 w-4" />
          GitHub
          </Button>
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          {/* <Link href="#" className="underline">
            Sign in
          </Link> */}

        </div>
      </CardContent>
    </Card>
  )
}