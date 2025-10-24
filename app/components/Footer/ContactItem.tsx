// components/footer/ContactItem.tsx
import React from "react";

type ContactItemProps = {
  icon?: React.ReactNode;
  label: React.ReactNode;
};

export default function ContactItem({ icon, label }: ContactItemProps) {
  return (
    <div className="flex items-start gap-3 text-[15px] leading-6 text-gray-300">
      <div className="w-6 h-6 flex items-center justify-center text-gray-200">
        {icon}
      </div>
      <div className="text-sm leading-6">{label}</div>
    </div>
  );
}
