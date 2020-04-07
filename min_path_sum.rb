def min_path_sum(grid)
    m = grid.length
    n = grid[0].length

    table = Array.new(m) { Array.new(n) {Infinity} }

    (0...m).each do |i|
        (0...n).each do |j|
            if j < (n - 1)
                table[i][j + 1] = [table[i][j] + grid[i][j + 1], table[i][j + 1]].min
            end

            if i < (m - 1)
                table[i + ][j] = [table[i][j] + grid[i + 1][j], table[i + 1][j]].min
            end
        end
    end
    
    table.last.last
end