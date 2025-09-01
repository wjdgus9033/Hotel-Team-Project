import { useParams } from 'react-router-dom';

export default function BookingPage() {
  const { id } = useParams();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>예약 페이지</h1>
      <p>객실 ID: {id}</p>
      <p>예약 정보를 입력하고 결제를 진행합니다.</p>
    </div>
  );
}
