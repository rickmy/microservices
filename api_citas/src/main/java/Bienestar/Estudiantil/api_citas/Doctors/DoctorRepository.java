package Bienestar.Estudiantil.api_citas.Doctors;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {

 public List<Doctor> findAll();

}
