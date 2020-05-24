def change_land_to_water(grid, i, j)
    return if i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] == '0'
    grid[i][j] = '0'
    change_land_to_water(grid, i - 1, j)
    change_land_to_water(grid, i + 1, j)
    change_land_to_water(grid, i, j + 1)
    change_land_to_water(grid, i, j - 1)    
end


def num_islands(grid)
    island_count = 0
    return 0 if grid.empty?
    
    (0...grid.length).each do |i|
        row = grid[i]
        (0...row.length).each do |j|
            if grid[i][j] == '1'
                island_count += 1
                change_land_to_water(grid, i, j)
            end
        end
    end
    island_count
end