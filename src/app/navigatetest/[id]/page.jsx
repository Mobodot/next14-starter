"use client";

import { useParams, usePathname } from "next/navigation";

function ID() {
  const pname = usePathname();
  const params = useParams();
  // use
  console.log("pathname in navid", pname);
  console.log("route params", params);

  return <div>The nav id page</div>;
}

export default ID;
