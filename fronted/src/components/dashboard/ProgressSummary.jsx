export default function ProgressSummary({
  cumulativeGPA = 0,
  completedCredits = 0,
  requiredCredits = 0,
  remainingSemesters = null,
}) {
  const remaining = Math.max(0, requiredCredits - completedCredits);
  const pct = requiredCredits > 0 ? Math.round((completedCredits / requiredCredits) * 100) : 0;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="text-xl">📊</span>
        <h3 className="text-lg font-semibold text-gray-900">Quick Stats</h3>
      </div>

      {/* Stats Grid */}
      <div className="mt-6 grid grid-cols-2 gap-6">
        {/* GPA */}
        <div>
          <div className="text-3xl font-extrabold text-gray-900">
            {Number.isFinite(cumulativeGPA) ? cumulativeGPA.toFixed(2) : "0.00"}
          </div>
          <div className="mt-1 text-sm text-gray-500">Cumulative GPA</div>
        </div>

        {/* Progress Percentage */}
        <div>
          <div className="text-3xl font-extrabold text-gray-900">{pct}%</div>
          <div className="mt-1 text-sm text-gray-500">Progress</div>
        </div>

        {/* Credits Completed */}
        <div>
          <div className="text-3xl font-extrabold text-emerald-600">
            {completedCredits}
          </div>
          <div className="mt-1 text-sm text-gray-500">Credits Completed</div>
        </div>

        {/* Credits Remaining */}
        <div>
          <div className="text-3xl font-extrabold text-blue-600">{remaining}</div>
          <div className="mt-1 text-sm text-gray-500">Credits Remaining</div>
        </div>
      </div>

      {/* Optional: Remaining Semesters */}
      {remainingSemesters !== null && (
        <div className="mt-6 border-t border-gray-200 pt-6">
          <div className="text-center">
            <div className="text-2xl font-extrabold text-purple-600">
              {remainingSemesters}
            </div>
            <div className="mt-1 text-sm text-gray-500">
              Semester{remainingSemesters !== 1 ? "s" : ""} Remaining
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
