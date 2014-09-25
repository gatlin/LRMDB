from django.conf.urls import patterns, include, url
from django.contrib import admin
from rest_framework import routers
from maint import views

router = routers.SimpleRouter()
router.register(r'issues', views.IssueViewSet)

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'server.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^$', views.index, name="index"),
    url(r'^api/v1/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls',
        namespace='rest_framework')),
    url(r'^admin/', include(admin.site.urls)),
    
)
