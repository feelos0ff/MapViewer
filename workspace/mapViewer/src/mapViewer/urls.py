from django.conf.urls import patterns, include, url
from clusterMap.views import GetMap
from django.contrib import admin
from django.conf import settings
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'clusterMap.views.GetMap'),
    url(r'^points/(-?\d+\.?\d*,-?\d+\.?\d*)/(-?\d+\.?\d*,-?\d+\.?\d*)/(-?\d+\.?\d*,-?\d+\.?\d*)/(-?\d+\.?\d*,-?\d+\.?\d*)/$', 
        'clusterMap.views.GetPoints'),

    url(r'^admin/$', include(admin.site.urls)),
)
#
#if settings.DEBUG:
#    urlpatterns += patterns('',
#                            url(r'^Leaflet_markercluster-master/(?P<path>*)$','clusterMap.views.GetStatic'),
#                            )

from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns += staticfiles_urlpatterns()  
 