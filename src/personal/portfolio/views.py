from django.shortcuts import render
from django.template import Context, loader
from django.http import HttpResponseRedirect
# from .models import australianaModel


# Create your views here.
def home_view(request):
    return render(request, "portfolio/index_newer.html", {})

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

def tami_view(request):
    return render(request, "portfolio/what-tami.html", {})

def user_view(request):
    return render(request, "portfolio/what-user.html", {})

def iheart_view(request):
    return render(request, "portfolio/what-iheart.html", {})

def engineering_redirect(request):
    return HttpResponseRedirect("https://calebcarithers.wixsite.com/mysite/engineering")

def AR1_view(request):
    return render(request, "portfolio/AR_test_01.html", {})

def AR2_view(request):
    return render(request, "portfolio/AR_test_02.html", {})

def AR3_view(request):
    return render(request, "portfolio/AR_test_03.html", {})

def AR4_view(request):
    return render(request, "portfolio/AR_test_04.html", {})

def AR5_view(request):
    return render(request, "portfolio/AR_test_05.html", {})

def AR6_view(request):
    return render(request, "portfolio/AR_test_06.html", {})

def AR7_view(request):
    return render(request, "portfolio/AR_test_07.html", {})

def AR_index_view(request):
    return render(request, "portfolio/AR_index.html", {})

def AB_AR_view(request):
    return render(request, "portfolio/what-ab-ar.html", {})

def jewelryphone_view(request):
    return render(request, "portfolio/what-jewelryphone.html", {})

def AB_3D_zine_tap_view(request):
    return render(request, "portfolio/AB_3D_zine_tap.html", {})

def AR_collage_experiment_view(request):
    return render(request, "portfolio/what-ar-collage-experiments.html", {})

def sketches_view(request):
    return render(request, "portfolio/what-sketches.html", {})