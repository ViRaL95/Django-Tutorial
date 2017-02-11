from django.shortcuts import render
from django.http import HttpResponse
import smtplib
import json


def index(request):
	if request.method=="POST":
		infodata=request.POST.getlist("messageinfo")[0]
		name=request.POST.getlist("name")[0]
		email=request.POST.getlist("email")[0]
		content="The message was "+infodata+" and was sent from "+name+" their email was "+email
		print(content)
		mail=smtplib.SMTP('smtp.gmail.com',587)
		mail.ehlo()
		mail.starttls()
		mail.login('Varun.Rao095@gmail.com','Flyingfruits1!')
		mail.sendmail('Varun.Rao095@gmail.com','Varun.Rao095@gmail.com',content)
		mail.close()
		return HttpResponse()