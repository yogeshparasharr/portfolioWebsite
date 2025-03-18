export function TestComponent() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div className="shrink-0">
        <div className="h-12 w-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
          T
        </div>
      </div>
      <div>
        <div className="text-xl font-medium text-black">Tailwind Test</div>
        <p className="text-gray-500">Verifying Tailwind CSS is working</p>
      </div>
    </div>
  );
} 