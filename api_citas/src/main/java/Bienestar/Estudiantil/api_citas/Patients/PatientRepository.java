package Bienestar.Estudiantil.api_citas.Patients;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<Patient, Long> {

 public List<Patient> findAll();

}
