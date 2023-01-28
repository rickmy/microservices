package Bienestar.Estudiantil.api_citas.Follows;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FollowRepository extends JpaRepository<Follow, Long> {

 public List<Follow> findAll();

}
