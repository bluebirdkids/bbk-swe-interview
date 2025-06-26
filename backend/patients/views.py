from rest_framework import generics
from .models import Patient
from .serializers import PatientSerializer

class PatientListAPIView(generics.ListAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
