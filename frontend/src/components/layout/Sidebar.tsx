// src/components/layout/Sidebar.tsx
import Link from 'next/link';

const navItems = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/playground', label: 'Playground' },
  { href: '/prompt-engineer', label: 'Prompt Engineer' },
  { href: '/knowledge', label: 'Knowledge Base' },
  { href: '/crm', label: 'CRM' },
  { href: '/inbox', label: 'Inbox' },
  { href: '/settings/agent', label: 'Agent Settings' },
  { href: '/settings/system', label: 'System Settings' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-gray-100 p-4 fixed left-0 top-0 overflow-y-auto">
      <div className="mb-8 text-center">
        <Link href="/" className="text-xl font-bold text-white">
          AI Agent Manager
        </Link>
      </div>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.href} className="mb-2">
              <Link
                href={item.href}
                className="block p-2 rounded hover:bg-gray-700 transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
