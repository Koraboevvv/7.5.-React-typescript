import { memo, useState } from 'react';
import FormControl from './FormControl';
import View from './View';

export interface IBlog {
  id : number
  fname: string;
  age: number;
  address?: string;
  group: number
}

const Main = () => {
    const [data, setData] = useState<IBlog[]>([])
    console.log(data);
    
  return (
    <div className="Main">
      <FormControl setData={setData}/>
      <View data={data}/>
    </div>
  );
};

export default memo(Main);