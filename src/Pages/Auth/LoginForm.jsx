// import { supabase } from '../../lib/client'
import { useState } from 'react'
import { z } from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from 'lucide-react'
import { supabase } from '@/lib/client/client'


const loginSchema = z.object({
  email: z.string()
    .email({ message: "Invalid email address" })
    .refine((email) => email.endsWith('@lhr.nu.edu.pk') || email.endsWith('@nu.edu.pk'), {
      message: "Only the users with @lhr.nu.edu.pk or @nu.edu.pk domains are allowed",
    }),
  password: z.string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .refine((password) => /[A-Z]/.test(password), {
      message: "Password must contain at least one uppercase letter",
    })
    .refine((password) => /[a-z]/.test(password), {
      message: "Password must contain at least one lowercase letter",
    })
    .refine((password) => /[0-9]/.test(password), {
      message: "Password must contain at least one number",
    })
    .refine((password) => /[!@#$%^&*(),.?":{}|<>]/.test(password), {
      message: "Password must contain at least one special character",
    }),
});

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Validate the input data
      const validatedData = loginSchema.parse({ email, password });

      // Attempt to sign in with Supabase
      const { data, error } = await supabase.auth.signInWithPassword({
        email: validatedData.email,
        password: validatedData.password,
      })

      console.log('Login attempt with:', validatedData)
      // Check for Supabase errors

      if (error) {
        console.error('Supabase Error:', error.message);
        console.error('Supabase Error Details:', error);
        setErrors({ general: [error.message] });
        return;
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        setErrors(error.flatten().fieldErrors);
      } else {
        // Handle any other errors (optional)
        setErrors({ general: ["An unexpected error occurred. Please try again."] });
      }
    }
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className='text-center'>Login to ERP</CardTitle>
        <CardDescription className='text-center mt-2'>Enter your credentials to access ERP.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{errors.email[0]}</AlertDescription>
              </Alert>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{errors.password[0]}</AlertDescription>
              </Alert>
            )}
          </div>
          <Button type="submit" className="w-full">Login</Button>
        </form>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="w-full text-blue-500">Forgot Password?</Button>
      </CardFooter>
    </Card>
  )
}