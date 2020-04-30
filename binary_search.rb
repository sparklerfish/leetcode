def search(nums, target, left = 0, right = nums.length - 1)
    return -1 if left > right
    mid = (left + right) / 2
    case target <=> nums[mid]
    when 0
        return mid
    when 1
        return search(nums, target, mid + 1, right)
    when -1
        return search(nums, target, left, mid - 1)
    end
end