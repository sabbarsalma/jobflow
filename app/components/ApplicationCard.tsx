// app/components/ApplicationCard.tsx
import StatusBadge from "./StatusBadge";

type ApplicationCardProps = {
  company: string;
  position: string;
  status: "APPLIED" | "INTERVIEW" | "OFFER" | "REJECTED";
};

export default function ApplicationCard({ company, position, status }: ApplicationCardProps) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg mb-3">
      <div>
        <h3 className="font-bold">{company}</h3>
        <p className="text-sm text-gray-500">{position}</p>
      </div>
      <StatusBadge status={status} />
    </div>
  );
}