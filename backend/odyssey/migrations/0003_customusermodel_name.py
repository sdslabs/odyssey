# Generated by Django 4.1.2 on 2022-10-13 12:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('odyssey', '0002_customusermodel'),
    ]

    operations = [
        migrations.AddField(
            model_name='customusermodel',
            name='name',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
