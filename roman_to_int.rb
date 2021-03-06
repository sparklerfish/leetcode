def roman_to_int(s)
    values = {
        "I" => 1,
        "V" => 5,
        "X" => 10,
        "L" => 50,
        "C" => 100,
        "D" => 500,
        "M" => 1000
    }

    total = 0

    (0...s.length).each do |i|
        char = s[i]
        next_char = s[i + 1]
        if next_char && values[char] < values[next_char]
            total -= values[char]
        else
            total += values[char]
        end
    end

    total
end

roman_to_int("VIII")