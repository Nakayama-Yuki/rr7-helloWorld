# Copilot Instructions for React Router v7 + React 19 Project

## プロジェクト構成

このプロジェクトは以下の技術スタックを使用しています：

- **React Router v7.6.2** - フルスタックReactフレームワーク
- **React 19.1.0** - UIライブラリ（最新版）
- **Vite 6.3.5** - ビルドツール
- **Tailwind CSS v4.1.8** - CSSフレームワーク
- **TypeScript 5.8.3** - 型安全な開発
- **pnpm** - パッケージマネージャー

## コーディング規約

### 基本的なスタイル

1. **命名規則**
   - 変数名: `camelCase`
   - クラス名: `PascalCase`
   - コンポーネント名: `PascalCase`
   - ファイル名: `kebab-case` または `PascalCase`（コンポーネントの場合）

2. **React コンポーネント**
   - `function` キーワードを使用（`const` の代わりに）
   - 必ずコメントを追加
   - TypeScript の型注釈を活用

3. **アクセシビリティ**
   - セマンティックHTML要素を使用
   - ARIA属性を適切に設定
   - キーボードナビゲーションを考慮

4. **パフォーマンス**
   - React.memo、useMemo、useCallbackを適切に使用
   - 不要な再レンダリングを避ける
   - 画像の最適化

## React Router v7 固有の指針

### ファイル構造

```
app/
├── root.tsx              # ルートレイアウト
├── routes.ts            # ルート定義
├── routes/              # ページコンポーネント
│   ├── home.tsx
│   └── _index.tsx
└── components/          # 再利用可能なコンポーネント
```

### ルーティング

1. **ファイルベースルーティング**
   ```typescript
   // app/routes.ts
   import type { RouteConfig } from "@react-router/dev/routes";
   import { index, route } from "@react-router/dev/routes";

   export default [
     index("routes/home.tsx"),
     route("about", "routes/about.tsx"),
   ] satisfies RouteConfig;
   ```

2. **データローディング**
   ```typescript
   // loader関数を使用
   export async function loader({ request }: Route.LoaderArgs) {
     // データフェッチロジック
     return json({ data: "example" });
   }
   ```

3. **フォーム処理**
   ```typescript
   // action関数を使用
   export async function action({ request }: Route.ActionArgs) {
     const formData = await request.formData();
     // フォーム処理ロジック
     return redirect("/success");
   }
   ```

### コンポーネントの例

```typescript
import { useLoaderData } from "react-router";
import type { Route } from "./+types/example";

/**
 * サンプルページコンポーネント
 * React Router v7 の新しいAPIを使用
 */
export function ExamplePage() {
  const { data } = useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900">
        {data.title}
      </h1>
      <p className="mt-4 text-gray-600">
        {data.description}
      </p>
    </div>
  );
}

export async function loader(): Promise<{ data: { title: string; description: string } }> {
  // データフェッチロジック
  return {
    data: {
      title: "例のタイトル",
      description: "例の説明文"
    }
  };
}
```

## Tailwind CSS v4 のベストプラクティス

### 設定

```typescript
// vite.config.ts
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
});
```

### 使用例

```tsx
// レスポンシブデザイン
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  
// ダークモード対応
<div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">

// カスタムユーティリティ
<div className="@container">
  <div className="@md:grid-cols-2">
```

## TypeScript の設定

### 厳密な型チェック

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}
```

### React Router の型

```typescript
// +types ファイルを活用
import type { Route } from "./+types/example";

export function Component() {
  const data = useLoaderData<typeof loader>();
  // 自動的に型推論される
}
```

## 開発ワークフロー

### 推奨スクリプト

```bash
# 開発サーバー起動
pnpm dev

# 型チェック
pnpm typecheck

# ビルド
pnpm build

# 本番サーバー起動
pnpm start
```

### デバッグ

1. **React Developer Tools** を使用
2. **React Router DevTools** でルーティングを確認
3. **Vite の HMR** で高速開発

## セキュリティ

1. **CSP（Content Security Policy）** を設定
2. **CSRF保護** を実装
3. **XSS対策** を考慮
4. **入力検証** を徹底

## パフォーマンス最適化

1. **コード分割**
   ```typescript
   const LazyComponent = lazy(() => import('./components/LazyComponent'));
   ```

2. **画像最適化**
   ```tsx
   <img 
     src="/images/example.jpg" 
     alt="説明文"
     loading="lazy"
     width={800}
     height={600}
   />
   ```

3. **メタタグ最適化**
   ```typescript
   export const meta: Route.MetaFunction = () => [
     { title: "ページタイトル" },
     { name: "description", content: "ページの説明" },
   ];
   ```

## テスト

### 推奨ツール

- **Vitest** - 単体テスト
- **@testing-library/react** - コンポーネントテスト
- **Playwright** - E2Eテスト

### テスト例

```typescript
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { ExampleComponent } from './ExampleComponent';

test('コンポーネントが正しくレンダリングされる', () => {
  render(<ExampleComponent title="テスト" />);
  expect(screen.getByText('テスト')).toBeDefined();
});
```

## デプロイメント

### 環境変数

```typescript
// vite-env.d.ts
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_APP_NAME: string;
}
```

### ビルド最適化

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router'],
        },
      },
    },
  },
});
```

## 注意事項

1. **React 19の新機能**を活用する
   - useActionState
   - useOptimistic
   - useFormStatus

2. **React Router v7の新API**を使用する
   - 新しいファイル構造
   - 型安全なルーティング
   - 改善されたデータローディング

3. **Tailwind CSS v4の新機能**を活用する
   - Container queries
   - 改善されたDX
   - より良いパフォーマンス

## 参考リンク

- [React Router v7 Documentation](https://reactrouter.com/en/main)
- [React 19 Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
