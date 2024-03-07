import React from "react";

export default async function LayoutRoute({
  params,
  children,
}: {
  children: React.ReactNode;
  params: {
    slug: string;
    category: string;
  };
}) {
  return (
    <div>
      {children}
    </div>
  );
}