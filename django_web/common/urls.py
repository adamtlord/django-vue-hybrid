from django.urls import path

from common.views import AppStageView, ExampleView

urlpatterns = [
    path("", AppStageView.as_view(), name="app_stage"),
    path("example/", ExampleView.as_view(), name="example"),
]
