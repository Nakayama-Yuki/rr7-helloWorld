import { Link, useLocation } from "react-router";

/**
 * ナビゲーションコンポーネント
 * 全ページで共通のヘッダーナビゲーション
 * layout.tsxで使用されている
 */
export function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "ホーム" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ */}
          <Link
            to="/"
            className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500">
            Hello World App
          </Link>

          {/* ナビゲーションメニュー */}
          <ul className="flex space-x-6">
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    location.pathname === path
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
                  }`}
                  aria-current={
                    location.pathname === path ? "page" : undefined
                  }>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
