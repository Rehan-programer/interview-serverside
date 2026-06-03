export default function Table({
  columns = [],
  data = [],
  renderRow,
  renderCard,
}) {
  return (
    <div className="w-full">

    <div className="xl:hidden max-h-[500px] overflow-y-auto pr-1 sidebar-scroll grid grid-cols-1 md:grid-cols-2 gap-4">

        {data.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border  border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-4 shadow-sm"
          >
            {renderCard(item, index)}
          </div>
        ))}

      </div>

      <div className="hidden xl:block">

        <div className="max-h-[500px] overflow-y-auto sidebar-scroll rounded-2xl border border-gray-200 dark:border-white/10 bg-(--background) shadow-sm">

          <table className="w-full">

            <thead className="sticky top-0 z-10 bg-(--background) border-b border-gray-200 dark:border-white/10">
              <tr className="border-b border-gray-200 dark:border-white/10">

                {columns.map((col, i) => (
                  <th
                    key={i}
                    className="text-left px-10 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400"
                  >
                    {col.header}
                  </th>
                ))}

              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">

              {data.map((item, index) =>
                renderRow(item, index)
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}