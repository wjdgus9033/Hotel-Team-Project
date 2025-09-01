import { useState, type ChangeEvent, type FormEvent } from 'react';

type SignupForm = {
  username: string;
  password: string;
};

function SignupPage() {
  const [form, setForm] = useState<SignupForm>({
    username: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8080/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      alert('✅ 회원가입 성공!');
    } else {
      alert('❌ 이미 존재하는 아이디 입니다!');
    }
  };

  return (
    <div>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="아이디"
        />
        <br />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="비밀번호"
        />
        <br />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default SignupPage;
