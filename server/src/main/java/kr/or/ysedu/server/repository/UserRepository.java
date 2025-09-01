package kr.or.ysedu.server.repository;

import kr.or.ysedu.server.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByUsername(String username); // 아이디 중복 체크용
}
