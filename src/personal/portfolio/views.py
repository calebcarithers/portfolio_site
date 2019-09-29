from django.shortcuts import render
from django.template import Context, loader




# Create your views here.
def home_view(request):
    return render(request, "portfolio/index_new.html", {})

def painthead_view(request):
    return render(request, "portfolio/what-painthead.html", {})

def painthead_gallery_view(request):
    return render(request, "portfolio/painthead.html", {})

def nebula_view(request):
    return render(request, "portfolio/what-nebula.html", {})

def nebula_game_view(request):
    return render(request, "Nebula/index.html", {})

def wordplay_view(request):
    return render(request, "portfolio/what-wordplay.html", {})

def wordplay_gallery_view(request):
    return render(request, "portfolio/wordplay.html", {})

def bloonnoise_view(request):
    return render(request, "portfolio/what-bloonnoise.html", {})

def news_jpg_view(request):
    return render(request, "portfolio/what-news-jpg.html", {})
