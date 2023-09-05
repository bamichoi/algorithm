def solution(numbers, target):
    answer = 0
    
    def dfs(num, depth):
        nonlocal answer
        
        if depth == len(numbers):
            if num == target:
                answer += 1
            return
        
        signs = [-num, num]
        if depth == 1:
            for i in range(2):
                dfs(signs[i] + numbers[depth], depth + 1)
                dfs(signs[i] - numbers[depth], depth + 1)         
        else:
            dfs(num + numbers[depth], depth + 1)
            dfs(num - numbers[depth], depth + 1)
                
    
    dfs(numbers[0], 1)
    
    return answer