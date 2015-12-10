# Bubble Sort

Today you will be writing a simple sorting algorithm in Ruby! You will ***not*** be allowed to use `.sort`, `.sort_by`, or any other Ruby methods to solve this exercise. Your sorting algorithm should be able to sort the following array of numbers in order from greatest to least:

```ruby
numbers = [5, 2, 12, 7, 56, 42, 34]
```
From [Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort):
> Bubble sort ... is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order.

Start by pseudocoding the steps you'll need to take to put the elements in the correct order, then test out your method!

### Bonus
Allow the user to pass a command line argument which will either run the sort from greatest to least, or from least to greatest.

```
$ ruby sort.rb
ascending
[2, 5, 7, 12, 34, 42, 56]
```
