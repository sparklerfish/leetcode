# Say you have an array for which the ith element is the price of a given stock 
# on day i.

# If you were only permitted to complete at most one transaction (i.e., buy one 
# and sell one share of the stock), design an algorithm to find the maximum profit.

# Note that you cannot sell a stock before you buy one.

# Input: [7,1,5,3,6,4]
# Output: 5
# Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
#              Not 7-1 = 6, as selling price needs to be larger than buying price.
# Example 2:

# Input: [7,6,4,3,1]
# Output: 0
# Explanation: In this case, no transaction is done, i.e. max profit = 0.

# table - initialize an array of one more than input - profits - fill it with zeroes
# iterate through the prices
# lowest buy price initialized to infinity
# lowest buy price - is the price we are currently at lower?  reassign
# previous profit bigger than current price minus buy price? 
# set the next element in profits array to whichever is bigger -- previous profit or current price minus lowest buy price

# [7,6,4,3,1]
# profits = [0, 0, 0, 0, 0, 0]
# buy = 1

def best_time_to_buy_and_sell(prices)
    profits = Array.new(prices.length + 1, 0)
    buy = Float::INFINITY

    prices.each_with_index do |price, i|
        buy = [buy, price].min
        profits[i + 1] = [profits[i], price - buy].max
    end

    profits.last
end


def max_profit(prices)
    tail = prices[0]
    max_profit = 0
    prices.each_index do |i|
        tail = prices[i] if prices[i] < tail
        potential_profit = prices[i] - tail
        max_profit = potential_profit if potential_profit > max_profit
    end
    max_profit
end


def max_profit(prices)
    b = Float::INFINITY
    p = Array.new(prices.length + 1, 0)
    
    (0...prices.length).each do |i|
        b = [b, prices[i]].min
        p[i+1] = [p[i], prices[i] - b].max
    end
    p[-1]
end


[1,3,5,2,3,1,5]

def single_number(nums)
    counts = Hash.new(0)
    nums.each { |num| counts[num] += 1 }
    counts.key(1)
end

def single_number2(nums)
    nums.reduce do |acc, num|
        acc ^= num
    end
end

[3, 2, 3]

# 011 3
# 010 2
  001
# 011 3
  010 2