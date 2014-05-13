from django.conf.urls import patterns, include, url
from clusterMap.views import GetMap
from django.contrib import admin
from django.conf import settings
admin.autodiscover()

ipDiapPattern = r'((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)/\d*'
floatPattern  = r'-?\d+\.?\d*'

urlpatterns = patterns('',

    url(r'^$', 'clusterMap.views.GetMap'),
    url(r'^points/(' + floatPattern +','+ floatPattern +')/('+ floatPattern +','+ floatPattern +')/('
        + floatPattern +','+ floatPattern +')/('+ floatPattern +','+ floatPattern +')/$', 
        'clusterMap.views.GetPoints'),
    url(r'^delete/(?P<ip>'+ ipDiapPattern+')/', 
        'clusterMap.views.DelObject'),
    url(r'^update/(?P<ip>'+ ipDiapPattern+')/(?P<lon>)'+ floatPattern + '(?P<lat>)'+ floatPattern +')/$',  
        'clusterMap.views.UpdateObject'),
    url(r'^add/(?P<ip>'+ ipDiapPattern+')/(?P<lon>)'+ floatPattern + '(?P<lat>)'+ floatPattern +')/$',  
        'clusterMap.views.UpdateObject'),
    url(r'^admin/$', include(admin.site.urls)),
    
)


from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns += staticfiles_urlpatterns()  
 