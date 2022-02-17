import styled from 'styled-components';
import './App.css';
import { Title } from './MyCss';
//useRef(디자인)
//dom을 변경할 때 사용

// const a = {
//   backgroundColor: 'red',
// };

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

function App() {
  return (
    <div>
      <Title>안녕</Title>
      <div className="box-style">헬로우</div>
    </div>
  );
}

export default App;
