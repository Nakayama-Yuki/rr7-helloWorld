import type { Route } from "./+types/contact";

/**
 * Contactページのメタ情報
 */
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact - Hello World App" },
    { name: "description", content: "お問い合わせページ" },
  ];
}

/**
 * フォームのaction関数
 * フォーム送信時の処理を行う
 * "use server"をつけなくても、サーバーサイドで実行される
 */
export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // 実際のアプリケーションでは、ここでデータベースに保存やメール送信を行う
  console.log("お問い合わせデータ:", { name, email, message });

  // 成功レスポンスを返す
  return {
    success: true,
    message: "お問い合わせありがとうございます。",
  };
}

/**
 * Contactページコンポーネント
 * お問い合わせフォームを表示
 */
export default function Contact() {
  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Contact
        </h1>
      </header>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            お問い合わせ
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-8">
            ご質問やご意見がございましたら、下記のフォームからお気軽にお問い合わせください。
          </p>

          <form method="post" className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="山田太郎"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                メッセージ <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="お問い合わせ内容をご記入ください..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              送信する
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
