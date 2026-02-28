export default function OrderTrackingPage() {
  const steps = [
    { step: "Pending", date: "2023-12-10", active: true },
    { step: "Processing", date: "2023-12-12", active: true },
    { step: "Shipped", date: "2023-12-15", active: true },
    { step: "Delivered", date: "-", active: false },
  ];

  return (
    <div className="min-h-screen p-4 sm:p-6">
      <div className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-md p-5 sm:p-8">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Order Tracking</h1>

        {/* Order ID */}
        <h2 className="text-lg sm:text-xl font-semibold mb-6">
          Order ID: <span className="text-blue-600">#ORD-001</span>
        </h2>

        {/* Customer Info */}
        <div className="mb-8">
          <h3 className="text-base sm:text-lg font-semibold border-b pb-2 mb-4">
            Customer Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            <p>
              <span className="font-medium">Name:</span> john Doe
            </p>
            <p>
              <span className="font-medium">Email:</span> john@example.com
            </p>
            <p>
              <span className="font-medium">Phone:</span> +880123456789
            </p>
          </div>
        </div>

        {/* Shipping Address */}
        <div className="mb-8">
          <h3 className="text-base sm:text-lg font-semibold border-b pb-2 mb-4">
            Shipping Address
          </h3>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
            123 Main Street, Apt 4B, New York, NY 10001
          </p>
        </div>

        {/* Status Badge */}
        <div className="mb-10">
          <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs sm:text-sm">
            Shipped
          </span>
        </div>

        {/* ================= Desktop Progress Bar ================= */}
        <div className="hidden sm:block relative mb-6">
          {/* Background Line */}
          <div className="absolute top-4 left-0 w-full h-1 bg-gray-300 dark:bg-gray-600"></div>

          {/* Active Line (3/4 complete = 75%) */}
          <div className="absolute top-4 left-0 w-3/4 h-1 bg-green-500"></div>

          <div className="flex justify-between relative">
            {steps.map((item, index) => (
              <div key={index} className="text-center flex-1">
                <div
                  className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center text-sm ${
                    item.active
                      ? "bg-green-500 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {index + 1}
                </div>

                <p className="mt-2 text-sm font-medium">{item.step}</p>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= Mobile Vertical Progress ================= */}
        <div className="sm:hidden relative">
          {/* Full Vertical Line */}
          <div className="absolute left-[13px] top-0 bottom-0 w-1 bg-gray-300 dark:bg-gray-600"></div>

          <div className="space-y-8">
            {steps.map((item, index) => (
              <div key={index} className="flex items-start gap-4 relative">
                {/* Circle */}
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs z-10 ${
                    item.active
                      ? "bg-green-500 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {index + 1}
                </div>

                {/* Content */}
                <div>
                  <p className="text-sm font-medium">{item.step}</p>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
