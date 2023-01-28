package Bienestar.Estudiantil.api_citas.Specialties;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SpecialtyRepository extends JpaRepository<Specialty, Long> {

 public List<Specialty> findAll();

}
