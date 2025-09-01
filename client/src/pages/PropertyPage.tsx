import { useParams } from 'react-router-dom';

export default function PropertyPage() {
  const { id } = useParams();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>숙소 상세 페이지</h1>
      <p>숙소 ID: {id}</p>
      <p>여기에 숙소 이미지, 설명, 객실 리스트 등이 들어갑니다.</p>
    </div>
  );
}
