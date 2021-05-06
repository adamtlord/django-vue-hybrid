from django.views.generic.base import TemplateView
from django.views.generic import ListView
from django.contrib.auth import get_user_model


class AppStageView(TemplateView):

    template_name = "common/index.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["extra_context"] = {"foo": 1, "bar": "blah", "django": "django"}

        return context


class ExampleView(ListView):
    model = get_user_model()
    context_object_name = "user_list"
    template_name = "common/example.html"
