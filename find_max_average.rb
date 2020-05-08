def find_max_average(arr, k)
    first = 0;
    last = k;
    
    sum = arr[0...k].reduce(:+)
    max = sum


    while last < arr.length
        sum -= arr[first]
        sum += arr[last]
        max = [max, sum].max

        first += 1
        last += 1
    end

    1.0 * max / k
end