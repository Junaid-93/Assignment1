import {useEffect,useState} from 'react'

function Example() {
    const [count , setCount] = useState(0);
    useEffect(()=>{
        console.log('runing');
    },[])
  return (
    <>
    <div>Example</div>
    {count}
    <button onClick={()=>setCount(count + 1)}>count</button>
    </>
  )
}

export default Example;