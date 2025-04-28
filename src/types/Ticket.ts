export interface Ticket {
  readonly id: number;
  title: string;
  description: string;
  status: "pending" | "completed" | "closed";
  readonly reporter_id: number;
  readonly assignee_id: number;
  readonly created_at: Date;
  updated_at: Date | null;
}
