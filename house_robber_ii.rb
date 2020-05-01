
# You are a professional robber planning to rob houses along a street. 
# Each house has a certain amount of money stashed. All houses at this place are arranged 
# in a circle. That means the first house is the neighbor of the last one. Meanwhile, 
# adjacent houses have security system connected and it will automatically contact the police 
# if two adjacent houses were broken into on the same night.

# Given a list of non-negative integers representing the amount of money of each house, 
# determine the maximum amount of money you can rob tonight without alerting the police.

# Example 1:

# Input: [2,3,2]
# Output: 3
# Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2),
#              because they are adjacent houses.
# Example 2:

# Input: [1,2,3,1]
# Output: 4
# Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
#              Total amount you can rob = 1 + 3 = 4.
#
# [100,1,879487597635948,1,1,1000]



#[2,3,2] input

# [0, 0, 0, 0]
# [0, 0, 0, 0]

def rob(nums)
    nums_1 = nums[0...-1]
    money_1 = Array.new(nums_1.length + 2, 0)

    (2...money_1.length).each do |i|
        money_1[i] = [money_1[i - 2] + nums_1[i-2], money_1[i - 1]].max
    end

    nums_2 = nums[1..-1].reverse
    money_2 = Array.new(nums_2.length + 2, 0)

    (2...money_2.length).each do |i|
        money_2[i] = [money_2[i - 2] + nums_2[i-2], money_2[i - 1]].max
    end

    [money_1.last, money_2.last].max
end