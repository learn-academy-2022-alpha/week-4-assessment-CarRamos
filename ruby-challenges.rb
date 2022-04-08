# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7

def odd_or_even (number)
    if number % == 0
        '#{number} is even'
    elsif
        '#{number} is odd'
end
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete



album1 = 'Rubber Soul'
puts album1.delete "a,e,i,o,u"


# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
puts album2.delete "a,e,i,o,u"
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
puts album3.delete "a,e,i,o,u"
# Expected output: 'bby Rd'



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

is_palindrome1 = 'Racecar'

def palindrome (string)
    if string = string.reverse
        '#{string} is a palindrome'
    elsif
        '#{string} is not a palindrome'

# Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'
