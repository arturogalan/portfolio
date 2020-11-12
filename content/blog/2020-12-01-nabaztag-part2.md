---
slug: "raspberry-nabaztag-part2"
date: "2020-12-01"
readtime: "5 minutes"
title: "Nabaztag - Raspberry powered rabbit (Part 2)"
tags: ["Python", "Raspberry pi"]
summary: "Steps and working in progress of my small Raspberry Pi driven robot"
image:
  path: ../media/nabaztag/karotz_bg.jpg
  alt: "Nabaztag"
  caption: '<span>Photo from <a href="https://www.nabaztag.com" target="_blank">Nabaztag site</a></span>'
---
# Give the Nabaztag a new life with Python
At the bottom of the page in the [hackster blog](https://www.hackster.io/bastiaan-slee/nabaztag-gets-a-new-life-with-google-aiy-e9f2c8) you have some initial scripts written in Python to ensure that everything works and to make the initial read of the ears enconders.
Although this is an incredible start point to build something more, the article stops there. So from here it's up to us to write some code to start doing more things with the robot, some tips that come to my mind: 
* Make a small library to handle the ears movements and be able to put them in different positions and to go to a start position everytime we switch on the rabbit  
* Connect to Google assistant with the examples provided by the Google AIY kit and make the robot listen by moving the ears
* Try to change the wake up word of the rabbit instead of Hey Google or Alexa...
* Do our own commands, and fallback to Google assistant if the command is not recognized.

I will pass all the scripts via FTP to the rabbit, with the initial [Google Assistant Image](https://github.com/google/aiyprojects-raspbian/releases) installed in a SD Card.


## Handle the ears with Python

As we only can know when the ears are up, to make this possible we first need to put the earsUp and once we have the ears in a known position then we will set up some methods to put the ears in different positions.
* **earsUp**: To do this we invoke the method `move_ear_till_up` once for each ear, those two threads will be moving the ears until the booleans variables passed by value to them change to false.  
At the same time we invoke the method `ReadEarsEncoders2` that will be the responsible of this boolean values reading the encoders (if an encoder stops sending its signal for some milliseconds means that one of the ears is up). When this happens the boolean value changes and the first method thread notices it and stops moving.  

Once we have the ears up we can do different movements to express some feelings knowing that is going to be always the same distance as the ears are in the initial position.

* **earsSad**: Put the ears down.
* **earsPayAttention**: Move a little the ears like listening to a command.
* **earsActionDone**: Come back to the original position after pay attention.


## Making the rabbit talk with espeak

I've installed in the OS a library called espeak a text to speech library with Spanish accent, I have three different flavors depending on the config:
* **whisper(text)**: Whispers the text passed
* **sayMan(text)**: Speaks like a man
* **sayWoman(text)**: Speaks like a woman

Here is the code of this module, you can find the last version in my [github](https://github.com/arturogalan/nabaztag/blob/feature/initialCommits/nabaztagActions.py)

```python

import logging
import os
import sys
import threading
from multiprocessing import Process, Value
import time
import RPi.GPIO as GPIO
from datetime import datetime, timedelta
 # Import the ADS1x15 module.
import Adafruit_ADS1x15
adc = Adafruit_ADS1x15.ADS1115()
GAIN = 1

GPIO.setwarnings(False)
# Use BCM GPIO references instead of physical pin numbers
GPIO.setmode(GPIO.BCM)
# Define GPIO signals to use
StepPinLeftForward=13
StepPinLeftBackward=5
StepPinRightForward=26
StepPinRightBackward=6

# Define the ADC pins
EncoderPinRight=0
EncoderPinLeft=1
ScrollWheelPin=3
# END ADDED

# Set ear-motor pins 
GPIO.setup(StepPinLeftForward, GPIO.OUT) 
GPIO.setup(StepPinLeftBackward, GPIO.OUT) 
GPIO.setup(StepPinRightForward, GPIO.OUT) 
GPIO.setup(StepPinRightBackward, GPIO.OUT) 
GPIO.output(StepPinLeftForward, GPIO.LOW) 
GPIO.output(StepPinLeftBackward, GPIO.LOW) 
GPIO.output(StepPinRightForward, GPIO.LOW) 
GPIO.output(StepPinRightBackward, GPIO.LOW) 

current_milli_time = lambda: int(round(time.time() * 1000))

def runInParallel(*fns):
  proc = []
  for fn in fns:
    p = Process(target=fn)
    p.start()
    proc.append(p)
  for p in proc:
    p.join()

def move_ear(StepForwardPin, StepBackwardPin, EncoderPin, Direction, Sec):
    end_time = datetime.now() + timedelta(seconds=Sec)
    while datetime.now() < end_time:
        if Direction == 1:
            GPIO.output(StepForwardPin, GPIO.LOW)
            GPIO.output(StepBackwardPin, GPIO.HIGH)
        if Direction == -1:
            GPIO.output(StepForwardPin, GPIO.HIGH)
            GPIO.output(StepBackwardPin, GPIO.LOW)    
    GPIO.output(StepForwardPin, GPIO.LOW)
    GPIO.output(StepBackwardPin, GPIO.LOW)

def move_ear_till_up(StepForwardPin, StepBackwardPin, EncoderPin, Direction, Sec, UpFlag):
    end_time = datetime.now() + timedelta(seconds=Sec)
    while datetime.now() < end_time and UpFlag.value == False:
        if Direction == 1:
            GPIO.output(StepForwardPin, GPIO.LOW)
            GPIO.output(StepBackwardPin, GPIO.HIGH)
        if Direction == -1:
            GPIO.output(StepForwardPin, GPIO.HIGH)
            GPIO.output(StepBackwardPin, GPIO.LOW)    
    GPIO.output(StepForwardPin, GPIO.LOW)
    GPIO.output(StepBackwardPin, GPIO.LOW)

def ReadEarsEncoders2(EncoderPinLeft, EncoderPinRight, leftUpFlag, rightUpFlag): 
    millisLeft = current_milli_time() 
    millisRight = current_milli_time() 
    valuesLeft = 0 
    valuesRight = 0 
    while leftUpFlag.value == False or rightUpFlag.value == False: 
        millisLeftTemp = current_milli_time() 
        valuesLeftTemp = adc.read_adc(EncoderPinLeft, gain=GAIN) 
        if ((valuesLeftTemp > 2000 and valuesLeft < 2000) or (valuesLeftTemp < 2000 and valuesLeft > 2000)): 
            if (((millisLeftTemp - millisLeft) > 240) and (valuesLeftTemp < 2000)): 
               print ("Left UP:", millisLeftTemp - millisLeft, valuesLeftTemp)
               leftUpFlag.value = True
            millisLeft = millisLeftTemp 
            valuesLeft = valuesLeftTemp 
        millisRightTemp = current_milli_time() 
        valuesRightTemp = adc.read_adc(EncoderPinRight, gain=GAIN)
        if ((valuesRightTemp > 2000 and valuesRight < 2000) or (valuesRightTemp < 2000 and valuesRight > 2000)): 
            if (((millisRightTemp - millisRight) > 240) and (valuesRightTemp < 2000)): 
                print ("Right UP:", millisRightTemp - millisRight, valuesRightTemp)
                rightUpFlag.value = True
            millisRight = millisRightTemp 
            valuesRight = valuesRightTemp   

def earsUp():                
    # Defining synchronized variables shared between processes        
    rightUpFlag = Value('b', False)
    leftUpFlag = Value('b', False)
    # launching ears movements until encoder reads up
    p1 = Process(target=move_ear_till_up, args=(StepPinLeftForward,StepPinLeftBackward,EncoderPinLeft,1,4.55 * 2, leftUpFlag))
    p3 = Process(target=move_ear_till_up, args=(StepPinRightForward,StepPinRightBackward,EncoderPinRight,-1,4.5 * 2, rightUpFlag))
    p2 = Process(target=ReadEarsEncoders2, args=(EncoderPinLeft, EncoderPinRight, leftUpFlag, rightUpFlag)) 
    p1.start()
    p3.start()
    p2.start()
    p2.join()
    p1.join()
    p3.join()
def earsSad():
    p1 = Process(target=move_ear, args=(StepPinLeftForward,StepPinLeftBackward,EncoderPinLeft,1,1.2))
    p3 = Process(target=move_ear, args=(StepPinRightForward,StepPinRightBackward,EncoderPinRight,-1,1.2))
    p1.start()
    p3.start()
    p1.join()
    p3.join()
def earsPayAttention():
    p1 = Process(target=move_ear, args=(StepPinLeftForward,StepPinLeftBackward,EncoderPinLeft,-1,.8))
    p3 = Process(target=move_ear, args=(StepPinRightForward,StepPinRightBackward,EncoderPinRight,1,.8))
    p1.start()
    p3.start()
    p1.join()
    p3.join()  
def earsActionDone():
    p1 = Process(target=move_ear, args=(StepPinLeftForward,StepPinLeftBackward,EncoderPinLeft,1,.8))
    p3 = Process(target=move_ear, args=(StepPinRightForward,StepPinRightBackward,EncoderPinRight,-1,.8))
    p1.start()
    p3.start()
    p1.join()
    p3.join()  
def volumeUp():
    os.system("amixer set 'Master' 100%")
def whisper(text):
    os.system("espeak -ves+whisper -g4 -a100 \"{}\"".format(text))
def sayMan(text):
    os.system("espeak -ves+m4 -s200 -g4 -p1 -a100 \"{}\"".format(text))
def sayWoman(text):
    os.system("espeak -ves+f4 -s200 -g4 -p1 -a100 \"{}\"".format(text))

```