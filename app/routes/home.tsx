import type { Route } from "./+types/home";
import { Link } from "react-router";

/**
 * ホームページのメタ情報
 */
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hello World - React Router v7" },
    {
      name: "description",
      content: "React Router v7で作成したHello Worldアプリ",
    },
  ];
}

/**
 * ホームページコンポーネント
 * アプリケーションのメインページ
 */
export default function Home() {
  return (
    <div className="text-center">
      <div className="max-w-4xl mx-auto">
        {/* ヒーローセクション */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hello World! 👋
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            React Router v7で作成した初心者向けのサンプルアプリケーションです
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
              アプリについて
            </Link>
            <Link
              to="/contact"
              className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
              お問い合わせ
            </Link>
          </div>
        </div>

        {/* 機能紹介セクション */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            主な機能
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                高速ルーティング
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                React Router v7の新しいAPIによる高速なページ遷移
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-4">💎</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                型安全
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                TypeScriptによる型安全な開発環境
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                モダンデザイン
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tailwind CSS v4によるレスポンシブデザイン
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
