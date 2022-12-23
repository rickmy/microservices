from rest_framework.routers import DefaultRouter
from api.views import TreatmentViewSet, SymptomViewSet, DiagnosticViewSet

router = DefaultRouter()

router.register('api/treatment', TreatmentViewSet)
router.register('api/symptom', SymptomViewSet)
router.register('api/diagnostic', DiagnosticViewSet)


urlpatterns = []

urlpatterns += router.urls


