import { memo, type FC } from "react";
import type { IBlog } from "./Main";

interface Props {
  data: IBlog[];
}

const View: FC<Props> = ({ data }) => {
  return (
    <div className="View__container p-6 bg-gray-50 min-h-[60vh]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Students</h2>

        {data?.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((student: IBlog) => (
              <article
                key={student.id}
                className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {student.fname}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{student.address}</p>
                  </div>

                  <div className="text-right space-y-1">
                    <span className="inline-block text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                      Age: {student.age}
                    </span>
                    <span className="inline-block text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                      Group: {student.group}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
                  <span>ID: {student.id}</span>
                  <button
                    type="button"
                    className="px-3 py-1 text-sm rounded-md bg-white border border-gray-200 hover:bg-gray-50"
                  >
                    Details
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center py-20">
            <p className="text-gray-400">No students yet — add some via the form.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(View);
