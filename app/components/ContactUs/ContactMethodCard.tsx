import React, { ReactNode } from "react";

interface Props {
  title: string;
  text: string;
  children: ReactNode;
}

export default function ContactMethodCard({ title, text, children }: Props) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-[#F7F7F7] p-4">
      <div className="bg-white p-2 rounded">{children}</div>
      <div>
        <h4 className="mb-1 font-medium">{title}</h4>
        <p className="text-sm leading-7 text-gray-600">{text}</p>
      </div>
    </div>
  );
}
