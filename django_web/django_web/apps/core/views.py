from django.views.generic import TemplateView


class AppStageView(TemplateView):
    template_name = "core/index.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["extra_context"] = {"foo": 1, "bar": "blah", "django": "django"}

        return context
