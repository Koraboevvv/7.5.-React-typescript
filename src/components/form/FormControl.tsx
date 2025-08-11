import {
  memo,
  useState,
  type ChangeEvent,
  type Dispatch,
  type FC,
  type FormEvent,
  type SetStateAction,
} from "react";
import type { IBlog } from "./Main";

interface Props {
  setData: Dispatch<SetStateAction<IBlog[]>>;
}

interface IState {
  fname: string;
  age: number;
  address?: string;
  group: number
}

const initialState: IState = {
  fname: "",
  age: 0,
  address: "",
  group: 0
};

const FormControl: FC<Props> = ({setData}) => {
  const [formData, setFormData] = useState<IState>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let newBlog : IBlog = {
      ...formData,
      id: Date.now()
      
    }
    setData(prev => ([...prev, newBlog]))
    setFormData(initialState);

  };
  return (
    <div className="FormControl">
      <h2>FormControl</h2>
      <form onSubmit={handleSubmit} action="">
        <input
          name="fname"
          value={formData.fname}
          onChange={handleChange}
          type="text"
        />
        <input
          name="age"
          value={formData.age}
          onChange={handleChange}
          type="number"
        />
        <input
          name="address"
          value={formData.address}
          onChange={handleChange}
          type="text"
        />
        <input
          name="group"
          value={formData.group}
          onChange={handleChange}
          type="number"
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default memo(FormControl);
