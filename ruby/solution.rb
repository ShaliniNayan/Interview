class Solution
    # @param a : constant array of integers
    # @param b : constant array of integers
    # @return an integer
    def canCompleteCircuit(a, b)
    n = a.length
  total_gas = 0
  current_gas = 0
  start_station = 0

  for i in 0..n-1
    total_gas += a[i] - b[i]
    current_gas += a[i] - b[i]

    if current_gas < 0
      start_station = i + 1
      current_gas = 0
    end
  end

  if total_gas >= 0
    return start_station
  else
    return -1
  end

    end
end
