// src/components/layout/Topbar.tsx
export default function Topbar() {
  return (
    <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Placeholder for dynamic title or breadcrumbs */}
        <h1 className="text-lg font-semibold text-gray-800">Page Title</h1>
        {/* Placeholder for user info/actions */}
        <div className="text-gray-600">User Info</div>
      </div>
    </header>
  );
}
