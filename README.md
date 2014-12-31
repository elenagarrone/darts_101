[![Code Climate](https://codeclimate.com/github/elenagarrone/darts_101/badges/gpa.svg)](https://codeclimate.com/github/elenagarrone/darts_101)

Darts 101
=========
As challange for week 5 I decided to build the 'darts 101' game (instead of 'bowling') using JavaScript and Jasmine for testing.

![darts_board](http://www.patrickchaplin.com/images/faq/dartboard1.gif)

Specification:
--------------

Each player starts with a score of 101 and takes turns to throw 3 darts.  The score for each turn is calculated and deducted from the players total.  Bullseye scores 50, the outer ring scores 25 and a dart in the double or treble ring counts double or treble the segment score.  The objective is to be the first player to reduce the score to exactly zero, the only caveat being that the last dart thrown must land in a double or the bullseye.

Technologies:
-------------
- JavaScript
- Jasmine

To do:
------
- the last dart thrown must land in a double or the bullseye

How to use:
-----------
Clone the repo:
```shell
$ git clone https://github.com/elenagarrone/darts_101.git
```
Change into the directory:
```shell
$ cd darts_101
```
Play with it on the console:
```shell
$ open SpecRunner.html
```
Right click on the page and select 'inspect element', then 'console'.

How to test it:
--------------
Run:
```shell
$ open SpecRunner.html
```
