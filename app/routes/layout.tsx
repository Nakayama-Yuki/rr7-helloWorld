import { Outlet } from "react-router";
import { Navigation } from "../components/navigation";

/**
 * 共通レイアウトコンポーネント
 * 全ページで共通のナビゲーションとフッターを提供
 */
export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © 2025 Hello World App - React Router v7で作成
          </p>
        </div>
      </footer>
    </div>
  );
}
