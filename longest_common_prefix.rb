def find_common_prefix(array)
    return "" if array.empty?
    return array[0] if array.length == 1
    prefix = ""
    i = 0
    current_char = ""
    while true
        array.each do |word|
            if current_char == "" 
                current_char = word[i] 
                next
            end
        return prefix if word[i].nil? || word[i] != current_char 
        end
        i += 1
        prefix << current_char 
        current_char = ""
    end
end