package Bienestar.Estudiantil.api_citas.medicalAppos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicalAppoRepository extends JpaRepository<MedicalAppo, Long> {

 public List<MedicalAppo> findAll();

}
