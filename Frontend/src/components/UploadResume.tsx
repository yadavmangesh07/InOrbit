"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Upload } from "lucide-react"

// Accepted file types for upload
const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

// Schema for form validation
const FormSchema = z.object({
  images: z
    .any()
    .refine((files) => Array.from(files).every((file) => file instanceof File), { message: "Expected a file" })
    .refine((files) => (files as File[]).every((file) => ACCEPTED_FILE_TYPES.includes(file.type)), {
      message: "Only .jpg, .jpeg, .png, and .webp files are allowed",
    }),
});

export default function UploadResume() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="font-semibold text-xs">
          <Upload className="mr-2 h-4 w-4" />Upload Resume
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[340px] rounded-sm sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Resume</DialogTitle>
          <DialogDescription>Make changes to your resume here. Click upload when you're done.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
            
            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload</FormLabel>
                  <FormControl>
                    <Input type="file" multiple {...field} />
                  </FormControl>
                  <FormDescription>Upload images (only .jpg, .jpeg, .png, .webp allowed).</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Upload</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
