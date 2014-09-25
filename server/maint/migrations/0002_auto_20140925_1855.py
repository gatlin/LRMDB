# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('maint', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='issue',
            name='date_performed',
            field=models.DateTimeField(null=True, blank=True),
        ),
    ]
