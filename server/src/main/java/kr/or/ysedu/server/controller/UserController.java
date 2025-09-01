package kr.or.ysedu.server.controller;

import kr.or.ysedu.server.dto.UserDto;
import kr.or.ysedu.server.model.User;
import kr.or.ysedu.server.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class UserController {

    private final UserRepository repo;

    public UserController(UserRepository repo) {
        this.repo = repo;
    }

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody UserDto userDto) {
        // 아이디 중복 검사
        if (repo.existsByUsername(userDto.getUsername())) {
            return ResponseEntity.status(409).body("이미 존재하는 아이디입니다.");
        }

        // User 엔티티로 변환
        User user = new User();
        user.setUsername(userDto.getUsername());
        user.setPassword(userDto.getPassword()); // 비밀번호 암호화는 추후 추가

        repo.save(user); // DB 저장

        return ResponseEntity.ok("회원가입 성공");
    }
}
