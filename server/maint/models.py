from django.db import models
from django.contrib import admin

# type
# description
# unit number
# date maintenance was performed
# brand (if applicable)
# model number (if applicable)
# price paid (if applicable)
# name of person who completed maintenance (if applicable)
# name of contracted individual or company (if applicable)
# rate charged (if applicable)
# comments

class Issue(models.Model):
    '''
    Simple: an issue
    '''
    type = models.IntegerField(null=True,blank=True)
    description = models.CharField(max_length=500,null=True,blank=True)
    unit_number = models.CharField(max_length=500,null=True,blank=True)
    date_performed = models.DateTimeField(null=True,blank=True)
    brand = models.CharField(max_length=500,null=True,blank=True)
    model_number = models.CharField(max_length=500,null=True,blank=True)
    price_paid = models.CharField(max_length=500,null=True,blank=True)
    who_completed = models.CharField(max_length=500,null=True,blank=True)
    who_contractor = models.CharField(max_length=500,null=True,blank=True)
    rate_charged = models.CharField(max_length=500,null=True,blank=True)
    comments = models.CharField(max_length=500,null=True,blank=True)

class IssueAdmin(admin.ModelAdmin):
    pass
admin.site.register(Issue, IssueAdmin)

# Create your models here.
