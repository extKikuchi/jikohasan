export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded shadow p-6 space-y-4">
        <h1 className="text-2xl font-bold text-center text-blue-600">
          AI OCR 試作フロント
        </h1>

        <div>
          <label className="block text-sm font-medium mb-1">
            PDFファイルを選択
          </label>
          <input
            type="file"
            accept="application/pdf"
            className="border border-gray-300 rounded w-full p-2"
          />
        </div>

        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded">
          アップロード
        </button>

        <div className="mt-4 border border-gray-200 rounded p-3 text-sm text-gray-700 bg-gray-50">
          <p className="font-semibold mb-2">解析結果（ダミー）</p>
          <p className="text-gray-500">ここにOCR結果を表示します。</p>
        </div>
      </div>
    </div>
  );
}
