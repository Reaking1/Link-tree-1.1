import Link from "next/link";
import '../globals.css';

export default function NotFound() {
  return (
    <main>
      <h1 className="rubberBand">
        This page is still under construction. Click the button below.
      </h1>
      <Link href="/">
        <button className="rainbowButton" type="button">
          Home Page
        </button>
      </Link>
    </main>
  );
}
