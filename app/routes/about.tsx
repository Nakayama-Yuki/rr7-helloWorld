import type { Route } from "./+types/about";

/**
 * Aboutページのメタ情報
 */
export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - Hello World App" },
    { name: "description", content: "Hello World Appについて" },
  ];
}

/**
 * Aboutページコンポーネント
 * アプリケーションの概要を表示
 */
export default function About() {
  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          About
        </h1>
      </header>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Hello World Appについて
          </h2>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              このアプリケーションは、React Router
              v7を使用した基本的なWebアプリケーションです。
              初心者向けのサンプルとして作成されており、以下の技術を学習できます：
            </p>

            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6">
              <li>React Router v7による基本的なルーティング</li>
              <li>ページ間のナビゲーション</li>
              <li>共通レイアウトの実装</li>
              <li>TypeScriptによる型安全な開発</li>
              <li>Tailwind CSSによるスタイリング</li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md">
              <h3 className="text-lg font-medium text-blue-900 dark:text-blue-100 mb-2">
                技術スタック
              </h3>
              <ul className="text-blue-800 dark:text-blue-200 space-y-1">
                <li>• React 19.1.0</li>
                <li>• React Router v7.6.2</li>
                <li>• TypeScript 5.8.3</li>
                <li>• Tailwind CSS v4.1.8</li>
                <li>• Vite 6.3.5</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
