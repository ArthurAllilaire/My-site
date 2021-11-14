from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.db import models
from django.db.models.deletion import CASCADE, SET_NULL

STATUS = ((0, "Draft"), (1, "Publish"), (2, "Archive"))


class User(AbstractUser):
    readinglist = models.ManyToManyField("Article", blank=True, related_name="readers")


class Article(models.Model):
    # I want to create new listing - one to many relationship between comments and listing - done in comment model
    # one to many relationship for user to listing
    author = models.ForeignKey(User, on_delete=CASCADE, related_name="publications")
    content = models.TextField()

    created = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    title = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=200, unique=True)

    status = models.IntegerField(choices=STATUS, default=0)
    tags = models.ForeignKey(
        "Tags",
        on_delete=SET_NULL,
        blank=True,
        null=True,
        related_name="articles",
    )
    # When returning the articles order most recent first
    class Meta:
        ordering = ["-created"]

    def __str__(self):
        return self.title


#     def save(self, *args, **kwargs):
#         # If a category was defined
#         if self.category_text:
#             category_inst = Category.objects.filter(name=self.category_text)
#             # If the category does not already exist create it
#             if not category_inst:
#                 # Create and save category based on category_text.
#                 category_inst = Category.objects.create(name=self.category_text)

#                 # Add the category to the article
#                 self.category = category_inst
#             else:
#                 # Add the category to the article
#                 self.category = category_inst[0]
#         # Save the modified article to the database.
#         super().save(*args, **kwargs)  # Call the "real" save() method.


class Tags(models.Model):
    Tag = models.CharField(max_length=100, unique=True)


class Comment(models.Model):
    article = models.ForeignKey(Article, on_delete=CASCADE, related_name="comments")
    author = models.ForeignKey(User, on_delete=CASCADE, related_name="author")
    text = models.TextField()