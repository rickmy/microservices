package Bienestar.Estudiantil.api_citas.medicalAppos;

import java.util.List;


import org.springframework.data.repository.CrudRepository;

public interface MedicalAppoRepository extends CrudRepository<MedicalAppo, Long> {

 public List<MedicalAppo> findAll();
public List<MedicalAppo> findByCondition(Boolean condition);
}
