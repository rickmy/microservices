from rest_framework import viewsets

from api.models import Treatment, Symptom, Diagnostic
from api.serializers import TreatmentSerializer, SymptomSerializer, DiagnosticSerializer

class TreatmentViewSet(viewsets.ModelViewSet):
    serializer_class = TreatmentSerializer
    queryset = Treatment.objects.all()
    
class SymptomViewSet(viewsets.ModelViewSet):
    serializer_class = SymptomSerializer
    queryset = Symptom.objects.all()
    
class DiagnosticViewSet(viewsets.ModelViewSet):
    serializer_class = DiagnosticSerializer
    queryset = Diagnostic.objects.all()



