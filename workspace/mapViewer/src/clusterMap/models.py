
# Create your models here.
# -*- coding: utf-8 -*-
'''


@author: feelosoff
'''

from django.db import models


class Geoip(models.Model):
    ip = models.GenericIPAddressField(primary_key=True)
    lat = models.FloatField(blank=True, null=True)
    lon = models.FloatField(blank=True, null=True)
    country = models.CharField(max_length=10, blank=True)
    city = models.CharField(max_length=35, blank=True)
    
    def to_Json(self):
        return [self.lat , self.lon, self.ip, abs(hash(self.ip)) % 2 ** 32]
    def __unicode__(self):
        return str(self.ip)

    class Meta:
        managed = False
        db_table = 'geoip'


    