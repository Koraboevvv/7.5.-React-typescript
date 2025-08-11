import { memo, type FC } from "react";
import type { IBlog } from "./Main";

interface Props {
  data: IBlog[];
}

const View: FC<Props> = ({ data }) => {
  return (
    <div className="View">
      <div>
        {data?.map((student: IBlog) => (
          <div key={student.id}>
            <h3>{student.fname}</h3>
            <h4>{student.age}</h4>
            <p>{student.address}</p>
            <p>{student.id}</p>
            <p>{student.group}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(View);
