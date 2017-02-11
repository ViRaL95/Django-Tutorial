from django.shortcuts import render
from django.http import HttpResponse
import smtplib
def index(request):
	return render(request, 'personal/home.html',)

