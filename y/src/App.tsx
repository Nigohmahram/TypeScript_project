import{ChangeEvent, useState} from 'react'
import  "./home-module.css";
import { IData } from './interfaces';
import { data } from './constants';
const App = (): JSX.Element => {

  const [title, setTitle] = useState<string>('');
  const [arr, setArr] = useState<IData[]>(data);

  const changeHandler  = (evt: ChangeEvent<HTMLInputElement >) => {
    setTitle(evt.target.value)
  }

  const handleSubmit = (): void => {
    if(!title?.length) return;
    const newData ={
      title: title,
      id: new Date().getTime(),
      description: 'Description',
    }
    setArr([...arr, newData])

    setTitle ('');
    console.log(title);

  }

  const deleteItem = (id: number): void => {
    const newData = arr.filter(c => c.id !=id);
    setArr(newData)
  }
  return ( <div className='todo'>
    <h1 className='title'>특별 목록</h1>
  <div className='button'>
    <button onClick={handleSubmit} className='button'>추가</button>
  </div>
    <input  placeholder="Enter Todo" value={title} onChange={changeHandler} className='input'/>
    <div className='card'>
    {arr.map(c => (
      <div key={c.id} className='cardItem'>
        <p>{c.title}</p>
        <div className='delBtn'>
          <button onClick={() => deleteItem(c.id)}>삭제</button>
        </div>
      </div>
    ))}
    </div>
  </div>
  );
};
export default App;