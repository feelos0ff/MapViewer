# -*- coding: utf-8 -*-
from django.shortcuts import render_to_response
from django.http.response import HttpResponse
import json
import collections
from clusterMap.models import Geoip
# Create your views here.

def GetMap(request): 
    return render_to_response('map.html', {})

def GetStatic(request, direction):
    return HttpResponse('Leaflet_markercluster-master/' + direction)

def GetPoints(request, nordEastLat, nordEastLon, southWestLat, southWestLon):
    # ОПТИМИЗИРОВАТЬ!
    nordEastLat = eval('[' + nordEastLat + ']')
    nordEastLon = eval('[' + nordEastLon + ']')
    
    southWestLat = eval('[' + southWestLat +']')
    southWestLon = eval('[' + southWestLon + ']')
    
    southWest = [nordEastLat, nordEastLon] 
    northEast = [southWestLat, southWestLon]
    
    maxCount = 30000
    clusterCount = 5000
    # 0й список - новые точки, 1й старые
    obj = [{},{}]
    for i in range(2):
        if northEast[0][i] > southWest[0][i] and northEast[1][i] > southWest[1][i]:
            obj[i] = set(Geoip.objects.filter(lat__lt= northEast[0][i],lat__gt = southWest[0][i],
                               lon__lt = northEast[1][i],lon__gt = southWest[1][i] ))
        else:
            obj[i] = {}
            
    if len(obj[0]) > maxCount or len(obj[0]) > maxCount:
        obj = [[],[]]

  
    # ищем точки, не входящие в новый список
    withoutRep = set(obj[0])    
    replaceLst = set(obj[1])
    
    for i in obj[1]:
        if i in obj[0]:
            withoutRep.remove(i)
            replaceLst.remove(i)
            
    obj[1] = replaceLst
    
    if len(obj[0]) > clusterCount:
        obj[0] = GetCluster(list( withoutRep), clusterCount)

    l = [[],[]]

    for i in range(2):
        for j in obj[i]:
            l[i].append(j.to_Json())

    return HttpResponse(json.dumps( l )) 

def GetCluster(points, num):
    res = list()
    clusters = collections.defaultdict(list)
    count = len(points)
    k = float(num) / float(count)
    
    for i in points:
        clusters[ ( i.lat, i.lon) ].append(i)
        
    for key, lists in clusters.items():
        num = int(k * len(lists))
        res += lists[0 : min(num+1, len(lists))]

    return res


def AddObject(request, ip, lat, lon):
    #написать здесь
    return HttpResponse()


def DelObject(request, ip):
    # написать здесь
    return HttpResponse()


def UpdateObject(request,ip, lat, lon):
    # написать здесь
    return HttpResponse()


def GetHistory(request):
    return HttpResponse()
