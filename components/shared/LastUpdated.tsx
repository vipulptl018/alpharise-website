import { Container } from "@/components/layout/Container";

export function LastUpdated({ date }: { date: string }) {
  return (
    <div className="border-b border-slate-200/70 bg-slate-50/80">
      <Container className="py-2">
        <p className="text-xs text-slate-500">Last updated: {date}</p>
      </Container>
    </div>
  );
}
