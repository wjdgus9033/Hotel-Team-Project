import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>홈페이지</h1>
      <button type='submit' onClick={() => navigate('/signup')}>회원가입</button>
    </div>
  );
}

export default HomePage;
