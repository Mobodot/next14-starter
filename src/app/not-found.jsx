import Link from "next/link";

function NotFound() {
  return (
    <div>
      <h3>Not Found</h3>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">Return to Homepage</Link>
    </div>
  );
}

export default NotFound;
