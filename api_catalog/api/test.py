import unittest

from api.models import Diagnostic, Symptom, Treatment


class testApi(unittest.TestCase):
           

    def test_symptom_exist(self):
        
        ansiedad = Symptom.objects.get(name="ansiedad")
        self.assertEqual(ansiedad.description, "punzada en el pecho")
        
        
    def test_diagnostic_exist(self):
        
        ansiedadSocial = Diagnostic.objects.get(name="Ansiedad Social")
        self.assertEqual(ansiedadSocial.description, "Siente un pinchazo fuerte en el pecho al intentar socializar con las personas")
        
        
    def test_treatment_exist(self):
        
        meditacion = Treatment.objects.get(name="Meditación")
        self.assertEqual(meditacion.description, "Meditar durante 15 a 20 minutos todos los días")
       