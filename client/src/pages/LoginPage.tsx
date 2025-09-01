export default function LoginPage() {
  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: '0 auto' }}>
      <h1>로그인</h1>
      <form>
        <div style={{ marginBottom: '1rem' }}>
          <label>이메일</label>
          <input type="email" style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>비밀번호</label>
          <input type="password" style={{ width: '100%' }} />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
