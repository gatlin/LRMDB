# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Issue',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('type', models.IntegerField(null=True, blank=True)),
                ('description', models.CharField(max_length=500, null=True, blank=True)),
                ('unit_number', models.CharField(max_length=500, null=True, blank=True)),
                ('date_performed', models.DateTimeField(auto_now_add=True)),
                ('brand', models.CharField(max_length=500, null=True, blank=True)),
                ('model_number', models.CharField(max_length=500, null=True, blank=True)),
                ('price_paid', models.CharField(max_length=500, null=True, blank=True)),
                ('who_completed', models.CharField(max_length=500, null=True, blank=True)),
                ('who_contractor', models.CharField(max_length=500, null=True, blank=True)),
                ('rate_charged', models.CharField(max_length=500, null=True, blank=True)),
                ('comments', models.CharField(max_length=500, null=True, blank=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
