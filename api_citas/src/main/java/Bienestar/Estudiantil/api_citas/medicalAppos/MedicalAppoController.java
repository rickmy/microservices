package Bienestar.Estudiantil.api_citas.medicalAppos;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Bienestar.Estudiantil.api_citas.Patient.PatientClient;
import Bienestar.Estudiantil.api_citas.medicalAppos.DTO.MedicalAppoDTO;
import Bienestar.Estudiantil.api_citas.medicalAppos.DTO.CreateMedicalAppoDTO;

@RestController
@RequestMapping("api/medicalAppo")
@CrossOrigin({"*"})

public class MedicalAppoController {

 @Autowired MedicalAppoService medicalAppoService;


 @GetMapping("/")
 public List<MedicalAppo> findAll(){
  return medicalAppoService.findAll();
 }
 @GetMapping("/{id}/")
 public MedicalAppo findById(@PathVariable Long id){
  return medicalAppoService.findById(id);
 }

 @GetMapping({"/reportMedical/{id}/"})
 public MedicalAppoDTO findByIdReport(@PathVariable Long id){
    return medicalAppoService.findByIdReport(id);
   }

 @PostMapping("/")
 public ResponseEntity<MedicalAppo> save(@RequestBody CreateMedicalAppoDTO entity){
  return medicalAppoService.create(entity);
 }

 @PutMapping("/")
 public MedicalAppo update(@RequestBody MedicalAppo entity){
  return medicalAppoService.save(entity);
 }

 @DeleteMapping("/{id}")
 public void deleteById(@PathVariable Long id){
  medicalAppoService.deleteById(id);
 }

}

