from django.shortcuts import render

def index(request):
	return render(request, 'personal/home.html',)

def contact(request):
	return render(request, 'personal/basic.html',{'content':['If you woud like to contact me, please email me', 'varun.rao095@gmail.com']})
# Create your views here.
