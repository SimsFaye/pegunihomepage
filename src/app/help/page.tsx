"use client" // Mark this component as a Client Component

export default function HelpPage() {
    return (
        <div className="font-sans leading-relaxed text-gray-800 dark:text-gray-300 max-w-[800px] mx-auto p-5 mt-[113px]">
            <h1 className="text-2xl border-b-2 border-gray-200 dark:border-gray-700 pb-3 mb-8 font-bold text-gray-900 dark:text-gray-100">特定商取引法に基づく表記</h1>

            <table className="w-full border-collapse mb-8">
                <tbody>
                    <tr>
                        <th className="border border-gray-200 dark:border-gray-700 p-3 text-left bg-gray-100 dark:bg-gray-800 w-[30%] font-normal">販売事業者名</th>
                        <td className="border border-gray-200 dark:border-gray-700 p-3 text-left">株式会社ペグニ</td>
                    </tr>
                    <tr>
                        <th className="border border-gray-200 dark:border-gray-700 p-3 text-left bg-gray-100 dark:bg-gray-800 w-[30%] font-normal">代表者名</th>
                        <td className="border border-gray-200 dark:border-gray-700 p-3 text-left">HUANG XING、張 雨菲</td>
                    </tr>
                    <tr>
                        <th className="border border-gray-200 dark:border-gray-700 p-3 text-left bg-gray-100 dark:bg-gray-800 w-[30%] font-normal">所在地</th>
                        <td className="border border-gray-200 dark:border-gray-700 p-3 text-left">〒174-0056<br />東京都板橋区志村1丁目13-14<br />ニューライフ志村坂上201</td>
                    </tr>
                    <tr>
                        <th className="border border-gray-200 dark:border-gray-700 p-3 text-left bg-gray-100 dark:bg-gray-800 w-[30%] font-normal">電話番号</th>
                        <td className="border border-gray-200 dark:border-gray-700 p-3 text-left">080-4449-3024</td>
                    </tr>
                    <tr>
                        <th className="border border-gray-200 dark:border-gray-700 p-3 text-left bg-gray-100 dark:bg-gray-800 w-[30%] font-normal">メールアドレス</th>
                        <td className="border border-gray-200 dark:border-gray-700 p-3 text-left">koukyo@peguni.com<br />chouhi@peguni.com</td>
                    </tr>
                    <tr>
                        <th className="border border-gray-200 dark:border-gray-700 p-3 text-left bg-gray-100 dark:bg-gray-800 w-[30%] font-normal">URL</th>
                        <td className="border border-gray-200 dark:border-gray-700 p-3 text-left">https://peguni.com</td>
                    </tr>
                    <tr>
                        <th className="border border-gray-200 dark:border-gray-700 p-3 text-left bg-gray-100 dark:bg-gray-800 w-[30%] font-normal">商品代金以外の必要料金</th>
                        <td className="border border-gray-200 dark:border-gray-700 p-3 text-left">送料、決済手数料等（具体的な金額は各商品・サービスページをご確認ください）</td>
                    </tr>
                    <tr>
                        <th className="border border-gray-200 dark:border-gray-700 p-3 text-left bg-gray-100 dark:bg-gray-800 w-[30%] font-normal">引き渡し時期</th>
                        <td className="border border-gray-200 dark:border-gray-700 p-3 text-left">各商品・サービスページにてご確認ください</td>
                    </tr>
                    <tr>
                        <th className="border border-gray-200 dark:border-gray-700 p-3 text-left bg-gray-100 dark:bg-gray-800 w-[30%] font-normal">お支払い方法</th>
                        <td className="border border-gray-200 dark:border-gray-700 p-3 text-left">クレジットカード決済、Alipay（アリペイ）、WeChat Pay（ウィーチャットペイ）、銀行振込等（詳細は各商品・サービスページをご確認ください）</td>
                    </tr>
                    <tr>
                        <th className="border border-gray-200 dark:border-gray-700 p-3 text-left bg-gray-100 dark:bg-gray-800 w-[30%] font-normal">返品・交換について</th>
                        <td className="border border-gray-200 dark:border-gray-700 p-3 text-left">デジタルコンテンツ（データベース検索やAI APIなど）の性質上、原則として返品・交換はお受けしておりません。サービスに関するご質問やトラブルが発生した場合は、ご利用開始から7日以内にご連絡ください。状況に応じて対応いたします。</td>
                    </tr>
                    <tr>
                        <th className="border border-gray-200 dark:border-gray-700 p-3 text-left bg-gray-100 dark:bg-gray-800 w-[30%] font-normal">販売数量</th>
                        <td className="border border-gray-200 dark:border-gray-700 p-3 text-left">各商品・サービスページに記載</td>
                    </tr>
                    <tr>
                        <th className="border border-gray-200 dark:border-gray-700 p-3 text-left bg-gray-100 dark:bg-gray-800 w-[30%] font-normal">商品等の販売価格</th>
                        <td className="border border-gray-200 dark:border-gray-700 p-3 text-left">各商品・サービスページに記載</td>
                    </tr>
                    <tr>
                        <th className="border border-gray-200 dark:border-gray-700 p-3 text-left bg-gray-100 dark:bg-gray-800 w-[30%] font-normal">申込期間</th>
                        <td className="border border-gray-200 dark:border-gray-700 p-3 text-left">各商品・サービスページに記載</td>
                    </tr>
                    <tr>
                        <th className="border border-gray-200 dark:border-gray-700 p-3 text-left bg-gray-100 dark:bg-gray-800 w-[30%] font-normal">その他特約事項</th>
                        <td className="border border-gray-200 dark:border-gray-700 p-3 text-left">各商品・サービスページをご確認ください</td>
                    </tr>
                </tbody>
            </table>

            <div className="mt-[4cm]">
                <p className="text-gray-600 dark:text-gray-400">※ 本表記の内容は、特定商取引法第11条に基づき記載しています。</p>
            </div>

            <style jsx>{`
                @media (max-width: 600px) {
                    th, td {
                        display: block;
                        width: 100% !important;
                    }
                    th {
                        border-bottom: none !important;
                    }
                }
            `}</style>
        </div>
    );
} 