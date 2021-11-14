from rest_framework import serializers
from .models import User, Article, Tags, Comment


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'last_login', 'is_superuser', 'username', 'first_name', 'last_name', 'email', 'is_staff',
                  'is_active', 'date_joined', 'groups')


class TagsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tags
        fields = ('Tag')


class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = ('article', 'author', 'text')


class ArticleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Article
        fields = ('author', 'content', 'created', 'updated_at',
                  'title', 'slug', 'status', 'tags')
