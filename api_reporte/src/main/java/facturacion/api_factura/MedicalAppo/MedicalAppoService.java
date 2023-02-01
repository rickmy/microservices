package facturacion.api_factura.MedicalAppo;
import java.io.FileNotFoundException;
import java.sql.Date;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;
import facturacion.api_factura.MedicalAppo.MedicalAppoClient;
import facturacion.api_factura.MedicalAppo.MedicalAppoDTO;
import jakarta.transaction.Transactional;
import net.sf.jasperreports.engine.JREmptyDataSource;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

@Transactional
@Service
public class MedicalAppoService {
  @Autowired MedicalAppoClient medicalAppoClient;
    public JasperPrint getMedicalAppoReporte(Long id) {
        List<Map<String, Object>> dataList = new ArrayList<>();
        Map<String, Object> reportParameters = new HashMap<String, Object>();

    
        MedicalAppoDTO cliente =  medicalAppoClient.findById(id);

        reportParameters.put("nombrePaciente", cliente.getCompleteName());
        reportParameters.put("identificacion",cliente.getDni());
        reportParameters.put("emailPaciente",cliente.getEmail());
        reportParameters.put("generoPaciente",cliente.getSex());
        reportParameters.put("sintomas",cliente.getNameSymptom());
        reportParameters.put("tratamiento",cliente.getNameTreatment());
        reportParameters.put("diagnostico",cliente.getNameDiagnostic());

        dataList.add(reportParameters);

        reportParameters.put("HistoriaClinica", new JRBeanCollectionDataSource(dataList));
  
        JasperPrint reportJasperPrint = null;
            try {
                reportJasperPrint = JasperFillManager.fillReport(
                        JasperCompileManager.compileReport(
                                ResourceUtils.getFile("classpath:jrxml/medicoreportes.jrxml")
                                        .getAbsolutePath()) // path of the jasper report
                        , reportParameters // dynamic parameters
                        , new JREmptyDataSource());
            } catch (FileNotFoundException | JRException e) {
                e.printStackTrace();
            }
            return reportJasperPrint;
       
    }
    
   
}
