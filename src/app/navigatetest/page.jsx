"use client";

import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";

function NavigateTest() {
  const route = useRouter();
  // const params = useParams();
  const pathname = usePathname();
  console.log("route pathname", pathname);
  // console.log("route params", params);
  return (
    <div>
      <Link href="/" prefetch={false}>
        homepage
      </Link>
      <br />
      Test navigation yeah
    </div>
  );
}

export default NavigateTest;
