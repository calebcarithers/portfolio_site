"""personal URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from portfolio.views import (home_view, nebula_view, painthead_view, wordplay_view, wordplay_gallery_view, bloonnoise_view,
                             nebula_game_view, painthead_gallery_view, bloonnoise_view, news_jpg_view, tami_view, engineering_redirect)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home_view, name='home'),
    path('what-painthead/', painthead_view, name='what-painthead'),
    path('painthead/', painthead_gallery_view, name='painthead'),
    path('what-nebula/', nebula_view, name='what-nebula'),
    path('what-wordplay/', wordplay_view, name='what-wordplay'),
    path('wordplay/', wordplay_gallery_view, name='wordplay'),
    path('what-bloonnoise/', bloonnoise_view, name='what-bloonnoise'),
    path('play-nebula/', nebula_game_view, name='nebula'),
    path('what-news-jpg/', news_jpg_view, name='news_jpg'),
    path('what-tami/', tami_view, name='what-tami'),
    path('engineering/', engineering_redirect, name='engineering')
]
