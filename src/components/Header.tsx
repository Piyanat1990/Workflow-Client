import Link from "next/link";

function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <nav className="flex items-center space-x-4">
          <Link href="/" className="text-xl font-bold">
            Budget App
          </Link>
          <Link href="/add" className="text-sm">
            AddItem
          </Link>
          <Link href="/approval" className="text-sm">
            Approval
          </Link>
        </nav>
        <div className="text-sm">
          admin@test.com |{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;