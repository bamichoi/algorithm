def solution(arr):
    answer = []
    
    stack = ["a"]
    
    for num in arr:
        if stack[-1] != num:
            answer.append(num)
        stack.append(num)
        
    return answer