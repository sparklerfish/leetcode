
# https://leetcode.com/problems/house-robber/

# You are a professional robber planning to rob houses along a street. 
# Each house has a certain amount of money stashed, the only constraint stopping you 
# from robbing each of them is that adjacent houses have security system connected 
# and it will automatically contact the police if two 
# adjacent houses were broken into on the same night.

# Given a list of non-negative integers representing the amount of money of each house, 
# determine the maximum amount of money you can rob tonight without alerting the police.

# Example 1:

# Input: [1,2,3,1]
# Output: 4
# Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
#   Total amount you can rob = 1 + 3 = 4.

    # for each number:
    # is dp[i - 1] + num or dp[i] bigger?
    # dp[i + 1] = the bigger one
# Example 2:

# Input: [2,7,9,3,1]
# Input: [40,7,9,50,1]

[40, 40, 49, 90, 90]
[0, 40, 40, ] 
# Output: 12
# Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
#   Total amount you can rob = 2 + 9 + 1 = 12.

def rob(nums)
    money = Array.new(nums.length + 2, 0)
    (2...money.length).each do |i|
        money[i] = [money[i - 2] + nums[i - 2], money[i - 1]].max
    end
    money.last
end
