from django.urls import path

from common.views import AppStageView

urlpatterns = [
    path('', AppStageView.as_view(), name="app_stage"),
]
