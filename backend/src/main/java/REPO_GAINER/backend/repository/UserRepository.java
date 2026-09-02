package REPO_GAINER.backend.repository;

import java.util.Optional;
import java.util.UUID;

import REPO_GAINER.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;



public interface UserRepository extends JpaRepository<User,UUID> {
    Optional<User> findByGithubId(Long githubId);
}
