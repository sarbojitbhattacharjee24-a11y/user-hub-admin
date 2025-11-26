import { z } from "zod";

export const registerSchema = z.object({
  name: z.string()
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name must contain only letters"),
  email: z.string()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z.string()
    .regex(/^[0-9]{10,15}$/, "Phone must be 10-15 digits"),
  password: z.string()
    .min(6, "Password must be at least 6 characters")
    .regex(/\d/, "Password must contain at least one number"),
  address: z.string()
    .max(150, "Address must be less than 150 characters")
    .optional(),
  state: z.string().min(1, "State is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
  pincode: z.string()
    .regex(/^[0-9]{4,10}$/, "Pincode must be 4-10 digits"),
  profileImage: z.any().optional(),
});

export const loginSchema = z.object({
  identifier: z.string().min(1, "Email or phone is required"),
  password: z.string().min(1, "Password is required"),
});

export const updateProfileSchema = z.object({
  name: z.string()
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name must contain only letters"),
  email: z.string()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z.string()
    .regex(/^[0-9]{10,15}$/, "Phone must be 10-15 digits"),
  address: z.string()
    .max(150, "Address must be less than 150 characters")
    .optional(),
  state: z.string().min(1, "State is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
  pincode: z.string()
    .regex(/^[0-9]{4,10}$/, "Pincode must be 4-10 digits"),
  profileImage: z.any().optional(),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
export type UpdateProfileFormData = z.infer<typeof updateProfileSchema>;
