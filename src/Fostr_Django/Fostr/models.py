from django.db import models
from django.core.validators import RegexValidator
from django.contrib.gis.geoip2 import GeoIP2

import socket

SPECIES_CHOICES = (
    (CAT, "Cat"),
    (DOG, "Dog"),
)

class PhoneModel(models.Model):
    phone_regix = RegexValidator(regex=r"^\+?1?\d{9,15}$", message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")
    phone_number = models.CharField(validators=[phone_regix], max_length=17, blank=True)

class Adopter(models.Model):

    def __init__(self, name, age, phone_number):
        self.name = name
        self.age = age
        self.coords = GeoIP2.coords(socket.gethostbyname(socket.gethostname()))
        self.phone_number = phone_number
        #make json and put on AWS?


    name = models.CharField(max_length=50)
    age = models.PositiveSmallIntegerField(default=0)
    coords = []
    phone_number = PhoneModel()

class Foster(models.Model):

    def __init__(self, name, age, phone_number):
        self.name = name
        self.age = age
        self.coords = GeoIP2.coords(socket.gethostbyname(socket.gethostname()))
        self.phone_number = phone_number

    def add_pet(self, pet):
        self.pets.append(pet)

    def remove_pet(self, pet):
        self.pets.remove(pet)

    name = models.CharField(max_length=50)
    age = models.PositiveSmallIntegerField(default=0)
    coords = []
    phone_number = PhoneModel()
    pets = []  #should be unique IDs

class Pet(models.Model):

    def __init__(self, foster, name, age, species, breed):
        self.foster = foster
        self.name = name
        self.age = age
        self.species = species
        self.breed = breed

    foster = models.ForeignKey(Foster, on_delete=models.SET_NULL) #should be unique ID
    name = models.CharField(max_length=25)
    age = models.PositiveSmallIntegerField(default=0)
    species = models.CharField(max_length=9,
                                choice=SPECIES_CHOICES
                                default=DOG)
    breed = models.CharField(max_length=25)