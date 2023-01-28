from rest_framework import serializers
from api.models import Treatment, Symptom, Diagnostic

class TreatmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Treatment
        fields= "__all__"

class SymptomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Symptom
        fields= "__all__"
        
class DiagnosticSerializer(serializers.ModelSerializer):
    class Meta:
        model = Diagnostic
        fields= "__all__"
        