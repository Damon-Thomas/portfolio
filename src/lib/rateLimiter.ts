// Simple in-memory rate limiter
// In production, you might want to use Redis or another persistent store

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

class RateLimiter {
  private store: Map<string, RateLimitEntry> = new Map();
  private windowMs: number;
  private maxRequests: number;

  constructor(windowMs: number = 15 * 60 * 1000, maxRequests: number = 5) {
    this.windowMs = windowMs; // 15 minutes default
    this.maxRequests = maxRequests; // 5 requests per window default

    // Clean up expired entries every 5 minutes
    setInterval(() => this.cleanup(), 5 * 60 * 1000);
  }

  isAllowed(identifier: string): { allowed: boolean; resetTime?: number } {
    const now = Date.now();
    const entry = this.store.get(identifier);

    if (!entry || now >= entry.resetTime) {
      // First request or window has expired
      this.store.set(identifier, {
        count: 1,
        resetTime: now + this.windowMs,
      });
      return { allowed: true };
    }

    if (entry.count < this.maxRequests) {
      // Within limit, increment count
      entry.count++;
      return { allowed: true };
    }

    // Rate limit exceeded
    return {
      allowed: false,
      resetTime: entry.resetTime,
    };
  }

  private cleanup() {
    const now = Date.now();
    for (const [key, entry] of this.store.entries()) {
      if (now >= entry.resetTime) {
        this.store.delete(key);
      }
    }
  }
}

// Create a global instance
export const contactFormLimiter = new RateLimiter(5 * 60 * 1000, 5); // 3 requests per 15 minutes
