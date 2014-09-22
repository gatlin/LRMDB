from rest_framework import serializers
from maint.models import *

class IssueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Issue

