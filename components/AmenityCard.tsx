import React from "react";
import { CheckCircle } from "lucide-react";

interface AmenityCardProps {
  title: string;
  description?: string;
}

export default function AmenityCard({ title, description }: AmenityCardProps) {
  return (
    <div className="flex items-start gap-4 p-5 bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-gold/20 hover:shadow-md transition">
      <CheckCircle className="w-6 h-6 text-gold shrink-0 mt-1" />

      <div>
        <h4 className="font-semibold text-lg text-dark">{title}</h4>

        {description && (
          <p className="text-sm text-dark/70 leading-relaxed mt-1">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
