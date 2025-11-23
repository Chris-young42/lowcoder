import type React from "react";
import { useMaterailDrop } from "../../../hooks/useMaterialDrop";
import type { CommonComponentProps } from "../../../interface";

function Page({ id, children }: CommonComponentProps) {
  const { canDrop, drop } = useMaterailDrop(["Button", "Container"], id);

  return (
    <div
      ref={drop as unknown as React.Ref<HTMLDivElement>}
      className="p-[20px] h-[100%] box-border"
      style={{ border: canDrop ? "2px solid blue" : "none" }}
    >
      {children}
    </div>
  );
}

export default Page;
