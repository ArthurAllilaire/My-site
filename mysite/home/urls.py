from django.urls import path
from . import views

urlpatterns = [
    # Should be able to do both getting students and creating students based on post or GET method
    path('api/users', views.users, name="users"),
    # Have PUT and DELETE posts to edit or delete users
    path('api/user_details/<int:user_id>',
         views.user_details, name="user_details"),
    # Articles
    path('api/articles', views.articles, name="articles"),
    path('api/article_details/<int:article_id>',
         views.article_details, name="article_details"),
    # Comments
    path('api/comments', views.comments, name="comments"),
    path('api/comment_details/<int:comment_id>',
         views.comment_details, name="comment_details"),
]
