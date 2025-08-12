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
  group: number;
}

const initialState: IState = {
  fname: "",
  age: 0,
  address: "",
  group: 0,
};

const FormControl: FC<Props> = ({ setData }) => {
  const [formData, setFormData] = useState<IState>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.fname || !formData.age || !formData.group) {
      alert("Toldiring!!!");
      return;
    }
    const newBlog: IBlog = {
      ...formData,
      id: Date.now(),
    };
    setData(prev => [...prev, newBlog]);
    setFormData(initialState);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-sm max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Add Student</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="fname"
          value={formData.fname}
          onChange={handleChange}
          type="text"
          placeholder="Full name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
        />
        <input
          name="age"
          value={formData.age || ""}
          onChange={handleChange}
          type="number"
          placeholder="Age"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
        />
        <input
          name="address"
          value={formData.address}
          onChange={handleChange}
          type="text"
          placeholder="Address"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
        />
        <input
          name="group"
          value={formData.group || ""}
          onChange={handleChange}
          type="number"
          placeholder="Group"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
        />
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default memo(FormControl);
