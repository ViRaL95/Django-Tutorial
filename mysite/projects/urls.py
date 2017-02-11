from django.conf.urls import url, include
from . import views 
#The views is essentially saying that there is nothing else to add onto. name is the function name that must exist
#in the views file
urlpatterns = [
    url(r'^$',views.index, name="index"),
]
