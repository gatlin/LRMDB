from django.shortcuts import render, redirect
from rest_framework import viewsets, status
from rest_framework.permissions import AllowAny
from maint.serializers import *
from rest_framework.decorators import detail_route, list_route
from rest_framework.response import Response
from django.contrib.auth.decorators import login_required

@login_required
def index(request):
    return redirect("/static/maint/index.html")

class IssueViewSet(viewsets.ModelViewSet):
    queryset = Issue.objects.all()
    serializer_class = IssueSerializer
    permission_classes = [AllowAny]

    @list_route(methods=['PUT','POST'])
    def bulk(self,request):
        for datum in request.DATA:
            if int(datum['id']) < 0:
                print "New issue: %d" % datum['id']
                del datum['id']
                d = None
                if datum['date_performed'] != '0000-00-00 00:00':
                    d = datum=['date_performed']
                p = "n/a"
                if datum['price_paid'] != '':
                    p = datum['price_paid']
                r = 'n/a'
                if datum['rate_charged'] != '':
                    r = datum['rate_charged']
                i = Issue(type=datum['type'],
                          unit_number=datum['unit_number'],
                          description=datum['description'],
                          date_performed=d,
                          brand=datum['brand'],
                          model_number=datum['model_number'],
                          price_paid=p,
                          who_completed=datum['who_completed'],
                          who_contractor=datum['who_contractor'],
                          rate_charged=r,
                          comments=datum['comments'])
                i.save()

            else:
                i = Issue.objects.get(pk=datum['id'])
                i.unit_number = datum['unit_number']
                i.type        = datum['type']
                i.description = datum['description']
                i.date_performed = datum['date_performed']
                i.brand = datum['brand']
                i.model_number = datum['model_number']
                i.price_paid = datum['price_paid']
                i.who_completed = datum['who_completed']
                i.who_contractor = datum['who_contractor']
                i.rate_charged = datum['rate_charged']
                i.comments = datum['comments']
                i.save()

        return Response(status=200)
