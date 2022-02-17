import { createRef, useRef, useState } from 'react';

//useRef(디자인)
//dom을 변경할 때 사용
function App() {
  const myRef = useRef(null);

  const [list, setList] = useState([
    { id: 1, name: '1길동' },
    { id: 2, name: '2길동' },
  ]);

  const myRefs = Array.from({ length: list.length }).map(() => createRef());

  return (
    <div>
      <button
        onClick={() => {
          console.log(myRef);
          console.log(myRef.current);
          //myRef.current.remove();
          //myRef.current.innerHTML = 'abc';
          myRef.current.style.backgroundColor = 'red';
          console.log(myRef.current.style.backgroundColor);
          myRefs[0].current.style.backgroundColor = 'blue';
        }}
      >
        색변경
      </button>
      <div ref={myRef}>
        박스
        {list.map((user, index) => (
          <h1 ref={myRefs[index]}>{user.name}</h1>
        ))}
      </div>
    </div>
  );
}

export default App;
