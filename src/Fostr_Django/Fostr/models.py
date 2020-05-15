from django.db import models
from django.core.validators import RegexValidator

SPECIES_CHOICES = (
    (CAT, "Cat"),
    (DOG, "Dog"),
)

class PhoneModel(models.Model):
    phone_regix = RegexValidator(regex=r"^\+?1?\d{9,15}$", message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")
    phone_number = models.CharField(validators=[phone_regix], max_length=17, blank=True)

class Adopter(models.Model):
    name = models.CharField(max_length=50)
    age = models.PositiveSmallIntegerField(default=0)
    phone_number = PhoneModel()

class Adoptee(models.Model):
    name = models.CharField(max_length=50)
    age = models.PositiveSmallIntegerField(default=0)
    phone_number = PhoneModel()

class Pet(models.Model):
    adoptee = models.ForeignKey(Adoptee, on_delete=models.SET_NULL)
    name = models.CharField(max_length=25)
    species = models.CharField(max_length=9,
                                choice=SPECIES_CHOICES
                                defailt=DOG)