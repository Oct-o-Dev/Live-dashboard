
export interface EventData {
  id: string;             // unique ID
  type: string;           // e.g., "click", "login", "transaction"
  value: number;          // metric (like usage count, CPU, etc.)
  timestamp: string;      // ISO format
  source?: string;        // optional, like "frontend", "API"
}
