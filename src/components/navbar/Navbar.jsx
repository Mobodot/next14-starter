import Link from "next/link";
import Links from "./links/Links";
import styles from "./Navbar.module.css";
import { auth } from "@/lib/auth";

async function Navbar() {
  const session = await auth();

  console.log("session from navbar", session);

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        MOBODOTT
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
}

export default Navbar;
