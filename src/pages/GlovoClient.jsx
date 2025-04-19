import React from 'react';

function GlovoClient() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="bg-white p-6 rounded-lg shadow border">
        <div className="bg-red-100 border border-red-300 text-red-600 px-6 py-4 rounded">
          <p className="text-base font-medium">No Glovo order available</p>
        </div>
      </div>
    </div>
  );
}

export default GlovoClient;
