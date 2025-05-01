"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Link from "next/link"
import { Mail, Lock, UserPlus, KeyRound } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PatternBackground } from "@/components/ui/pattern-background"
import { signUpFormSchema } from "@/lib/auth-schema"

type SignUpFormValues = z.infer<typeof signUpFormSchema>

export default function SignUpPage() {
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  })

  function onSubmit(data: SignUpFormValues) {
    // This is where you would handle form submission
    console.log(data)
  }

  return (
    <>
      <PatternBackground />
      <div className="flex min-h-screen items-center justify-center p-4 bg-gradient-to-br from-background/50 to-muted/50">
        <Card className="w-full max-w-sm border border-border/40 shadow-xl bg-card/95 backdrop-blur-sm dark:bg-card/90 dark:border-border/20 dark:shadow-2xl dark:shadow-primary/5">
          <CardHeader className="space-y-1 pb-2">
            <div className="flex justify-center mb-3">
              <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center dark:bg-primary/20 shadow-inner border border-primary/10 dark:border-primary/20">
                <UserPlus className="size-6 text-primary" />
              </div>
            </div>
            <CardTitle className="text-xl font-semibold text-center">Create an account</CardTitle>
            <CardDescription className="text-xs text-center">
              Enter your details below to join us
            </CardDescription>
          </CardHeader>
        <CardContent className="pt-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-xs font-medium">Email</FormLabel>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
                      <FormControl>
                        <Input
                          placeholder="Enter your email"
                          className="pl-9 text-sm h-9 rounded-md border-2 border-zinc-300  focus-visible:border-primary/70 focus-visible:ring-2 focus-visible:ring-primary/20"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage className="text-xs mt-1.5 px-1" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-xs font-medium">Password</FormLabel>
                    <div className="relative">
                      <Lock className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter your password"
                          className="pl-9 text-sm h-9 rounded-md border-2 border-zinc-300   focus-visible:border-primary/70 focus-visible:ring-2 focus-visible:ring-primary/20"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage className="text-xs mt-1.5 px-1" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-xs font-medium">Confirm Password</FormLabel>
                    <div className="relative">
                      <KeyRound className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Confirm your password"
                          className="pl-9 text-sm h-9 rounded-md border-2 border-zinc-300   focus-visible:border-primary/70 focus-visible:ring-2 focus-visible:ring-primary/20"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage className="text-xs mt-1.5 px-1" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-2 space-y-0 mt-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="size-4 mt-0.5 border-2 border-zinc-400 data-[state=checked]:bg-primary/90 data-[state=checked]:border-primary/90 flex items-center justify-center [&>span]:flex [&>span]:items-center [&>span]:justify-center [&>span>svg]:size-3"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-xs font-normal cursor-pointer">
                        I agree to the{" "}
                        <Link href="/terms" className="text-primary hover:underline hover:text-primary/80 transition-colors">
                          terms and conditions
                        </Link>
                      </FormLabel>
                      <FormMessage className="text-xs mt-1 px-1" />
                    </div>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full text-sm h-10 mt-3 shadow-md hover:shadow-lg transition-all duration-200 hover:translate-y-[-1px] active:translate-y-[1px]"
              >
                Create account
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col items-center pt-0 pb-6">
          <div className="w-full h-px bg-border/30 my-4 max-w-[80%]"></div>
          <p className="text-xs text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline hover:text-primary/80 transition-colors font-medium">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
    </>
  )
}
