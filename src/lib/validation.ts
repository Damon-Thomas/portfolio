// Input validation utilities for the contact form

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: { [key: string]: string };
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: { [key: string]: string } = {};

  // Name validation
  if (!data.name || typeof data.name !== "string") {
    errors.name = "Name is required";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters long";
  } else if (data.name.trim().length > 100) {
    errors.name = "Name must be less than 100 characters";
  } else if (!/^[a-zA-Z\s'-]+$/.test(data.name.trim())) {
    errors.name =
      "Name can only contain letters, spaces, hyphens, and apostrophes";
  }

  // Email validation
  if (!data.email || typeof data.email !== "string") {
    errors.email = "Email is required";
  } else if (data.email.trim().length > 254) {
    errors.email = "Email must be less than 254 characters";
  } else {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(data.email.trim())) {
      errors.email = "Please enter a valid email address";
    }
  }

  // Message validation
  if (!data.message || typeof data.message !== "string") {
    errors.message = "Message is required";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters long";
  } else if (data.message.trim().length > 2000) {
    errors.message = "Message must be less than 2000 characters";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

// Sanitize input to prevent XSS
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .replace(/javascript:/gi, "") // Remove javascript: protocols
    .replace(/on\w+=/gi, ""); // Remove event handlers
}

// Get client IP for rate limiting
export function getClientIP(request: Request): string {
  // Check various headers for the real IP
  const forwarded = request.headers.get("x-forwarded-for");
  const realIP = request.headers.get("x-real-ip");
  const clientIP = request.headers.get("x-client-ip");

  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  if (realIP) {
    return realIP;
  }
  if (clientIP) {
    return clientIP;
  }

  // Fallback - in development this might be undefined
  return "unknown";
}
