// app/components/StatusBadge.tsx
type StatusBadgeProps = {
  status: "APPLIED" | "INTERVIEW" | "OFFER" | "REJECTED";
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const labels = {
    APPLIED: "Envoyée",
    INTERVIEW: "Entretien",
    OFFER: "Offre",
    REJECTED: "Refusée",
  };

  return (
    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
      {labels[status]}
    </span>
  );
}