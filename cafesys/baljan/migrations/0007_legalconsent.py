# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2018-05-17 11:31
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('baljan', '0006_auto_20180320_1034'),
    ]

    operations = [
        migrations.CreateModel(
            name='LegalConsent',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('policy_name', models.CharField(max_length=64)),
                ('policy_version', models.IntegerField()),
                ('time_of_consent', models.DateTimeField(auto_now_add=True)),
                ('revoked', models.BooleanField(default=False)),
                ('time_of_revocation', models.DateTimeField(blank=True, null=True)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='user')),
            ],
        ),
    ]
