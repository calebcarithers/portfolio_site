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
                             nebula_game_view, painthead_gallery_view, bloonnoise_view, news_jpg_view, tami_view, user_view,
                             iheart_view, engineering_redirect, AR1_view, AR2_view, AR3_view, AR4_view, AR5_view, AR6_view, AR7_view,
                             AR_index_view, AB_AR_view)

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
    path('what-user/', user_view, name='user-tami'),
    path('what-i<3/', iheart_view, name='user-tami'),
    path('what-ab-ar', AB_AR_view, name='ab-ar'),

    path('engineering/', engineering_redirect, name='engineering'),

    path('AR01/', AR1_view, name='AR-collage-01'),
    path('ar01/', AR1_view, name='AR-collage-01'),
    path('AR02/', AR2_view, name='AR-collage-02'),
    path('ar02/', AR2_view, name='AR-collage-02'),
    path('AR03/', AR3_view, name='AR-collage-03'),
    path('ar03/', AR3_view, name='AR-collage-03'),
    path('AR04/', AR4_view, name='AR-collage-04'),
    path('ar04/', AR4_view, name='AR-collage-04'),
    path('AR05/', AR5_view, name='AR-collage-05'),
    path('ar05/', AR5_view, name='AR-collage-05'),
    path('AR06/', AR6_view, name='AR-collage-06'),
    path('ar06/', AR6_view, name='AR-collage-06'),
    path('AR07/', AR7_view, name='AR-collage-07'),
    path('ar07/', AR7_view, name='AR-collage-07'),

    path('andyboyleAR/', AR_index_view, name='AR-index')
]
