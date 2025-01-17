# Generated by Django 4.2.13 on 2024-07-04 04:01

import ckeditor.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myportfolio', '0003_contacto_mensaje_cifrado'),
    ]

    operations = [
        migrations.AddField(
            model_name='proyecto',
            name='contenido',
            field=ckeditor.fields.RichTextField(default=''),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='contacto',
            name='mensaje_cifrado',
            field=models.TextField(default=''),
        ),
    ]
